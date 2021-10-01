import { useRef, useEffect } from "react";

export default function Section({ id, title }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            console.log(id + " - " + entries[0].intersectionRatio);

            if (entries[0].intersectionRatio >= 0.8) {
            }

            if (entries[0].intersectionRatio <= 0.2) {
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        });

        observer.observe(sectionRef.current);

        return () => {
            observer.unobserve();
        };
    }, []);

    return (
        <section data-component="section" className="container section section__height" id={id} ref={sectionRef}>
            <h2 className="section__title">{title}</h2>
        </section>
    );
}