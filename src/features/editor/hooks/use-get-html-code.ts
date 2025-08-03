import { useModalStore } from '@/shared/store/modal.store';
import { useEffect, useRef, useState } from 'react';

export const useGetHtmlCode = () => {
  const refHtmlBlock = useRef<HTMLDivElement>(null);

  const { modal, onOpen } = useModalStore();

  const codeModal = modal.type === 'code';

  const getHtmlCode = () => {
    if (refHtmlBlock.current) {
      return refHtmlBlock.current.innerHTML;
    }
    return '';
  };

  const onOpenCodeModal = () => {
    const htmlCode = getHtmlCode();
    onOpen({ type: 'code', data: htmlCode });
  };

  useEffect(() => {
    getHtmlCode();
  }, [codeModal]);

  return {
    refHtmlBlock,
    onOpenCodeModal,
  };
};
