import './navbar.css';

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="brand">
                    <a className="url" href="#!">about GyuYeon</a>
                </div>
                <ul className="nav-link">
                    <li>
                        <a className="url" href="#!">about me</a>
                    </li>
                    <li>
                        <a className="url" href="#!">project</a>
                    </li>
                    <li>
                        <a className="url" href="#!">skills</a>
                    </li>
                    <li>
                        <a className="url" href="#!">share</a>
                    </li>
                </ul>
                <a className="navbar__toggleBtn" href="#!">
                    <i className="fas fa-bars"></i>
                </a>
            </nav>
        </header>
    );
}

export default Navbar;