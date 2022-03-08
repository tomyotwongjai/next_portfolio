import { FunctionComponent } from 'react';
import { Service } from '../type';

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <>
      <div className='item-center flex space-x-4 p-2'>
        <Icon className='h-12 w-12 text-green-400' />
        <div>
          <h4 className='font-bold'>{title}</h4>
          <p dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
