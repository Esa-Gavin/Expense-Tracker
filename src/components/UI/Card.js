import './Card.css';

function Card(props){
    const madarasa = 'card ' + props.className;

    return <div className={madarasa}>{props.children}</div>
    
}

export default Card;