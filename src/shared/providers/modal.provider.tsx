import { EditorCodeDialog } from '@/features/editor/ui/editor-code-dialog';
import { useModalStore } from '../store/modal.store';

export const ModalProvider = () => {
  const { modal, onClose, open } = useModalStore();

  switch (modal.type) {
    case 'code':
      return (
        <EditorCodeDialog open={open} close={onClose} htmlCode={modal.data} />
      );
  }
};
