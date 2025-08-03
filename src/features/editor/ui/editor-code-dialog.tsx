import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { copyToClipBoard } from '@/shared/utils/copy-to-clip-board';
import { tailwindToCssChunked } from '@/shared/utils/tailwind-to-css';
import { Copy, LoaderCircle } from 'lucide-react';
import { useEffect, useState, useTransition } from 'react';

type Props = {
  open: boolean;
  close: () => void;
  htmlCode: string;
};

export const EditorCodeDialog = ({ close, htmlCode, open }: Props) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    tailwindToCssChunked(htmlCode).then((result) => setCode(result));
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span>Email Template code</span>
            {code && (
              <Copy
                className="w-5 h-5 cursor-pointer hover:text-primary"
                onClick={() => copyToClipBoard(code)}
              />
            )}
          </DialogTitle>
        </DialogHeader>
        <div
          className={`min-h-[400px] max-h-[400px] ${!code && 'flex justify-center items-center'} overflow-auto bg-gray-200 p-3 rounded-lg`}
        >
          {code ? (
            <pre className="whitespace-pre-wrap break-all">
              <code>{code}</code>
            </pre>
          ) : (
            <div className="flex flex-col gap-2 items-center">
              <LoaderCircle className="animate-spin h-6 w-6" />
              <span className="animate-pulse text-gray-600">Generate code</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
