import { useRef, useEffect } from "react";
import styled from "styled-components";

import { setActiveSectionId } from "../services/service";

export default function Section({ id, title }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].intersectionRatio >= 0.8) {
                setActiveSectionId(id);
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
        <Container data-component="section" id={id} ref={sectionRef}>
            <Title>{title}</Title>
        </Container>
    );
}

const Container = styled.section`
    max-width: 968px;
    height: 100vh;
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 4.5rem 0 2rem;
    scroll-snap-align: start;

    @media screen and (min-width: 767px) {
        padding: 7rem 0 2rem;     
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Title = styled.h2`
    font-size: var(--h1-font-size);
    color: var(--title-color);
    text-align: center;
    margin-bottom: 1.5rem;
`;