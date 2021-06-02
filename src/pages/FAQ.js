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
                            <AccordionItem header="header 1" body="body 1" id="flush-headingOne" />
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default FAQ;