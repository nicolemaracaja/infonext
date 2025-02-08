import React from "react";
import './Header.css';
import logoInfonext from '../../../images/logoOrion.png';

const Header = () => {
    return (
        <header>
            <div className="logoInfonext">
                <img src={logoInfonext} onclick="" alt="infonext Logo" />
                <h2>Infonext Sistemas de Informática LTDA</h2>
            </div>

            <div className="button-options">
                <button className="btn-home">Home</button>
                <button className="btn-about">Quem Somos</button>
                <button className="btn-services">Soluções</button>
                <button className="btn-contact">Contato</button>
            </div>
        </header>
    )
}

export default Header;