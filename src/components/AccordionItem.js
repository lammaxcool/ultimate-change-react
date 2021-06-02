import "./AccordionItem.scss";

function AccordionItem(props) {
    return(
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={props.heading_id}>
                    <p className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.colapse_id} aria-expanded="false" aria-controls={props.colapse_id}>
                        {props.header}
                    </p>
                </h2>
                <div id={props.colapse_id} className="accordion-collapse collapse" aria-labelledby={props.heading_id} data-bs-parent={"#" + props.data_bs_parent}>
                    <div className="accordion-body">{props.body}</div>
                </div>
            </div>
        </>
    );
}

export default AccordionItem;