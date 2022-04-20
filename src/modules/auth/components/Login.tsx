import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Form/Input';
import { invalidEmailMsg, maxLengthMsg, minLengthMsg, requiredMsg } from '../helpers/formMessages';

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
    <div className="flex flex-col h-full px-5 py-7">
      {/*Heading*/}
      <div className="text-center space-y-4">
        <i className="fa-solid fa-circle-nodes text-sky-700 text-7xl"></i>
        <div>
          <h1 className="text-4xl font-light">Welcome back!</h1>
        </div>
      </div>

      {/*Form*/}
      <form onSubmit={handleSubmit(onSubmit)} className="my-auto">
        <p className="text-gray-400 text-center">Enter your credentials to access your account!</p>
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

      {/*Footer*/}
      <div className="mt-auto space-y-2">
        <div className="text-center">
          <span className="text-gray-400">New here? </span>
          <span className="link">Sing up</span>
        </div>
        <div className="text-center">
          <span className="link">Forgot your password?</span>
        </div>
      </div>
    </div>
  );
};
