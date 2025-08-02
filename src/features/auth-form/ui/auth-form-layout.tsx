'use client'
const AuthFormLayout = ({ footer, form, header }: Props) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="w-[400px] flex flex-col gap-5">
        {header}
        {form}
        {footer}
      </div>
    </div>
  );
};

export default AuthFormLayout;

type Props = {
  header?: React.ReactNode;
  form?: React.ReactNode;
  footer?: React.ReactNode;
};
