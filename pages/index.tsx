import React from 'react';
// import { services } from '../data';
// import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animation';

const index = () => {
  return (
    <>
      <motion.div variants={fadeInUp} initial='initial' animate='animate'>
        <h2 className='font-poppins, bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-2xl font-extrabold text-transparent  '>
          Aloha! My name is Tom Yotwongjai. I have been introduce to programming
          in 2017, since then, I have been coding on my free time off and on.
          Currently, I wanted to really push myself harder and work on becoming
          fullfledge front-end web developer. I like to make web desing simple
          yet engaging.
          <motion.div
            variants={routeAnimation}
            initial='initial'
            animate='animate'
          >
            <br /> Currently I am fucusing on React and NextJs. Programming has
            not only been my passion, but it has been a big part of myself
            growth, it teaches me that sometime thing will not go your way, but
            you can't give up just because you see an an error. I try to live by
            'being better 1% each day' and I am on a mission to prove myself
            that I am capable.
          </motion.div>
        </h2>
      </motion.div>
    </>
  );
};

export default index;
