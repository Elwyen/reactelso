import Kartya from "./Kartya"

function Kartyak(props){
    return (
        <>
        {
            props.lista.map((ember,index) => {
            return(<Kartya obj={ember} key={index} />
        )
        })}
        </>
    )
}

export default Kartyak