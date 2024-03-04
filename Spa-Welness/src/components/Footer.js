import '../css/global.css';
import '../css/footer.css';
import cookie from '../pdf/Cookie Policy.pdf';
import privacy from '../pdf/Privacy Policy.pdf';
import rules from '../pdf/Regolamento.pdf';
import saleCondition from '../pdf/Condizioni di vendita.pdf';

import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";
import logo from '../images/Logo.png'

function Footer() {
  return (
    <>
        <div className='flex column gap-s center container-mobile'>
            <img src={logo} alt="logo" className='img-xxs padding-top-s'/>
            <div className='conditions flex column center'>
                <h3 className='headings'>Amministrazione</h3>
                <br/>
                <hr/>
                <br/>
                <div className='flex column center gap-links'>
                    <a href="/career"><p className='paragraphs'>Lavora con noi</p></a>
                    <a href={saleCondition}><p className='paragraphs'>Condizioni di vendita</p></a>
                    <a href={rules}><p className='paragraphs'>Regolamento</p></a>
                </div>
            </div>
            <div className='contacts flex column center'>
                <h3 className='headings'>Contatti</h3>
                <br/>
                <hr/>
                <br/>
                <div className='flex column gap-links'>
                    <p className='paragraphs'>+39 345 879 5421</p>
                    <p className='paragraphs'>spaandwelness@info.com</p>
                    <p className='paragraphs'>CityLife, 80 - Milano (MI)</p>
                    <a href="/Faq"><p className='paragraphs'>F.A.Q.</p></a>
                </div>
            </div>
            <div className='opening-hours flex column center'>
                <h3 className='headings'>Orari di apertura</h3>
                <br/>
                <hr/>
                <br/>
                <div className='flex column gap-links'>
                    <p className='paragraphs'>Martedi' - Venerdi': 09:00 - 18:00</p>
                    <p className='paragraphs'>Sabato - Domenica: 09:00 - 20:00</p>
                    <p className='paragraphs'>Lunedi': Chiuso</p>
                </div>
            </div>
            <div className='social flex column center'>
                <h3 className='headings'>Social</h3>
                <br/>
                <hr/>
                <br/>
                <div className='flex gap-links'>
                    <a href="https://www.instagram.com"><FaInstagramSquare className='social-icons'/></a>
                    <a href="https://www.facebook.com"><FaFacebookSquare className='social-icons'/></a>
                    <a href="https://www.twitter.com"><FaTwitterSquare className='social-icons'/></a>
                </div>
            </div>
            <div className='compliance flex column center gap-links'>
                <a href={cookie}><p className='paragraphs'>Cookie Policy</p></a>
                <a href={privacy}><p className='paragraphs'>Privacy Policy</p></a>
                <p className='paragraphs'>2023© Copyright</p>
            </div>
            <div className='company-info padding-bottom-xs'>
                <p className='company-info-p'>©Spa&Wellness S.p.A.</p>
                <p className='company-info-p'>Reg. Imprese di Milano n. 8394 - Cap. Sociale i.v. €132.329.204</p>
                <p className='company-info-p'>P. Iva 0849528329234</p>
            </div>
        </div>
    </>
  );
}

export default Footer;
