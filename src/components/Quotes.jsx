import { useState, useEffect } from "react";
const randomQuote = "https://inspo-quotes-api.herokuapp.com/quotes/random"

export default function Quotes () {
    const [quote, setQuote] = useState("");

    async function fetchQuote () {
        const response = await fetch(randomQuote);
        const jsonResponse = await response.json();
        const quote = jsonResponse.quote;
        console.log(quote);
        setQuote(quote)
    }
    useEffect(() => {
        fetchQuote()
    }, [])
    return (
        <div>
            <button onClick={fetchQuote}>Get Random Quote</button>
            <h1>{quote.text}</h1>
            <h2> - {quote.author} </h2>
        </div>
    )
}