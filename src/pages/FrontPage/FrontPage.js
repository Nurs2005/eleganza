
import './FrontPage.css'
import React, { useState, useEffect } from 'react';
import HeaderBlock from "../../components/HeaderBlock/HeaderBlock"
import BgVideo from '../../assets/BgVideo.mp4'
import NewCollection from '../../components/NewCollection/NewCollection'
import FronItems from '../../components/FronItems/FronItems'
import WomensPage from '../../components/WomensBlock/WomensBlock'
import MensPage from '../../components/MensBlock/MensBlock'
import MenuBlock from '../../components/MenuBlock/MenuBlock';
export default function FrontPage({}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!isMenuOpen) {
                setScrollPosition(window.scrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const body = document.querySelector('.FrontPage');

        if (isMenuOpen) {
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.width = '100%';
            body.style.top = `-${scrollPosition}px`;
        } else {
            body.style.overflow = '';
            body.style.position = '';
            body.style.width = '';
            body.style.top = '';
            window.scrollTo(0, scrollPosition);
        }
    }, [isMenuOpen, scrollPosition]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className={`FrontPage ${isMenuOpen ? 'headFicksed' : ''}`}>
            <video src={BgVideo} autoPlay muted loop className="video-bg" />
            <HeaderBlock isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu} />
            {isMenuOpen && (
                    <MenuBlock/>
            )}
            <NewCollection />
            <FronItems />
            <WomensPage />
            <MensPage />
        </div>
    )
}