import Image from 'next/image';
import { FunctionComponent, useState, useEffect } from 'react';
import { Category } from '../type';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IsProjects } from '../type';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../animation';

const ProjectCard: FunctionComponent<{
  project: IsProjects;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,

    deploy_url,
    description,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className='cursor-pointer'
        onClick={() => setShowDetail(id)}
        layout='responsive'
        height='150'
        width='300'
      />

      <p className='my-2 text-center'>{name}</p>
      {showDetail === id && (
        <div className='  absolute top-0 left-0 z-10 grid h-auto w-full gap-x-12 rounded-lg bg-gray-200 p-2 text-neutral-800 dark:bg-neutral-800  dark:text-white md:grid-cols-2 md:p-10'>
          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.div
              variants={fadeInUp}
              className='border-4 border-neutral-500 dark:border-white'
            >
              <Image
                src={image_path}
                alt={name}
                layout='responsive'
                height='150'
                width='300'
              />
            </motion.div>

            <motion.div
              className='my-4 flex justify-center space-x-3'
              variants={fadeInUp}
            >
              <a
                href={github_url}
                className='item-center dark:bg-dark-500 flex space-x-3 bg-gray-200 px-4 py-2 text-lg'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deploy_url}
                className='item-center dark:bg-dark-500 flex space-x-3 bg-gray-200 px-4 py-2 text-lg'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.h2
              className='mb-3 text-xl font-medium md:text-2xl'
              variants={fadeInUp}
            >
              {name}
            </motion.h2>
            <motion.h3 className='mb-3 font-medium' variants={fadeInUp}>
              {description}
            </motion.h3>

            <motion.div
              className='mt-5 flex flex-wrap space-x-2 text-sm tracking-wider'
              variants={fadeInUp}
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className='dark:bg-dark-200 my-1 rounded-sm bg-gray-200 px-2 py-1'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            className='dark:bg-dark-200 absolute top-3 right-3 rounded-full bg-gray-200 p-1 focus:outline-none'
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
