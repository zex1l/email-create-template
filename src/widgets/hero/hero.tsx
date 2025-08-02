const Hero = ({ description, title, actions }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {title}
      {description}
      {actions}
    </div>
  );
};

export default Hero;

type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
  actions?: React.ReactNode;
};
