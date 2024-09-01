import React, { useState } from "react";
import MemeData from "../Data/MemeData";


export default function MemeInputs(){
    const [memeImg, setMemeImg] = useState({
        topText:"",
        bottomText:"",
        randomImage:"/images/meme_pointer.png"
    })

    function getTheMeme(){
        const memeArr = MemeData.data.memes
        const randomIndex = Math.floor(Math.random() * memeArr.length)
        const url = memeArr[randomIndex].url
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