//importo array di oggetti 
import articles from "../Articles";
//importo variabile di stato
import { useState } from "react";

export default function MyMain(){
    // Variabile di stato dell'input utente 
    const [input, setInput] = useState("");

    // Variabile di stato articolo
    const [articleList, setArticleList] = useState(articles);
     // gestione submit 
    const handleSubmit = e => {
        //blocco comportamento di default del form
        e.preventDefault()
        //creo nuovo articolo inserendo anche un id unico 
        const newArticle = {title: input, id: articleList.length + 1,}
        //creo nuovo array in cui verrà aggiunto il nuovo articolo
    setArticleList([...articleList, newArticle])
    };
    return(
        <>
        <div className="wrapper">
            {/*inserisco gestione submit nel form*/}
            <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Inserisci il titolo dell'articolo"
            value={input}
            onChange={e => setInput(e.target.value)}
             />
             </form>
             {/* estrapolo il singolo articolo e inserisco l'id e il titolo */}
            {articleList.map(article => (
                <h2 key={article.id}>{article.title}</h2>
             ))} 
        </div>    
        </>
    );
}