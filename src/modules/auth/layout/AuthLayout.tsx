import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { SlideContent } from '../components/SlideContent';
import { Content } from '../models/Content';

interface Props {
  formChild: React.ReactNode;
  footerChild: React.ReactNode;
}

const content: Content[] = [
  {
    id: 1,
    imgName: 'content-1',
    title: 'Taskero siempre hace avanzar',
    description:
      'Aporta tu granito de arena, gestiona proyectos y logra cotas más altas de productividad independientemente de la dinámica de trabajo de tu equipo',
  },
  {
    id: 2,
    imgName: 'content-2',
    title: 'No es solo trabajo, es una forma de trabajar juntos.',
    description:
      'Gestiona proyectos, organiza tareas y fomenta un trabajo conjunto y colaborativo desde un mismo lugar.',
  },
  {
    id: 3,
    imgName: 'content-3',
    title: 'Funciones que garantizan el éxito',
    description:
      'Las intuitivas funciones de Taskero permiten configurar y personalizar flujos de trabajo para prácticamente cualquier cosa, ya sean reuniones, proyectos, eventos o metas.',
  },
];

export const AuthLayout = ({ formChild, footerChild }: Props) => {
  return (
    <div className="flex w-full h-screen">
      {/*Left side: Images and text*/}
      <div className="hidden sm:block bg-gradient-to-br from-sky-600 to-sky-700 text-white w-1/2">
        <div className="w-full h-full">
          <Swiper
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="h-full"
            grabCursor={true}
            loop
            modules={[Pagination, Autoplay]}
            pagination={{ dynamicBullets: true, clickable: true }}
          >
            {content.map(item => (
              <SwiperSlide key={item.id}>
                <SlideContent content={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/*Right side: Form components*/}
      <div className="grow flex overflow-auto">
        <div className="flex flex-col h-full px-5 py-7 w-full my-auto h-auto">
          {/*Heading*/}
          <div className="text-center space-y-4 mb-2">
            <div className="text-transparent bg-gradient-to-br from-sky-600 to-sky-700 bg-clip-text">
              <i className="fa-solid fa-circle-nodes text-7xl"></i>
            </div>
            <div>
              <h1 className="text-4xl font-light">Welcome back!</h1>
            </div>
          </div>

          {/*Form*/}
          <div className="lg:w-3/4 xl:w-1/2 lg:mx-auto">{formChild}</div>

          {/*Footer*/}
          {footerChild}
        </div>
      </div>
    </div>
  );
};
