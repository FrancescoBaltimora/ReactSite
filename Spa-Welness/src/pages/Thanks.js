import Header from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/thanks.css'

export default function Thanks(){
    return(
        <>
            <Header/>
            <div className='container-thanks flex center column gap-xs '>
                <h3 className='heading-thanks'>Grazie per averci scelto!</h3>
                <p className='thanks-paragraph'>A breve riceverai una mail con tutte le informazioni inerenti al tuo acquisto e con il biglietto in formato pdf da presentare alla reception.</p>
            </div>
            <Footer/>
        </>
    )
}