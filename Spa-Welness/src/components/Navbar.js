import React from "react";
import { useRef } from "react";
import {AiOutlineGift, AiOutlineUserAdd, AiOutlineShoppingCart} from "react-icons/ai";
import {FiShoppingBag, FiLogIn} from "react-icons/fi";
import {TbDiscount2} from "react-icons/tb";
import {RxCross1, RxHamburgerMenu} from "react-icons/rx";
import '../css/navBar.css';
import '../css/global.css';
import logo from '../images/Logo.png'
import logo2 from '../images/logo2.png'

const NavBar = () => {

    const navRef = useRef();  

    const showMenu = () => {
        navRef.current.classList.toggle("active")
    }

    return (
        <>  
            <div className="news flex center">
                <a href="/Promo"><p>Sconti di primavera: - 50%</p></a>
            </div>
            <div className="flex space-around center padding-top-xs">
                <RxHamburgerMenu onClick={showMenu} className="header-icon"/>
                <a href="/#" ><img src={logo2} alt="logo" className="img-xs"/></a>
                <a href="/Cart"><AiOutlineShoppingCart className="header-icon"/></a>
            </div>
            <div ref={navRef} className="inactive burger-menu absolute">
                <RxCross1 className="flex start padding-left-xl padding-top-xs close-icon" onClick={showMenu}/>
                <img src={logo} alt="company logo" className="img-xs center"/>
                <div className="flex column gap-xxs link-container padding-xxl">
                    <div className="flex column gap-xxs main-link">
                        <div className="flex center gap-xxs">
                            <FiShoppingBag/>
                            <a href="/Buy"><h3 className="black-text" >Prenota</h3></a>
                        </div>
                        <div className="flex center gap-xxs">
                            <AiOutlineGift/>
                            <a href="/Gift"><h3 className="black-text" >Regala</h3></a>
                        </div>
                        <div className="flex center gap-xxs">
                            <TbDiscount2/>
                            <a href="/Promo"><h3 className="black-text" >Promo</h3></a>
                        </div>
                    </div>
                    <br/>
                    <div className="flex column gap-xxs user">
                        <div className="flex center gap-xxs">
                            <FiLogIn/>
                            <a href="/Login"><h3 className="black-text" >Accedi</h3></a>
                        </div>
                        <div className="flex center gap-xxs">
                            <AiOutlineUserAdd/>
                            <a href="/Registration"><h3 className="black-text" >Registrati</h3></a>
                        </div>
                    </div>
                    <hr className="burgermenu-hr"/>
                    <div className="flex column gap-xxs minor-link flex column start">
                        <a href="/Contact"><p className="black-text" >Contatti</p></a>
                        <a href="/About"><p className="black-text" >Chi siamo</p></a>
                        <a href="/Career"><p className="black-text" >Lavora con noi</p></a>
                        <a href="/Faq"><p className="black-text" >F.A.Q.</p></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;