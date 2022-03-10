import { FunctionComponent } from 'react';
import { Service } from '../type';

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <>
      <div className='shadow-neo-2 item-center dark:shadow-custom-dark space-x-4  p-2 '>
        <div>
          <h5 className=' font-bold'>{title}</h5>
          <p
            className='text-stone-700'
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
