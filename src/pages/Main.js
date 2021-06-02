import Card from "../components/Card";

import CardImg from "../images/Rectangle.png";
import entryImg from '../images/entry.png'
import adv1 from '../images/adv_1.png'
import adv2 from '../images/adv_2.png'
import adv3 from '../images/adv_3.png'
import appImg from '../images/app.png'
import Button from '../components/Button'

function Main() {
    
    /**
     * use map to list items
     */
    return(
        <>
            <div className="main">
                <h1 className="main__title">ОНЛАЙН-ШКОЛА ФИТНЕСА</h1>
                <p className="main__text main__text--small">
                    Добейся лучшего результата всего за месяц и выиграй приз. 
                    Эта миссия выполнима. 
                    Начни прямо сейчас.
                </p>
                <img className="main__image" src={entryImg} />
                <div className="main__buttons">
                    <Button name="Призы конкурса" color="light-black"/>
                    <Button name="Выбрать тренировки" color="light-black"/>
                </div>

                <h1 className="main__title">ПРЕИМУЩЕСТВА</h1>
                <p className="main__text">
                    Более 50 000 влюбленных в себя девушек и женщин доказали эффективность программ нашей онлайн-школы. 
                    Присоединяйся.
                </p>
                <div className="main__block advantages">
                    <div className="advantages__card">
                        <img src={adv1}/>
                        <h2 className="advantages__title">
                            Тренер, Нутрициолог, Психолог на связи
                        </h2>
                        <p className="advantages__text">
                            Помимо видеоуроков и рецептов, наши специалисты будут с тобой на связи в течение всего курса и ответят на все интересующие тебя вопросы, в том числе психологического характера.
                        </p>
                    </div>
                    <div className="advantages__card">
                        <img src={adv2}/>
                        <h2 className="advantages__title">
                            СПЕЦИАЛЬНЫЙ ПЛАН ПИТАНИЯ
                        </h2>
                        <p className="advantages__text">
                            Мы составляем план для желающих похудеть, прорисовать рельеф или набрать мышечную массу. План питания с учетом твоих особенностей позволяет достигать целей точечно, избавляет от проблем переедания, улучшает метаболизм.
                        </p>
                    </div>
                    <div className="advantages__card">
                        <img src={adv3}/>
                        <h2 className="advantages__title">
                        Свобода выбора места и времени
                        </h2>
                        <p className="advantages__text">
                            Онлайн обучение позволяет тренироваться в своем ритме. Выбор места - дома или в зале, и времени занятий - за тобой. Просто установи приложение и занимайся с нами!
                        </p>
                    </div>
                </div>

                <div className="main__block application">
                    <div className="application__col application__col--l">
                        <img src={appImg}/>
                    </div>
                    <div className="application__col application__col--m">
                        <h2 className="application__title">
                            НАУЧИМ ТЕБЯ ПИТАТЬСЯ ВКУСНО И БЕЗ СРЫВОВ:
                        </h2>
                        <p className="application__text">
                            •  Выбирай меню: с мясом и рыбой, вегетарианское, 
                            веганское или другие виды
                        </p>
                        <p className="application__text">
                            •  План питания на 30 дней, который хочется соблюдать
                        </p>
                        <p className="application__text">
                            •  Вкусные и полезные рецепты на каждый приём пищи
                        </p>
                    </div>
                </div>
                
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
            </div>
        </>
    );
}

export default Main;