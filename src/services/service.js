import { BehaviorSubject } from 'rxjs';

const activeSectionId = new BehaviorSubject('');

export const activeSectionId$ = activeSectionId.asObservable();

export const setActiveSectionId = (id) => {
    activeSectionId.next(id);
};