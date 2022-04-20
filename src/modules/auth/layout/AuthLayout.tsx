interface Props {
  formChild: React.ReactNode;
  footerChild: React.ReactNode;
}

export const AuthLayout = ({ formChild, footerChild }: Props) => {
  return (
    <div className="flex w-full min-h-screen">
      {/*Left side: Images and text*/}
      <div className="hidden">Aquí va el texto</div>

      {/*Right side: Login and Register components*/}
      <div className="grow">
        <div className="flex flex-col h-full px-5 py-7">
          {/*Heading*/}
          <div className="text-center space-y-4">
            <i className="fa-solid fa-circle-nodes text-sky-700 text-7xl"></i>
            <div>
              <h1 className="text-4xl font-light">Welcome back!</h1>
            </div>
          </div>

          {/*Form*/}
          {formChild}

          {/*Footer*/}
          {footerChild}
        </div>
      </div>
    </div>
  );
};
