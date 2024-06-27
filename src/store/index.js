import { atom } from 'nanostores';

export const isMemberModalOpen = atom(false);
export const currentMember = atom('ogose');

export const isWorksModalOpen = atom(false);
export const currentWork = atom('case1');

export const isContactConfirm = atom(false);