'use client';
import { useForm } from 'react-hook-form';
import { Input } from '../../../shared/ui/input';
import { Button } from '@/shared/ui/button';
import { useAuthActions } from '@convex-dev/auth/react';

type LoginType = {
  email: string;
  name: string;
  password: string;
  flow: string;
};

const RegisterForm = ({ step }: Props) => {
  const { signIn } = useAuthActions();
  const { register, handleSubmit, formState } = useForm<LoginType>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      flow: step,
    },
  });

  const onHandleSubmit = handleSubmit((data) => {
    console.log(data);
    void signIn('password', data);
  });

  return (
    <form onSubmit={onHandleSubmit} className="flex flex-col gap-2">
      <input
        {...register('flow', { required: true })}
        type="hidden"
        value={step}
      />
      <Input
        {...register('email', { required: true })}
        type="email"
        placeholder="Email"
      />
      <Input {...register('name', { required: true })} placeholder="Name" />
      <Input
        {...register('password', { required: true })}
        type="password"
        placeholder="Password"
      />
      <Button disabled={!formState.isValid} type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;

type Props = {
  step: string;
};
