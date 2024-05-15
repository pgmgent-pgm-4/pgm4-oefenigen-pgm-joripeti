import logo from './logo.svg';
import './App.css';
import { useFetch } from './hooks/useFetch';
import { ThemeArea } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const url = 'https://fakestoreapi.com/products';
  const { data: products, loading, error } = useFetch(url);
  if (loading)
    return <>... loading</>;
  if (error) 
    return <>... error</>;
  console.log(products);
  return (
    <ThemeArea>
      <ThemeSwitcher/>
      <>
        <h1>products</h1>
        <ul>
          {products.map((product) => (
            <li key={`product-${product.id}`}>
              {product.title}
              <img src={product.image} alt={product.title} className="image"></img>
            </li>
          ))}
        </ul>
      </>
    </ThemeArea>
  );
}

export default App;
