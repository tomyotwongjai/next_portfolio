import React from 'react';
import Head from 'next/head';
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
      <h3 className='bg-neutral-800 from-green-400 to-blue-400 bg-clip-text text-center text-2xl font-bold text-transparent dark:bg-gradient-to-r '>
        Where I'm Learning
      </h3>
      <div className='my-5 border-2'></div>
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <div className=''>
            <h5 className='my-2 text-lg font-bold underline'>FreeCodeCamp</h5>
            <p className='my-3'>
              FreeCodeCamp is a free online self pace platform for learning from
              basic programming such as HTML/CSS Bootstrap to more advance
              pogramming language such as JavaScript, JQuery, React, Redux.
            </p>
            <h5 className='my-2 text-lg font-bold underline'>Youtube</h5>
            <p className='my-3'>
              Through tutorials, I understand code structuring and writing clean
              code.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <div className=''>
            <h5 className='my-2 text-lg font-bold underline'> EDX-CS50X</h5>
            <p className='my-3'>
              Free courses provided by Havard university whe Professor talk
              about programming philosophy and learn the very basic of
              programming.
            </p>
            <h5 className='my-2 text-lg font-bold underline'>
              Github Repositories
            </h5>

            <p className='my-3'>
              Reading ther people code help me understand the concept of how
              code are working to gether, braking it apart and implementing it
              on my own.
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
