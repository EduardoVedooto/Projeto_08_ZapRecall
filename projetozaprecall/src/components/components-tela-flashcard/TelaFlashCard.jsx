import { useState } from "react";
import "./style.css";
import Header from ".././Header";
import TelaDefault from ".././TelaDefault";
import VirarFlashCard from "../components-VirarFlashCard.jsx/VirarFlashCard";
import FlashCardVirado from "../components-tela-flashcard-virado/FlashCardVirado";

export default function TelaFlashCard(){
    const [virado, setVirado] = useState(0);

    function aumentarQtd(){
        setVirado(virado + 1);
    }

    return (
        <div className="telaflashcard">
            <Header />
            <TelaDefault >
                {(virado === 0) ? <VirarFlashCard aumentarQtd={aumentarQtd}></VirarFlashCard> : <FlashCardVirado></FlashCardVirado> }
            </TelaDefault>
        </div>
    );
}

/*
<header>
    <img src={logomini} />
</header>
<section className="section">
    <h1>O que é JSX?</h1>
</section>
*/