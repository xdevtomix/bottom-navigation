export default function Section({id, title}) {
    return (
        <section data-component="section" className="container section section__height" id={id}>
            <h2 className="section__title">{title}</h2>
        </section>
    );
}