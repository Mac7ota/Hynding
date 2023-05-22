import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { AiFillPlayCircle } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import '../../styles/splide.scss'
import '../../scripts/splide.js'

export function SplitON() {
  return (
    <div className='PlayON'>
        <div className='MainControl'>
        <div className='acess'>
            <h2>Playlist</h2>
            <span>ver mais</span>
        </div>
        <div className='Control'>
            <a id='Left'><BsChevronLeft strokeWidth="2"/></a>
            <a id='Right'><BsChevronRight strokeWidth="2"/></a>
        </div>
        </div>
        <div id='ContainerCardON'  className='ContainerCard'>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' />
            <AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span>
        </div>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' />
        <AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span>
        </div>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' />
        <AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span>
        </div>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' />
        <AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span>
        </div>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' />
        <AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span>
        </div>
        </div>
        <div id='ContainerCardTWO' className='ContainerCard'>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' />
        <AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        </div>
    </div>
  );
}


export function SplitTWO() {
  return (
    <div className='PlayTWO'>
        <div className='MainControl'>
        <div className='acess'>
            <h2>Programação</h2>
        </div>
        <div className='MainLinks'>
            <span className='percorrer' id='Segunda'>Segunda</span>
            <span className='percorrer' id='Terca'>Terça</span>
            <span className='percorrer' id='Quarta'>Quarta</span>
            <span className='percorrer' id='Quinta'>Quinta</span>
            <span className='percorrer' id='Sexta'>Sexta</span>
            <span className='percorrer' id='Sabado'>Sábado</span>
            <span className='percorrer' id='Domingo'>Domingo</span>
        </div>
        <div className='Control'>

            <a id='Left'><BsChevronLeft strokeWidth="2"/></a>
            <a id='Right'><BsChevronRight strokeWidth="2"/></a>
        </div>
        </div>
        <div id='Dia'  className='ContainerCard Segunda'>
        <div className='Card'><img src='https://previews.dropbox.com/p/thumb/AB6UoY0-sBAmS6tnRWiUko68CHuy_JGRLSI86OhBtOfwc3K3tHwDc87Fy6wxqT4yxIgua52n_NUrqsYnR96wBRafrz-C28jy7eWRdB4QpiLk0leRSpgVjZH03SlgwafLkwqK669gFMnLCTgl6g1Izw5RAI7KFLQw_Ihh2UkqbPrhWsYcAwHgLcBVe5pgovPSgETf9x0JNA0Ke2TRnn8n6KYgZiojeAcO2fq1cGwGE1veeuuoMUyyvacGGVDfyCtNyVLEUGpKE7MWo9035cJ8b3ajrxt_B--07JhLyYTs08ILunTdT0MXpMaf2EcEeum_ypbfmgSdu_mG1zTfOq51u2Mt2LG65tSFEERJRHboFZ1ldV2lzqgCDC5YLGsztCm7u_U/p.jpeg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        </div>
        <div id='Dia' className='ContainerCard Terca'>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        </div>
        <div id='Dia' className='ContainerCard Quarta'>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        </div>
        <div id='Dia' className='ContainerCard Quinta'>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        </div>
        <div id='Dia' className='ContainerCard Sexta'>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        </div>
        <div id='Dia' className='ContainerCard Sabado'>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        </div>
        <div id='Dia' className='ContainerCard Domingo'>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><AiFillPlayCircle size={28} color="white" className='PositionPlay'/>
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        </div>
    </div>
  );}


  export function SplitTree() {
    return ( 
<div className='PlayTree'>
        <div className='MainControl'>
        <div className='acess'>
            <h2>Canais</h2>
            <span>ver mais</span>
        </div>
        <div className='Control'>
            <a id='Left'><BsChevronLeft strokeWidth="2"/></a>
            <a id='Right'><BsChevronRight strokeWidth="2"/></a>
        </div>
        </div>
        <div id='ContainerCardON'  className='ContainerCard'>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' />
        <FaBars size={24} color="white" className='PositionPlay' />
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' /><FaBars size={24} color="white" className='PositionPlay' />
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' /><FaBars size={24} color="white" className='PositionPlay' />
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' /><FaBars size={24} color="white" className='PositionPlay' />
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images.alphacoders.com/196/196681.jpg' alt='' /><FaBars size={24} color="white" className='PositionPlay' />
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        </div>
        <div id='ContainerCardTWO' className='ContainerCard'>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><FaBars size={24} color="white" className='PositionPlay' />
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><FaBars size={24} color="white" className='PositionPlay' />
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><FaBars size={24} color="white" className='PositionPlay' />
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><FaBars size={24} color="white" className='PositionPlay' />
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        <div className='Card'><img src='https://images3.alphacoders.com/189/189947.jpg' alt='' /><FaBars size={24} color="white" className='PositionPlay' />
            <span className='Position'>Teste</span>
            <span className='PositionHyding'>HYDING</span></div>
        </div>
    </div>

    );}