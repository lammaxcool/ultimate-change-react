import "./TypeItem.scss";

function TypeItem(props) {
    return(
        <div className="type-item">
            <img src={props.img} />
            <p>{props.name}</p>
        </div>
    );
}

export default TypeItem;