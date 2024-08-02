import {
    FaHotel,
    FaPlane,
    FaWalking,
    FaBus,
    FaStar,
    FaStarHalfAlt,
    FaMapMarkerAlt,
    FaPhone,
    FaWhatsapp,
    FaEnvelope,
    FaHome,
    FaMapMarkedAlt,
    FaSuitcase,
    FaComments,
    FaFacebook,
    FaTwitter,
    FaInstagram,
  } from "react-icons/fa";
import "./style.css";

export default function Header(){
    return(
        <header className="header">
        <h1>Senai Viagens</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">
                <FaHome /> HOME
              </a>
            </li>
            <li>
              <a href="#destinos">
                <FaMapMarkedAlt /> DESTINOS
              </a>
            </li>
            <li>
              <a href="#pacotes">
                <FaSuitcase /> PACOTES
              </a>
            </li>
            <li>
              <a href="#depoimentos">
                <FaComments /> DEPOIMENTOS
              </a>
            </li>
            <li>
              <a href="#contato">
                <FaEnvelope /> CONTATO
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
}