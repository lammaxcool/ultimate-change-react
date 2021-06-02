import Card from "../components/Card";

import CardImg from "../images/Rectangle.png";

function Main() {
    
    /**
     * use map to list items
     */
    return(
        <>
            <p>Main</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Card className="card mb-4 box-shadow" name="Новичок" src={CardImg} price="1500" />
                    </div>
                    <div className="col-md-4">
                        <Card className="card mb-4 box-shadow" name="Новичок" src={CardImg} price="1500" />
                    </div>
                    <div className="col-md-4">
                        <Card className="card mb-4 box-shadow" name="Новичок" src={CardImg} price="1500" />
                    </div>
                    <div className="col-md-4">
                        <Card className="card mb-4 box-shadow" name="Новичок" src={CardImg} price="1500" />
                    </div>
                    <div className="col-md-4">
                        <Card className="card mb-4 box-shadow" name="Новичок" src={CardImg} price="1500" />
                    </div>
                    <div className="col-md-4">
                        <Card className="card mb-4 box-shadow" name="Новичок" src={CardImg} price="1500" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;