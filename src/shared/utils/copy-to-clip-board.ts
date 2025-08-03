import { toast } from 'sonner';

export const copyToClipBoard = (text: string) => {
  try {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  } catch (err) {
    toast.error('Failed to copy to clipboard');
  }
};
