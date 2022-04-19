import { Button } from '../../../components/Button';

export const Login = () => {
  return (
    <div>
      {/*Heading*/}
      <div className="text-center space-y-4">
        <i className="fa-solid fa-circle-nodes text-sky-700 text-7xl"></i>
        <h1 className="text-5xl font-light">Hello Again!</h1>
        <p className="text-grey">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, similique?
        </p>
      </div>

      {/*    */}
      <Button color="primary">Login</Button>
      <Button color="light">Emmanuel</Button>
      <Button color="google" includeIcon>
        <i className="fab fa-google"></i>
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
};
