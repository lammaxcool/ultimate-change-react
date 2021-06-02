import "./FAQ.scss";

import TypeItem from "../components/TypeItem";
import AccordionItem from "../components/AccordionItem"

import FAQ1 from "../images/pic_1_1_FAQ.png";

function FAQ() {
    return(
        <>
            <div className="container-fluid">
                <div className="row faq">
                    <div className="col-2">
                        <div className="list-group">
                            <TypeItem img={FAQ1} name="Другое" />
                            <TypeItem img={FAQ1} name="Другое" />
                            <TypeItem img={FAQ1} name="Другое" />
                        </div>
                    </div>
                    <div className="col-1">
                        {/* empty */}
                    </div>
                    
                    <div className="col-9">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <AccordionItem data_bs_parent="accordionFlushExample" heading_id="first-head" colapse_id="first-body" header="header1" body="body1" />
                            <AccordionItem data_bs_parent="accordionFlushExample" heading_id="second-head" colapse_id="second-body" header="header2" body="body2" />
                            <AccordionItem data_bs_parent="accordionFlushExample" heading_id="third-head" colapse_id="third-body" header="header3" body="body3" />

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default FAQ;