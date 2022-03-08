import React, { FunctionComponent } from 'react';
import { Skill } from '../type';
import { motion } from 'framer-motion';

const Bar: FunctionComponent<{ data: Skill }> = ({ data: { Icon, name } }) => {
  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
  };

  return (
    <div className='my-2 flex text-white'>
      <motion.div
        className='flex items-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-4 py-1'
        animate={{ scale: 1.2 }}
        transition={spring}
        initial='initial'
      >
        <Icon className='mr-3' />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
