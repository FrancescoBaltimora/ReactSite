import Header from '../components/Navbar';
import Footer from '../components/Footer';
import maps from '../images/maps-api-placeholder.png';
import '../css/contact.css';

export default function Contact(){
    return(
        <>
            <Header/>
            <div className='container-contact flex column center gap-xs padding-top-l padding-bottom-l'>
                <div className='flex breadcrumbs'>
                    <a href="/#"><p className='breadcrumbs-paragraph'>home</p></a>/<u><p className='breadcrumbs-paragraph'>contatti</p></u>
                </div>
                <div className='flex center column gap-xxs padding-top-xl'>
                    <h3>Contatti:</h3>
                    <p>+39 879 5421</p>
                    <p>spaandwellness@info.com</p>
                </div>
                <hr/>
                <div className='flex center column gap-xxs'>
                    <h3>Orari:</h3>
                    <p>Martedi' - Venerdi': 09:00 - 18:00</p>
                    <p>Sabato - Domenica: 09:00 - 20:00</p>
                    <p>Lunedi': Chiuso</p>
                </div>
                <hr/>
                <div className='flex center column gap-xxs padding-bottom-xl'>
                    <h3>Dove siamo:</h3>
                    <img src={maps} alt="api-example" className='img-xl'/>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}