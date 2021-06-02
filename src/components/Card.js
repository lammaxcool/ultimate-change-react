import Button from './Button';

import "./Card.scss";

function Card(props) {
    return (
        <>
            <div className="card mb-4">
                <p>{props.name}</p>
                <img className="card-img-top" src={props.src} data-holder-rendered="true"></img>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <Button name="Купить"/>
                        <p className="card-text">{props.price} грн/месяц</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;