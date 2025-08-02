import Boards from '@/features/boards/boards';
import Container from '@/widgets/container/container';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <Container>
      <Boards />
    </Container>
  );
};

export default Page;
