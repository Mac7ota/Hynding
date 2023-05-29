import '../../styles/WebRadio.scss'
import '../../scripts/Radio.js'
import { FaTwitch } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai';

function Radio() {
    return(
        <div className="Container_Web_Radio" id='myDiv'>
            <div className='Imagem_Radio'>
                <div className='BordeRi'>
                <div className='ContainerIMG'><div className='BaseAlbum'><img src='https://cdns-images.dzcdn.net/images/artist/aac3736f5efecf5a43c0b2d9e30da0f9/500x500.jpg'></img></div>
                </div>
                <div className='TEXTSct'>
                    <h4>TESTE</h4>
                    <p>Hynding</p>
                    <div className='StatusLive'>ao vivo</div>
                    </div>
                    </div>
                    
                    <a href=""><FaTwitch className="text-dark icontamanho" /></a>
            </div>
            <div className='Player_Radio'>
            <AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            </div>
            <div className='Volume_Radio'>
                <span>Volumen</span>
            </div>
        </div>
    )
}

export default Radio;