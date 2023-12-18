import React, { useState, useEffect } from 'react';
import "./HeaderBlockTwo.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";

export default function HeaderBlock({isMenuOpen,toggleMenu}) {
    const [isHovered, setIsHovered] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const containerClasses = `header ${isHovered  ? 'hovered' : ''} ${scrolled ? 'scrolled' : ''}`;

    return (
        <div>
            <header className={containerClasses}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <nav className="nav">
                    <div className="menuBlock">
                        <div className={`menu`} onClick={toggleMenu}>
                            <CiMenuBurger />
                            <span>Menu</span> 
                        </div>
                        <div className="menu">
                            <IoIosSearch />
                            <span className="SearchSpan">Search</span>
                        </div>
                    </div>
                    <div className="logo">
                        <h1>ELEGANZA</h1>
                    </div>
                    <div className="aboutInfo">
                        <div className="callUs">
                            <span>Call Us</span>
                        </div>
                        <div className="wishList">
                            <span>WishList</span>
                        </div>
                        <div className="myEl">
                            <span>myEl</span>
                        </div>
                        <div className="bag">
                            <IoBagHandleOutline />
                            <span>0</span>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
