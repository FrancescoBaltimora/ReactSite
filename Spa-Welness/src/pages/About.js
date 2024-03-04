import Header from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

import '../css/about.css';
import '../css/global.css';

import img1 from '../images/About (1).png';
import img2 from '../images/About (2).png';
import img3 from '../images/About (3).png';



export default function About(){
    return(
        <>
            <Header/>
                <div className=''>
                    <div className='flex padding-top-xxl breadcrumbs'><a href="/#"><p className='breadcrumbs-paragraph'>home</p></a>/<u><p className='breadcrumbs-paragraph'>Chi siamo</p></u></div>
                    <div className='container-about flex center column gap-m padding-l'>
                        <h3 className='heading-about'>La nostra storia</h3>
                        <div className='section-container flex center'>
                            <img src={img1} alt="il nostro staff"/>
                            <p className='paragraph-about'>La nostra Spa trae le sue radici da una lunga tradizione di cura e benessere. <br/>Fondata anni fa da un'appassionata esperta di terapie olistiche, la Spa è cresciuta nel tempo, diventando un'oasi di tranquillità e rinascita. <br/>La storia della nostra struttura si intreccia con la passione per il benessere della mente e del corpo, offrendo ai clienti un rifugio dove possono sfuggire alle tensioni quotidiane e immergersi in un mondo di relax e guarigione.</p>
                        </div>
                        <div className='section-container flex center'>
                            <img src={img2} alt="il nostro centro" className='img2-about'/>
                            <p className='paragraph-about paragraph-about-2'>Al cuore della nostra Spa, le vasche termali e le saune rappresentano l'essenza della nostra filosofia di benessere. <br/>Le vasche idromassaggio, immerse in un ambiente sereno e naturale, offrono momenti di distensione e rigenerazione. <br/>Le saune, ispirate alle tradizioni antiche, promuovono il riscaldamento e la purificazione del corpo, incoraggiando il rilascio delle tossine e il sollievo dallo stress. </p> 
                        </div>
                        <div className='section-container flex center'>
                            <img src={img3} alt="cosa offriamo"/>
                            <p className='paragraph-about'>Ogni angolo della struttura è studiato per guidare i nostri ospiti attraverso un percorso di benessere completo: dalle piscine rilassanti alle saune rigeneranti, fino agli spazi dedicati a massaggi e trattamenti personalizzati. <br/>La nostra Spa rappresenta un connubio armonioso tra passato e presente, offrendo un'esperienza moderna di lusso e cura che rispecchia la saggezza delle antiche pratiche di guarigione.</p>                   
                        </div>
                        <a href="/contact"><Button text="Contattaci"/></a>
                    </div>
                </div>
            <Footer/>
        </>
    )
}