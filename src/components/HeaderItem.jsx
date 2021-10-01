import { useEffect, useState } from "react";
import styled from "styled-components";

import { activeSectionId$ } from "../services/service";

export default function HeaderItem({ id, icon, label }) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const subscription = activeSectionId$.subscribe((activeSectionId) => {
            setIsActive(id === activeSectionId);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <Container data-component="header-item">
            <Link href={`#${id}`} isActive={isActive}>
                <Icon className={`bx ${icon}`}></Icon>
                <Label>{label}</Label>
                {isActive && <Dot />}
            </Link>
        </Container>
    );
}

const Container = styled.li``;

const Link = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    color: ${({isActive}) => isActive ? 'var(--first-color)' : 'var(--title-color)'};
    position: relative;
    transition: .3s;
    font-weight: 600;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    @media screen and (min-width: 768px) {
        &:hover {
            color: var(--first-color);
        }
    }
`;

const Icon = styled.i`
    font-size: 1.5rem;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;
const Label = styled.span`
    font-size: var(--tiny-font-size);
    @media screen and (min-width: 768px) {
        font-size: var(--normal-font-size);
    }
`;

const Dot = styled.div`
    @media screen and (min-width: 768px) {
        position: absolute;
        bottom: -.75rem;
        width: 4px;
        height: 4px;
        background-color: var(--first-color);
        border-radius: 50%;
    }
`;