import "./AccordionItem.scss";

function AccordionItem(props) {
    return(
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <p className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        {props.header}
                    </p>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{props.body}</div>
                </div>
            </div>
        </>
    );
}

export default AccordionItem;