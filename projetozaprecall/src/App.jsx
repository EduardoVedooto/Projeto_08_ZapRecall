import { useState } from 'react';
import "./css/reset.css";
import "./css/style.css";
import TelaInicial from "./components/components-tela-inicio/TelaInicial";
import TelaFlashCard from "./components/components-tela-flashcard/TelaFlashCard";

export default function App(){
    const [paginaAtual, setPaginaAtual] = useState(0);

    function aumentarQtd(){
        setPaginaAtual(paginaAtual + 1);
    }

    return (
        <>
        {(paginaAtual === 0) ? <TelaInicial aumentarQtd={aumentarQtd}></TelaInicial> : <TelaFlashCard></TelaFlashCard>}
        </>
    );


}