import React, {useEffect} from 'react'
import AOS from 'aos';  
import 'aos/dist/aos.css';   
import './NavBar.css';

const NavBar = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
    <nav id="nav" data-aos="menu-area" data-aos-anchor-placement="bottom-top" >
        <a title="About" href="#about_anchor">About</a>
        <a title="Timeline" href="#timeline_anchor">Timeline</a>
        <a title="Prizes" href="#prizes_anchor">Prizes</a>
        <a title="Domain" href="#domain_anchor">Domain</a>
        <a title="Contact" href="#contact_anchor">Contact</a>
        <a title="Sponsors" href="#sponsors_anchor">Sponsors</a>
    </nav>
    )
}

export default NavBar
