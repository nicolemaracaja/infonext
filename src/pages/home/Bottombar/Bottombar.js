import React from 'react';
import './Bottombar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faHandshake, faComputer, faPhone } from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon="fa-solid fa-people-group" />

const Bottombar = () => {
    return (
        <section class="sections">
            <div class="section">
                <span class="fa-people-group"><FontAwesomeIcon icon={faPeopleGroup} style={{ color: "#ffffff", }} /></span>
                <h3>Sobre Nós</h3>
                <p>Descubra quem somos e o que fazemos.</p>
            </div>
            <div class="section">
                <span class="fa-handshake"><FontAwesomeIcon icon={faHandshake} style={{ color: "#ffffff", }} /></span>
                <h3>Quem somos</h3>
                <p>Trabalhamos com profissionais qualificados para atender às suas necessidades.</p>
            </div>
            <div class="section">
                <span class="fa-computer"><FontAwesomeIcon icon={faComputer} style={{ color: "#ffffff", }} /></span>
                <h3>Serviços</h3>
                <p>Serviços de TI de alta qualidade, adaptados às suas necessidades.</p>
            </div>
            <div class="section">
                <span class="fa-phone"><FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff", }} /></span>
                <h3>Contato</h3>
                <p>Entre em contato conosco para mais informações.</p>
            </div>
        </section>
    )
}

export default Bottombar;
