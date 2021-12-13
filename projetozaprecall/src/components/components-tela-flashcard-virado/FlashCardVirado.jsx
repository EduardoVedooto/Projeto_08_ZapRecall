import "./style.css";

export default function FlashCardVirado(){
    return (
        <div className="footerflashcardvirado">
            <div className="bloco neutro">
                <span>Aprendi</span>
                <span>agora</span>
            </div>

            <div className="bloco incorreto">
                <span>Não</span>
                <span>lembrei</span>
            </div>
                
            <div className="bloco correto">
                <span>Lembrei</span>
                <span>com</span>
                <span>esforço</span>
            </div>

            <div className="bloco imediatamente font-texto">
                <span>Zap!</span>  
            </div>
        </div>
    );
}