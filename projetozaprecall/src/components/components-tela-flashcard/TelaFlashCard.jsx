import "./style.css";
import Header from ".././Header";
import TelaDefault from ".././TelaDefault";

export default function TelaFlashCard(){

    return (
        <div className="telaflashcard">
            <Header />
            <TelaDefault />
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