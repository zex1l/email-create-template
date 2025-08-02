import { useEmailTemplate } from '@/shared/store/email-template.store';
import { useEffect, useRef } from 'react';

export const useClickOutside = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { resetSelectedElement } = useEmailTemplate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        resetSelectedElement();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { wrapperRef };
};
