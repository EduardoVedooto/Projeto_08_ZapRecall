import "./components-tela-flashcard/style.css";

export default function TelaDefault(props){
    return (
        <div className="telaflashcard">
            <section>
                <div className="status">
                    <h2>1/8</h2>
                </div>
                <div className="texto">
                    
                </div>
                <footer>
                    {props.children}
                </footer>

            </section>
        </div>
    );
}
