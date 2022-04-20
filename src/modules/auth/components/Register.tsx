import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Form/Input';
import {
  invalidEmailMsg,
  maxLengthMsg,
  minLengthMsg,
  notMatchingPasswordMsg,
  onlyLettersMsg,
  onlyLettersRegex,
  requiredMsg,
} from '../helpers/formMessages';

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const schema = yup
  .object({
    firstName: yup
      .string()
      .required(requiredMsg('First name'))
      .matches(onlyLettersRegex, onlyLettersMsg())
      .min(3, minLengthMsg(3))
      .max(18, maxLengthMsg(18))
      .trim(),
    lastName: yup
      .string()
      .required(requiredMsg('Last name'))
      .matches(onlyLettersRegex, onlyLettersMsg())
      .min(3, minLengthMsg(3))
      .max(18, maxLengthMsg(18))
      .trim(),
    email: yup.string().required(requiredMsg('Email')).email(invalidEmailMsg()).lowercase().trim(),
    password: yup
      .string()
      .required(requiredMsg('Password'))
      .min(5, minLengthMsg(5))
      .max(15, maxLengthMsg(15)),
    passwordConfirm: yup
      .string()
      .required(requiredMsg('Password confirmation'))
      .oneOf([yup.ref('password'), null], notMatchingPasswordMsg()),
  })
  .required();

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <div className="px-5 py-7">
      {/*Heading*/}
      <div className="text-center space-y-4">
        <i className="fa-solid fa-circle-nodes text-sky-700 text-7xl"></i>
        <div>
          <h1 className="text-4xl font-light">Welcome back!</h1>
        </div>
      </div>

      {/*Form*/}
      <form onSubmit={handleSubmit(onSubmit)} className="my-auto">
        <p className="text-gray-400 text-center">Create a new account</p>
        <Input
          containerClass="mt-4"
          fieldError={errors.firstName}
          icon="user"
          label="First name"
          placeholder="Emmanuel"
          registerField={register('firstName')}
          type="text"
        />
        <Input
          containerClass="mt-4"
          fieldError={errors.lastName}
          icon="user"
          label="Last name"
          placeholder="López"
          registerField={register('lastName')}
          type="text"
        />
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
        <Input
          containerClass="mt-4"
          fieldError={errors.passwordConfirm}
          icon="lock"
          label="Confirm your password"
          placeholder="•••••••"
          registerField={register('passwordConfirm')}
          type="password"
        />
        <Button color="primary" type="submit" className="mt-6 w-full">
          Create account
        </Button>
      </form>

      {/*Footer*/}
      <div className="mt-6 space-y-2">
        <div className="text-center">
          <span className="text-gray-400">Already a member? </span>
          <span className="link">Log In</span>
        </div>
      </div>
    </div>
  );
};
