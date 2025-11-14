import './navbar.scss'


export const Navbar = () => {
    return (
        <nav className="navbar container">
            <div className="navbar-left">
                LOGO
            </div>
            <ul className="navbar-center">
                <li>Offres</li>
                <li>Conseilles</li>
                <li>Travaux</li>
                <li>À propos</li>
                <li>Contact</li>
            </ul>
            <div className="navbar-right">
                DEMANDER UN DEVIS
            </div>
        </nav>
    )
}
