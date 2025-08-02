'use client'
import { useForm } from 'react-hook-form';
import { Input } from '../../../shared/ui/input';
import { Button } from '@/shared/ui/button';
import { useAuthActions } from '@convex-dev/auth/react';

type LoginType = {
  email: string;
  password: string;
  flow: string;
};

const LoginForm = ({ step }: Props) => {
  const { signIn } = useAuthActions();
  const { register, handleSubmit } = useForm<LoginType>({
    defaultValues: {
      email: '',
      password: '',
      flow: step,
    },
  });

  const onHandleSubmit = handleSubmit((data) => {
    console.log(data);
    void signIn('password', data).then((res ) => console.log(res));
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
      <Input
        {...register('password', { required: true })}
        type="password"
        placeholder="Password"
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;

type Props = {
  step: string;
};
