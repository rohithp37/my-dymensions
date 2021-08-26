import './NewsCard.css';

function NewsCard(props){
    return(
        <section className="newswrapper">
            <div className="newsTopSection">
                <img src={props.data.urlToImage} alt={props.data.title} />
                <strong>{props.data.title}</strong>
                <p dangerouslySetInnerHTML={{ __html: props.data.description }}></p>
            </div>
            <div className="bottomInfo">
                <span>{props.data.author}</span>
                <span>{new Date(props.data.publishedAt).toDateString()}</span>
            </div>
        </section>
    )
}

export default NewsCard;