import Button from './Button';

import "./Card.scss";

function Card(props) {
    return (
        <>
            <div class="card mb-4 box-shadow">
                <p>{props.name}</p>
                <img class="card-img-top"  src={props.src} data-holder-rendered="true"></img>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <Button name="Купить"/>
                        <p class="card-text">{props.price} грн/месяц</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;