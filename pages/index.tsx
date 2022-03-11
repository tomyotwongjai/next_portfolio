import React from 'react';
import Sidebar from '../components/Sidebar';
import { services } from '../data';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animation';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Web Developer | about | Tom Yotwongjai</title>
      </Head>
      <div className=' col-span-12  h-full p-4 text-center  text-base lg:col-span-3 '>
        <Sidebar />
      </div>

      <motion.div variants={fadeInUp} initial='initial' animate='animate'>
        <h2 className='bg-stone-700 from-green-400 to-blue-600 bg-clip-text text-xl font-extrabold text-transparent dark:bg-gradient-to-r  '>
          Aloha! My name is Tom Yotwongjai. I have been introduce to programming
          in 2017, since then, I have been coding on my free time off and on.
          Currently, I wanted to really push myself harder and work on becoming
          fullfledge front-end web developer. I like to make web design simple
          yet engaging & interactive.
          <motion.div
            variants={routeAnimation}
            initial='initial'
            animate='animate'
          >
            <br /> Currently I am focusing on ReactJS, Typescript and NextJs.
            Programming has not only been my passion, but it has been a big part
            of myself growth, it teaches me that sometimes things will not go
            your way, but you can't give up. I try to live by the 1% rules, to
            be better atleast 1% each day, and I am on a mission to prove myself
            that I am.
          </motion.div>
        </h2>
        <div className='my-3 grid gap-6 md:grid-cols-2'>
          {services.map((service) => (
            <div
              className='dark:bg-dark-200 col-span-2 rounded-lg bg-gray-200 p-2 text-stone-700 dark:text-white md:col-span-1'
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default index;
