import Section from "./Section";

export default function Main() {
    return (
        <main data-component="main">
            <Section id="home" title="Home" />
            <Section id="about" title="About" />
            <Section id="skills" title="Skills" />
            <Section id="portfolio" title="Portfolio" />
            <Section id="contactme" title="Contact Me" />
        </main>
    );
}