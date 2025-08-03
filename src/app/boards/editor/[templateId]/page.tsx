import Editor from '@/features/editor/editor';

const Page = async ({
  params,
}: {
  params: Promise<{
    templateId: string;
  }>;
}) => {
  const { templateId } = await params;

  return <Editor templateId={templateId} />;
};

export default Page;
