import { Create } from '@/features/create/create';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import Container from '@/widgets/container/container';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <Container>
      <Create />
    </Container>
  );
};

export default Page;
