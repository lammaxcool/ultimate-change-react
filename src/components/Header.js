import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from '../images/logo.png';
import './Header.scss';

import Main from '../pages/Main'
import FAQ from '../pages/FAQ';
import Questions from '../pages/Questions';
import Project from '../pages/Project';
import Registration from '../pages/Registration';

import Button from './Button'

function Header() {
    return (
        <Router>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <Link to='/'>
                        <img src={logo} alt="logo.png" width="270" height="150"/>
                    </Link>
                </div>

                <nav className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to='/main'><p className="nav-link px-2 link-dark">Курсы</p></Link></li>
                    <li><Link to='/faq'><p className="nav-link px-2 link-dark">FAQ</p></Link></li>
                    <li><Link to='/questions'><p className="nav-link px-2 link-dark">Вопросы</p></Link></li>
                    <li><Link to='/project'><p className="nav-link px-2 link-dark">Проект</p></Link></li>
                </nav>
            
                <div className="col-md-3 text-end">
                    <Link to='/registration'>
                        <Button name='Sign In' />
                    </Link>
                </div>
            </header>
        
            <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/main' component={Main} />
                    <Route path='/faq' component={FAQ} />
                    <Route path='/questions' component={Questions} />
                    <Route path='/project' component={Project} />
                    <Route path='/registration' component={Registration} />
                </Switch>
        </Router>
    );
}

export default Header;