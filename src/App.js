import { useEffect, useState } from 'react';
import NewsCard from './components/NewsCard';
import Categories from './components/Categories';
import ErrorMessage from './components/ErrorMessage';
import { catList } from './components/CatList';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [catUrl, setCatUrl] = useState(catList.getCats()[0].url);

  let getDataRequest = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(result => {
        if(result.status === 'error') {
          setIsLoaded(true);
          setError({message: result.message});
          return;
        }
        setError(null);
        setIsLoaded(true);
        setItems(result.articles);
      },
      error => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }

  useEffect(() => {
    getDataRequest(catUrl);
  }, [catUrl])

  let getUrlInParent = (url) => {
    setCatUrl(url);
  }

  const getDefaultUrl = () => {
    setCatUrl(catList.getCats()[0].url);
  }

  if (error) {
    return <div><ErrorMessage message={error.message} getDefaultUrl={getDefaultUrl} /></div>;
  } else if (!isLoaded) {
    return <div className="loadingData"><p>Loading...</p></div>;
  } else {
    return (
      <div className="App">
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
