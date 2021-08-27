import { useState, useEffect } from 'react';

function NewsCard({data}){
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(false);
        const timer = setTimeout(() => {
            setIsLoading(true);
          }, 200);
        return () => clearTimeout(timer);
    }, [data]);

    if(!isLoading){
        return <div></div>;
    }else{
        return(
            <section className="newswrapper">
                <div className="newsTopSection">
                    <img src={data.urlToImage} alt={data.title} />
                    <strong>{data.title}</strong>
                    <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
                </div>
                <div className="bottomInfo">
                    <div>
                        <span>{data.author}</span>
                        <span>{new Date(data.publishedAt).toDateString()}</span>
                    </div>
                    <div>
                        <a href={data.url} target="_blank" rel="noopener noreferrer">more...</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewsCard;