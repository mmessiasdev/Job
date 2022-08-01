import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import QrCode from '../Assets/QrCode.png';
import CellQrCode from '../Assets/CellQrCode.png';

const Contate = () => {
    return (
        <>
            <div className="contate" id="contate" data-aos="fade-right" data-aos-duration="600">
                <h1>Contate-nos</h1>
                <div className='divQrContante'>
                    <div className="divContate">
                        <div className="divRede">
                            <div className="redes">
                                < AiOutlineWhatsApp color='white' size={45} />
                                <a href='https://api.whatsapp.com/send?phone=+557199981072&text=Olá.' target="_blank">WhatsApp<h4>+55 (71) 9 9998-1072</h4></a>
                            </div>
                            <div className="redes">
                                <AiOutlineInstagram color='white' size={45} />
                                <a href='https://www.instagram.com/job_construcoes/' target="_blank">Instagram<h4>@job_construcoes</h4></a>
                            </div>
                            <div className="redes">
                                < AiOutlineMail color='white' size={45} />
                                <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=jobe.santos@hotmail.com' target="_blank">Email<h4>Jobe.santos@hotmail.com</h4></a>
                            </div>
                        </div>
                        <div className='divQr'>
                            <img className='QrCode' src={QrCode} />
                        </div>

                    </div>
                    <div className='divCellQr'>
                        <img className='CellQrCode' src={CellQrCode} />
                    </div>

                </div>


            </div>
        </>
    )
}

export default Contate;