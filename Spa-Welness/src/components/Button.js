import '../css/button.css';

export default function Button(props){
    return(
        <>
            <button class="btn"> {props.text} </button>
        </>
    )
}