import articles from "../Articles";

export default function MyMain(){


    return(
        <div className="wrapper">
            {articles.map(article => (
                <h2 key={article.id}>{article.title}</h2>
             ))} 
        </div>    
    );
}