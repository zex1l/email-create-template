import { create } from 'zustand';

type CodeModal = {
  type: 'code';
  data: string;
};

type ModalState =
  | CodeModal
  | {
      type: null;
      data: null;
    };

type ModalStoreType = {
  modal: ModalState;
  open: boolean;
  onClose: () => void;
  onOpen: (modal: Omit<ModalState, 'open'>) => void;
};

export const useModalStore = create<ModalStoreType>((set, get) => ({
  open: false,
  modal: { type: null, data: null },
  onClose: () => set({ open: false, modal: { type: null, data: null } }),
  onOpen: (modal) =>
    set({
      open: true,
      modal: modal as ModalState,
    }),
}));
