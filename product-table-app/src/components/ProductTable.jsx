import { useState, useEffect, useRef, useCallback } from 'react';
import './ProductTable.css';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');
  
  const observerTarget = useRef(null);
  const inputRef = useRef(null);
  const limit = 10;

  const fetchProducts = useCallback(async (skipValue) => {
    if (loading) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skipValue}`);
      const data = await response.json();
      
      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts(prev => [...prev, ...data.products]);
        setSkip(skipValue + limit);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    fetchProducts(0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchProducts(skip);
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [skip, hasMore, loading, fetchProducts]);

  useEffect(() => {
    if (editingId && inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
      inputRef.current.select();
    }
  }, [editingId]);

  const handleEdit = (id, title) => {
    setEditingId(id);
    setEditValue(title);
  };

  const handleSave = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, title: editValue } : product
    ));
    setEditingId(null);
    setEditValue('');
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditValue('');
  };

  const handleKeyPress = (e, id) => {
    if (e.key === 'Enter') {
      handleSave(id);
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className="table-container">
      <h1>Product List</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                {editingId === product.id ? (
                  <div className="edit-container">
                    <input
                      ref={inputRef}
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => handleKeyPress(e, product.id)}
                    />
                    <button onClick={() => handleSave(product.id)}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </div>
                ) : (
                  <div className="title-container">
                    <span>{product.title}</span>
                    <button 
                      className="edit-btn"
                      onClick={() => handleEdit(product.id, product.title)}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {loading && <div className="loading">Loading more products...</div>}
      
      {hasMore && <div ref={observerTarget} className="observer-target"></div>}
      
      {!hasMore && <div className="end-message">No more products to load</div>}
    </div>
  );
};

export default ProductTable;
