'use client';
import { useState } from 'react';
import AuthFormLayout from './ui/auth-form-layout';
import LoginForm from './ui/login-form';
import { Button } from '@/shared/ui/button';
import RegisterForm from './ui/register-form';

const AuthForm = () => {
  const [typeForm, setTypeForm] = useState<'signUp' | 'signIn'>('signIn');

  switch (typeForm) {
    case 'signIn': {
      return (
        <AuthFormLayout
          header={
            <h2 className="text-2xl font-semibold text-primary">
              Sign in to your account
            </h2>
          }
          footer={
            <div>
              <span>Don't have an account?</span>
              <Button variant={'link'} onClick={() => setTypeForm('signUp')}>
                Sign up
              </Button>
            </div>
          }
          form={<LoginForm step={typeForm} />}
        ></AuthFormLayout>
      );
    }
    case 'signUp': {
      return (
        <AuthFormLayout
          header={
            <h2 className="text-2xl font-semibold text-primary">
              Sign up to continue
            </h2>
          }
          footer={
            <div>
              <span> Already have an account?</span>
              <Button variant={'link'} onClick={() => setTypeForm('signIn')}>
                Sign in
              </Button>
            </div>
          }
          form={<RegisterForm step={typeForm} />}
        ></AuthFormLayout>
      );
    }
  }
};

export default AuthForm;
