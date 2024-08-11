import React from "react";


export default function MemeInputs(){
    return(
        <section className="meme-form">
            <label>Top Text</label>
            <label>Bottom Text</label>
            <input type="text" placeholder="Enter top text here..." className="meme-form-input" />
            <input type="text" placeholder="Enter bottom text here..." className="meme-form-input" />
            <button type="submit" className="meme-form-btn">Get new meme image 🖼</button>
        </section>
    )
}