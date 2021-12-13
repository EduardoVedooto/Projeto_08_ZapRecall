import "./style.css";
import logo from "../../assets/logo.png"
import next from "../../assets/next.png"

export default function TelaInicial(props){   

    return (
        <>
            <div className="tela-inicial">
                <img className= "logo" src={logo} />
                <div className="elemento-botao" onClick={props.aumentarQtd}>
                    <span>Praticar React</span>
                   <img src={next} />
                </div>
            </div>
       
        </>
        );
}
