import HeaderItem from "./HeaderItem";

export default function Header() {
    return (
        <header data-component="header" className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Marlon</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <HeaderItem id="home" icon="bx-home-alt" label="Home"/>
                        <HeaderItem id="about" icon="bx-user" label="About"/>
                        <HeaderItem id="skills" icon="bx-book-alt" label="Skills"/>
                        <HeaderItem id="portfolio" icon="bx-briefcase-alt" label="Portfolio"/>
                        <HeaderItem id="contactme" icon="bx-message-square-detail" label="Contact me"/>
                    </ul>
                </div>

                <img src="https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869__340.jpg" alt="" className="nav__img" />
            </nav>
        </header>
    );
}