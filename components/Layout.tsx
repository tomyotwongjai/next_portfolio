import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children, title, description }: Props): JSX.Element => (
  <div>
    <motion.main
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ type: 'linear' }}
      className='
                    flex h-full w-full flex-col items-start
                    px-8 pt-10 sm:px-16 md:px-36 lg:px-52
                    xl:px-80 2xl:px-96
                '
    >
      {children}
    </motion.main>
  </div>
);

export default Layout;
