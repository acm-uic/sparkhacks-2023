import './circularimg.css'

export default function CircularImg(props){
    return (
        <img className="circular-img" src={props.href} alt={props.alt ? props.alt : ""} />
    )
}
