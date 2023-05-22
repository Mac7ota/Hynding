
import '../../styles/footer.scss'
import { FaInstagram } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
    return (<footer className="footer">
        <div className="container-footer">
        <div><a href="" className="bottom-title">Hyding</a></div>
        <div className="footer-grid">
            <div className="grid-1">
                <p className="bottom-subtitle">Explorar</p>
                <div className="footer-flex-1">
                    <p>Nós</p>
                    <p>Programações</p>
                    <p>Trabalhe conosco</p>
                    <p>Playlist</p>
                    <p>Canais</p>
                    <p>Seja nosso artista</p>
                </div>
            </div>
            <div className="grid-2">
                <a className="bottom-subtitle text-dark">Redes Sociais</a>
                <div className="sub-grid-2">
                <a href=""><FaInstagram className="text-dark icontamanho insta"  /></a>
                <a href=""><FaSpotify className="text-dark icontamanho" /></a>
                <a href=""><FaTwitch className="text-dark icontamanho" /></a>
                <a href=""><FaYoutube className="text-dark icontamanho" /></a>
                <a href=""><FaSoundcloud className="text-dark icontamanho" /></a>
                <a href=""><FaTiktok className="text-dark icontamanho" /></a>
                </div>
            </div>
        </div>
        <div className="bottom-footer">
        <p>Hynding 2023</p>
        <p>Direitos de Privacidade</p>
        <p>Cookies</p>
        <p>Termos e condições</p>
        </div>
    </div>
    </footer>
    )
}