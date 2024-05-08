import { Content } from "./styles"
import { useState } from "react"

export function FrameTwo(){
    const [results, setResults] = useState([])
    const [word, setWord] = useState()
    const [recent, setRecent] = useState([])

    //const { data } = useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)


    async function search(){
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await response.json()
        setResults(data)
        console.log(results)
        /*let rct = document.getElementById("rct")
        rct.innerHTML += `
            <li>${word}</li>
        `;
        if(rct.children.length > 10){
            rct.innerHTML = `<li>${word}</li>`
        }*/
        setRecent([...recent, word])
        console.log(recent)
    }

    return(
        <Content>
            {/*<div className="left">
                <h1>Recents</h1>
                <ul id="rct">{recent.map(e => {
                    return(
                        <>
                        <li onClick={() => {
                            setWord(e)
                            console.log(word)
                            search()
                            document.getElementById("toSearch").value = e
                        }}>{e}</li>
                        </>
                    )
                })}</ul>
            </div>*/}
            <div className="right">
                <div className="card">
                    <div className="search">
                        <input
                        type="text"
                        id="toSearch"
                        value={word}
                        onChange={e => {
                            setWord(e.target.value)
                        }}/>
                        <button id="btn" onClick={search}>search</button>
                    </div>

                    <h1 className="name">{results[0]?.word || results?.title || "Example"}</h1>
                    <h2 className="phonetic">{results[0]?.phonetic || "ex"}</h2>

                    <p className="definition">{results[0]?.meanings[0].definitions[0].definition || results?.message ||"example"}</p>

                    <span className="example">{results[0]?.meanings[0].synonyms[0] || results?.resolution || "No synonyms"}</span>
                </div>
            </div>
        </Content>
    )
}