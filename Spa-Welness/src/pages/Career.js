import Header from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/career.css';

export default function Career(){
    return(
        <>
            <Header/>
            <div className='main-container column flex center'>
            <div className='flex breadcrumbs'><a href="/#"><p className='breadcrumbs-paragraph'>home</p></a>/<u><p className='breadcrumbs-paragraph'>Lavora con noi</p></u></div>

                <div className='flex column center gap-m container-career'>
                    <h3 className=' heading-career padding-top-xl'>Unisciti a noi</h3>
                    <p className='paragraph-career'> Siamo entusiasti di annunciare opportunità di lavoro presso la nostra esclusiva struttura Spa & Wellness. 
                        <br/>
                        Se desideri essere parte di un team dedicato al benessere e alla cura dei clienti, questa è la tua occasione.
                        Per candidarti, ti invitiamo a inviare il tuo curriculum vitae dettagliato e una foto recente a: 
                        <br/><br/>
                        <b>spa&wellness@info.com </b>
                        <br/><br/>
                        La tua candidatura sarà valutata attentamente e trattata con la massima riservatezza.
                        <br/><br/>
                        <b>Privacy e Trattamento Dati</b>
                        <br/><br/>
                        Rispettiamo la tua privacy e ci impegniamo a proteggere i tuoi dati personali. I tuoi dettagli saranno trattati in conformità con le leggi sulla privacy in vigore. 
                        I tuoi dati saranno utilizzati esclusivamente per scopi di selezione e reclutamento, e non saranno condivisi con terze parti senza il tuo consenso esplicito. 
                        Conserviamo le tue informazioni solo per il tempo necessario e garantiamo misure di sicurezza per prevenire l'accesso non autorizzato.
                        Prendiamo sul serio la tua privacy e trattiamo i dati con la massima riservatezza. Unisciti a noi nel perseguire l'eccellenza nel benessere. 
                        <br/><br/>
                        <b>Ti aspettiamo!</b>
                    </p>
                </div> 
            </div>
            <Footer/>
        </>
    )
}