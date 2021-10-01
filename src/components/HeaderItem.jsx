import { useEffect, useState } from "react";

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
        <li data-component="header-item" className="nav__item">
            <a href={`#${id}`} className={`nav__link ${isActive ? 'active-link' : ''}`}>
                <i className={`bx ${icon} nav__icon`}></i>
                <span className="nav__name">{label}</span>
            </a>
        </li>
    );
}