import './App.css';
import { useEffect, useState } from 'react';
import NewsCard from './components/NewsCard';
import Categories from './components/Categories';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [catUrl, setCatUrl] = useState('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a4e35254d7c7440f86997faeffd303b6');
  const logoSrc = 'https://upload.wikimedia.org/wikipedia/commons/a/a6/ABC_News_solid_black_logo.svg';

  useEffect(() => {
    fetch(catUrl)
    .then(res => res.json())
    .then(result => {
      setIsLoaded(true);
      setItems(result.articles);
      },
      error => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [catUrl])

  let getUrlInParent = (url) => {
    setCatUrl(url);
  } 

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loadingData"><p>Loading...</p></div>;
  } else {
    return (
      <div className="App">
        <img src={logoSrc} className="logo" alt="new logo" />
        <Categories getUrlInParent={getUrlInParent} />
        <section className="grid-container">
          {items.map((item, i) => (
            <NewsCard key={i} data={item} />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
