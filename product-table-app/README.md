# Product Table - Infinite Scroll Application 🛍️

A modern React application that fetches and displays products from an API with infinite scroll functionality, editable product names, and a sophisticated dark theme UI.

## Features

- ** API Integration**: Fetches product data from [DummyJSON API](https://dummyjson.com/products)
- ** Infinite Scroll**: Uses Intersection Observer API for seamless infinite scrolling
- ** Editable Titles**: Edit product names inline with Save/Cancel options
- ** Dynamic Table**: Displays Title, Brand, Category, Price, and Rating
- ** Dark Theme**: Sophisticated dark mode with earthy color palette
- ** Performance Optimized**: Uses functional components, React Hooks, and efficient state management
- ** Modern UI**: Smooth animations, subtle shadows, and responsive design
- ** Automatic Loading**: Loads 10 products per batch, 60+ products total available

## 🚀 Tech Stack

- **React** 18+ - UI Library
- **Vite** - Build tool & dev server
- **CSS3** - Styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript

## 📋 Requirements

- Node.js (v14+)
- npm or yarn

## 🔧 Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd product-table-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   ```
   http://localhost:5173
   ```

## 📖 Usage

### Viewing Products
- Products automatically load as you scroll down the page
- Each batch contains 10 products
- Smooth loading indicator appears while fetching

### Editing Product Names
1. Click the **Edit** button next to a product title
2. Modify the product name in the input field
3. Press **Save** to confirm
4. Press **Cancel** to discard changes

### Infinite Scroll
- Scroll down to the bottom of the table
- New products automatically load as the observer target comes into view
- "No more products to load" message appears when all products are fetched

## 📁 Project Structure

```
product-table-app/
├── src/
│   ├── components/
│   │   ├── ProductTable.jsx      # Main component with logic
│   │   └── ProductTable.css      # Component styles
│   ├── App.jsx                   # Root component
│   ├── App.css                   # App-level styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Entry point
├── public/                       # Static assets
├── index.html                    # HTML template
├── package.json                  # Dependencies
└── vite.config.js               # Vite configuration
```


```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📝 Notes

- All product data is fetched from [DummyJSON API](https://dummyjson.com/)
- No backend authentication required
- CORS-enabled for browser requests
- Data changes are not persisted to the backend

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built as part of a Virtual Internship Assignment demonstrating React skills.

---

**Made with ❤️ using React + Vite**
