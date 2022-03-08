import React from 'react';
import { languages, tools } from '../data';
import Bar from '../components/Bar';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animation';

const resume = () => {
  return (
    <motion.div
      className='px-6 py-2'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {/* //! Education */}

      <h3 className='bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-center text-2xl font-bold text-transparent '>
        Where I'm Learning
      </h3>
      <div className='my-5 border-2'></div>
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <div className=''>
            <h5 className='my-2 text-lg font-bold'>FreeCodeCamp</h5>
            <p className='font-semibold'>Front End Development</p>
            <p className='my-3'>
              FreeCodeCamp is a free online self pace platform for learning from
              basic programming such as HTML/CSS Bootstrap to more advance
              pogramming language such as JavaScript, JQuery, React, Redux. It
              has several self pace projects and youtube channels for
              self-taough prorammer to dice deep in their web development
              journey.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <div className=''>
            <h5 className='my-2 text-lg font-bold'>EDX online Learning</h5>
            <p className='font-semibold'>CS50X</p>
            <p className='my-3'>
              {' '}
              Free courses provided by Havard university whe Professor talk
              about programming philosophy and learn the very basic of
              programming.
            </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className='grid gap-9 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
          <div className='my-2'>
            {languages.map((language, i) => (
              <Bar data={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
          <div className='my-2'>
            {tools.map((tools, i) => (
              <Bar data={tools} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
