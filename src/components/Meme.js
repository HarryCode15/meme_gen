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

    return(
        <main className="meme-form">
            <label>Top Text</label>
            <label>Bottom Text</label>
            <input type="text" placeholder="Enter top text here..." className="meme-form-input" />
            <input type="text" placeholder="Enter bottom text here..." className="meme-form-input" />
            <button type="submit" 
                    className="meme-form-btn"
                    onClick={getTheMeme}
                    >
                        Get new meme image 🖼
                    </button>
            <section className="meme-section">
                <img src={memeImg.randomImage} alt="Meme" className="meme-section-image" />
            </section>
        </main>
    )
}