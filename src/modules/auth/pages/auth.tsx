import { Login } from '../components/Login';
import { Register } from '../components/Register';

export const Auth = () => {
  return (
    <div className="flex w-full h-screen">
      {/*Left side: Images and text*/}
      <div className="hidden">Aquí va el texto</div>

      {/*Right side: Login and Register components*/}
      <div className="grow">
        {/*<Login />*/}
        <Register />
      </div>
    </div>
  );
};
