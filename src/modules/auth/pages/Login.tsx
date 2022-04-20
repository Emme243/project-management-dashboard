import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Form/Input';
import { invalidEmailMsg, maxLengthMsg, minLengthMsg, requiredMsg } from '../helpers/formMessages';
import { AuthLayout } from '../layout/AuthLayout';
import { Link } from 'react-router-dom';

interface Inputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().required(requiredMsg('Email')).email(invalidEmailMsg()).lowercase().trim(),
    password: yup
      .string()
      .required(requiredMsg('Password'))
      .min(5, minLengthMsg(5))
      .max(15, maxLengthMsg(15)),
  })
  .required();

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <AuthLayout
      formChild={
        <form onSubmit={handleSubmit(onSubmit)} className="my-auto">
          <p className="text-gray-400 text-center">
            Enter your credentials to access your account!
          </p>
          <Input
            containerClass="mt-4"
            fieldError={errors.email}
            icon="at"
            label="Email"
            placeholder="example@gmail.com"
            registerField={register('email')}
            type="email"
          />
          <Input
            containerClass="mt-4"
            fieldError={errors.password}
            icon="lock"
            label="Password"
            placeholder="•••••••"
            registerField={register('password')}
            type="password"
          />
          <Button color="primary" type="submit" className="mt-6 w-full">
            Log in
          </Button>
        </form>
      }
      footerChild={
        <div className="mt-auto space-y-2">
          <div className="text-center">
            <span className="text-gray-400">New here? </span>
            <Link to="/register" className="link">
              Sing up
            </Link>
          </div>
          <div className="text-center">
            <span className="link">Forgot your password?</span>
          </div>
        </div>
      }
    />
  );
};
