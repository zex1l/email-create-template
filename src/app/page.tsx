import { Button } from '@/shared/ui/button';
import Container from '@/widgets/container/container';
import Hero from '@/widgets/hero/hero';

export default function Home() {
  return (
    <Container>
      <div className="font-sans px-10 md:px-28 lg:px-44 xl:px-56 mt-20 text-center">
        <Hero
          title={
            <h2 className="text-3xl font-bold text-primary">
              Ai-Powered Email Templates
            </h2>
          }
          description={
            <p className="text-lg text-gray-500">
              Use AI to generate professional email templates in seconds.
            </p>
          }
          actions={<Button>Get started</Button>}
        />
      </div>
    </Container>
  );
}
