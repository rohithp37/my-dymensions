import { useEffect, useState } from 'react';
import { catList } from './CatList';


function Categories({getUrlInParent}) {
    const [categoriesList, setCategoriesList] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        setCategoriesList(catList.getCats());
    }, []);

    let handleClickEvent = (url, index) => {
        getUrlInParent(url);
        setSelectedIndex(index);
    }
    
    return (
        <div className="categories">
            <ul>
                {categoriesList.map((item, i) => <li key={i} onClick={() => handleClickEvent(item.url, i)} className={i === selectedIndex ? 'selectedCategory' : ''}>{item.title}</li>)}
            </ul>
        </div>
    )
}

export default Categories;