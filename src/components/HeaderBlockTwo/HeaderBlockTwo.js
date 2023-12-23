import React, { useState, useEffect } from 'react';
import "./HeaderBlockTwo.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
export default function HeaderBlockTwo({ toggleMenu }) {
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

    const containerClasses = `new-header ${scrolled ? 'is-scrolled' : ''}`;

    return (
        <div>
            <header className={containerClasses}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <nav className="new-nav">
                    <div className="new-menuBlock">
                        <div className={`new-menu`} onClick={toggleMenu}>
                            <CiMenuBurger />
                            <span>Menu</span>
                        </div>
                        <div className="new-menu">
                            <IoIosSearch />
                            <span className="new-SearchSpan">Search</span>
                        </div>
                    </div>
                    <div className="new-logo">
                        <h1>ELEGANZA</h1>
                    </div>
                    <div className="new-aboutInfo">
                        <div className="new-callUs">
                            <span>Call Us</span>
                        </div>
                        <div className="new-wishList">
                            <span>WishList</span>
                        </div>
                        <div className="new-myEl">
                            <span>myEl</span>
                        </div>
                        <div className="new-bag">
                            <IoBagHandleOutline />
                            <span>0</span>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
