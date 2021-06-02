import './Button.scss';

function Button(props) {
    return (
        <button type="button" className={`btn btn-primary btn-color-${props.color}`}>
            {props.name}
        </button>
    );
}

export default Button;