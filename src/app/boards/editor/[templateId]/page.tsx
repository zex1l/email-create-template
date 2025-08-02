import Editor from '@/features/editor/editor';
import { NextPage } from 'next';

const Page = async ({
  params,
}: {
  params: Promise<{
    templateId: string[];
  }>;
}) => {
  const { templateId } = await params;
  console.log(templateId);
  return <Editor />;
};

export default Page;
