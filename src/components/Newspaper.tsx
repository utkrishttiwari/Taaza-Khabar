import axios from "axios";
import { useEffect, useState } from "react";

interface Article {
    title: string;
    urlToImage?: string;
    publishedAt: string;
    content: string;
}

const Newspaper = () => {

    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    today.setDate(today.getDate() - 1);
    const previousDate = today.toISOString().split("T")[0];
    
    const [data, setData] = useState<Article[]>([]);
    const API_URL = `https://newsapi.org/v2/everything?q=apple&from=${previousDate}&to=${formattedDate}&sortBy=popularity&apiKey=b0788061f10b4f2095f370a5eb3d3e2d`;

    useEffect(() => {
        axios
        .get(API_URL)
        .then((response) => {
            setData(response.data.articles)
            console.log(response.data.articles, "Data");
        })
        .catch((error) => alert("Error fetching data: "+error));
    }, []);

    const marqueeTxt = data.slice(0,3).map((item) => item?.title).join(' • ');

    return (
        <>
    <div className="marquee">
        <p>{marqueeTxt}</p>
    </div>
    <section className='newsSec'>
        <div className="paper">
            {data.map((item, index) => (
                <div className="item" key={index}>
                    <img src={item?.urlToImage} />
                    <h3>{item?.title}</h3>
                    <small>{item?.publishedAt}</small>
                    <p>{item?.content}</p>
                </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default Newspaper;