
import './Categories.css';
import { useEffect, useState } from 'react';


function Categories(props) {
    const [categoriesList, setCategoriesList] = useState([]); 

    useEffect(() => {
        const categoriesData = [
            {title: 'TechCrunch', url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a4e35254d7c7440f86997faeffd303b6'},
            {title: 'Apple', url: 'https://newsapi.org/v2/everything?q=apple&from=2021-08-24&to=2021-08-24&sortBy=popularity&apiKey=a4e35254d7c7440f86997faeffd303b6'},
            {title: 'USA', url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a4e35254d7c7440f86997faeffd303b6'},
            {title: 'Tesla', url: 'https://newsapi.org/v2/everything?q=tesla&from=2021-07-25&sortBy=publishedAt&apiKey=a4e35254d7c7440f86997faeffd303b6'},
            {title: 'Wall Street', url: 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a4e35254d7c7440f86997faeffd303b6'}        
        ];
        setCategoriesList(categoriesData);
    }, []);

    let handleClickEvent = (url) => {
        props.getUrlInParent(url);
    }
    
    return (
        <div className="categories">
            <ul>
                {categoriesList.map((item, i) => <li key={i} onClick={() => handleClickEvent(item.url)}>{item.title}</li>)}
            </ul>
        </div>
    )
}

export default Categories;