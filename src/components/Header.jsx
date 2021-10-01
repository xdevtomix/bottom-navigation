import { useEffect, useState } from "react";
import styled from "styled-components";

import HeaderItem from "./HeaderItem";

export default function Header() {
    const [isScrollHeader, setIsScrollHeader] = useState(false);

    useEffect(() => {
        function onWindowScroll() {
            setIsScrollHeader(this.scrollY >= 80);
        }

        window.addEventListener('scroll', onWindowScroll)

        return () => {
            window.removeEventListener('scroll', onWindowScroll);
        };
    }, []);

    return (
        <Container data-component="header" isScrollHeader={isScrollHeader}>
            <Nav>
                <Logo href="#home">T.O.M</Logo>

                <Menu>
                    <List>
                        <HeaderItem id="home" icon="bx-home-alt" label="Home" />
                        <HeaderItem id="about" icon="bx-user" label="About" />
                        <HeaderItem id="skills" icon="bx-book-alt" label="Skills" />
                        <HeaderItem id="portfolio" icon="bx-briefcase-alt" label="Portfolio" />
                        <HeaderItem id="contactme" icon="bx-message-square-detail" label="Contact me" />
                    </List>
                </Menu>

                <Image src="https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869__340.jpg" alt="Man" className="nav__img" />
            </Nav>
        </Container>
    );
}

const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--container-color);
    z-index: var(--z-fixed);
    transition: .4s;
    box-shadow: ${({isScrollHeader}) => isScrollHeader ? '0 1px 12px hsla(var(--hue), var(--sat), 15%, 0.15)' : ''};
`;

const Nav = styled.nav`
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 968px;
    margin-left: 1rem;
    margin-right: 1rem;

    @media screen and (min-width: 768px) {
        height: calc(var(--header-height) + 1.5rem);
    }

    @media screen and (min-width: 968px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Logo = styled.a`
    color: var(--title-color);
    font-weight: 600;
`;

const Menu = styled.div`
    @media screen and (max-width: 767px) {
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: var(--container-color);
        box-shadow: 0 -1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
        width: 100%;
        height: 4rem;
        padding: 0 1rem;
        display: grid;
        align-content: center;
        border-radius: 1.25rem 1.25rem 0 0;
        transition: .4s;
    }
`;

const List = styled.ul`
    display: flex;
    justify-content: space-around;

    @media screen and (min-width: 576px) {
        justify-content: center;
        column-gap: 3rem;
    }
`;

const Image = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;