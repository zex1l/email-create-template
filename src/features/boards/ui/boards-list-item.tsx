import Link from 'next/link';
import { ModeView } from './boards-layout';
import Image from 'next/image';

type Props = {
  description: string;
  date: string;
  templateId: string;
  view: ModeView;
};

export const BoardsListItem = ({ date, description, templateId }: Props) => {
  return (
    <Link href={`/boards/editor/${templateId}`}>
      <div className="flex items-center h-full border-b gap-5 border-gray-200 py-3 px-4 shadow-md hover:bg-gray-50">
        <Image
          width={60}
          height={60}
          src="/email.png"
          alt="email"
          className="rounded-xl"
        />
        <div className="h-full flex flex-col gap-1">
          <div className="text-sm font-semibold">{description}</div>
          <div className="text-xs mt-auto text-gray-400">{date}</div>
        </div>
      </div>
    </Link>
  );
};
