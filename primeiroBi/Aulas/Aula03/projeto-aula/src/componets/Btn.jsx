export default function Btn(props){
    return(
        <button onClick={props.funcao}>
            {props.textoBtn}
        </button>
    );
}