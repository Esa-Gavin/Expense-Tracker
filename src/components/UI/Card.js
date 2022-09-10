import './Card.css';

const Card = (props) => {
    const madarasa = 'card ' + props.className;

    return <div className={madarasa}>{props.children}</div>
    
}

export default Card;