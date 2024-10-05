// Kartya komponens JSX nyelven
import './Kartya.css';
function Kartya(props){


    return(
        <div className="kartya">
            <h3>Nev: {props.obj.nev}</h3>
            <p>Kor: {props.obj.kor} ev</p>
        </div>
    )
}

export default Kartya;