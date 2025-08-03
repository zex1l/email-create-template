import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { Bot } from 'lucide-react';

export type MethodType = 'AI' | 'SCRATCH';

type CreateMethodLayoutProps = {
  method: MethodType;
  setMethod: (method: MethodType) => void;
  blockAI?: React.ReactNode;
  blockScratch?: React.ReactNode;
};

export const CreateMethodLayout = ({
  method,
  setMethod,
  blockAI: contentAI,
  blockScratch: contentScratch,
}: CreateMethodLayoutProps) => {
  return (
    <Tabs
      defaultValue={method}
      onValueChange={(value) => setMethod(value as MethodType)}
    >
      <TabsList className="mb-5">
        <TabsTrigger value="AI" className="text-md ">
          Create with AI <Bot className="ml-2 w-6 h-6 size-4 text-purple-500" />
        </TabsTrigger>
        <TabsTrigger value="SCRATCH" className="text-md">
          Start from scratch
        </TabsTrigger>
      </TabsList>
      <TabsContent value="AI">{contentAI}</TabsContent>
      <TabsContent value="SCRATCH">{contentScratch}</TabsContent>
    </Tabs>
  );
};
