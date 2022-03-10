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
      <div className=' item-center  space-x-4  p-2 '>
        <div>
          <h1 className=' font-bold'>{title}</h1>
          <p
            className='text-stone-700 dark:text-white'
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
