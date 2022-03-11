import { ReactComponent as GithubIcon } from '../../assets/img/github.svg'
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className='container-fluid'>
                <div className='dsmovie-nav-content'>
                    <h1 className='dsmovie-nav-content-title'>DsMovie</h1>
                    <a href="https://github.com">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )

}

export default Navbar;