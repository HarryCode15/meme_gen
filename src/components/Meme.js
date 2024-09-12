import React, { useState, useEffect } from "react";
// import MemeData from "../Data/MemeData";


export default function MemeInputs(){
    const [memeImg, setMemeImg] = useState({
        topText:"",
        bottomText:"",
        randomImage:"/images/meme_pointer.png"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(gotData => setAllMemes(gotData.data.memes))
    },[])

    console.log(allMemes)

    function getTheMeme(){
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomIndex].url
        setMemeImg(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
        
    }

    function handleChange(event){
        const {name, value} = event.target
        setMemeImg(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }

    return(
        <main className="meme-form">
            <label htmlFor="top">Top Text</label>
            <label htmlFor="bottom">Bottom Text</label>
            <input 
                id="top"
                type="text" 
                placeholder="Enter top text here..." 
                className="meme-form-input" 
                onChange={handleChange}
                name="topText"
                value={memeImg.topText}
                />

            <input 
                id="bottom"
                type="text" 
                placeholder="Enter bottom text here..." 
                className="meme-form-input" 
                onChange={handleChange}
                name="bottomText"
                value={memeImg.bottomText}
                />

            <button type="submit" 
                    className="meme-form-btn"
                    onClick={getTheMeme}
                    >
                        Get new meme image 🖼
                    </button>
            <section className="meme-section">
                <img src={memeImg.randomImage} alt="Meme" className="meme-section-image" />
                <h2 className="meme-text top">{memeImg.topText}</h2>
                <h2 className="meme-text bottom">{memeImg.bottomText}</h2>
            </section>
        </main>
    )
}