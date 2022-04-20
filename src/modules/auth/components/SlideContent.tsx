import { Content } from '../models/Content';

interface Props {
  content: Content;
}

export const SlideContent = ({ content: { title, description, imgName } }: Props) => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-5 p-10">
      <img src={`../assets/img/${imgName}.svg`} alt={title} className="w-2/3" />
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <p className="text-center text-lg">{description}</p>
    </div>
  );
};
