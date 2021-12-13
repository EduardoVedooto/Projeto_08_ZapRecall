import turn from "../.././assets/turn.png";
import "./style.css";

export default function VirarFlashCard(props){
    return (
        <div className="footervirarflashcard">
            <img src={turn} onClick={props.aumentarQtd}/>
        </div>
    );
}