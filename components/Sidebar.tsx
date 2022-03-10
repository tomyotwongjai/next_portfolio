import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';

const Sidebar = () => {
  // Card Flip Animation

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div>
        <Image
          src='/astronaut.svg'
          alt='avatar'
          className=' mx-auto rounded-full border '
          height='128px'
          width='128px'
          layout='intrinsic'
          quality='100'
        />
        <h3 className='font-kaushan my-4 text-3xl font-medium tracking-wider text-stone-800'>
          <span className=' dark:text-red-600 '>Tom</span> Yowongjai
        </h3>
        <p className=' dark:bg-black-500 w-8/10 my-3 px-2   py-1 text-stone-800'>
          Aspiring Web-Developer
        </p>
        <button className='w-8/10   my-2   h-8 cursor-pointer rounded-full bg-gray-500 from-green-400 to-blue-400 px-5 text-white duration-300 hover:-translate-y-1 hover:scale-110 dark:bg-gradient-to-r'>
          <a href='/assets/Resume.pdf' download='Tom-Resume'>
            Download CV
          </a>
        </button>
        <div className='my-5 mx-auto flex w-9/12 justify-around  md:w-full'>
          <a href='https://twitter.com/tom_yotwongjai'>
            <AiFillTwitterCircle
              className='h-8 w-8 cursor-pointer text-gray-500 duration-300 hover:-translate-y-1 hover:scale-110 dark:text-blue-400'
              aria-label='Twitter'
            />
          </a>
          <a href='https://github.com/tomyotwongjai'>
            <AiFillGithub
              className='h-8 w-8 cursor-pointer text-gray-500 duration-300 hover:-translate-y-1 hover:scale-110 dark:text-white'
              aria-label='Github'
            />
          </a>
          <a href='https://www.linkedin.com/in/tomyotwongjai/'>
            <FiLinkedin
              className='h-8 w-8 cursor-pointer text-gray-500 duration-300 hover:-translate-y-1 hover:scale-110 dark:text-blue-700'
              aria-label='Linkedin'
            />
          </a>
        </div>
        <div className='my-5 border-2'></div>
        <button
          className='w-8/10   h-8 cursor-pointer rounded-full bg-gray-500 from-green-400 to-blue-400 px-5 text-white duration-300 hover:-translate-y-1 hover:scale-110 dark:bg-gradient-to-r'
          onClick={() => window.open('mailto:travel3.biz@gmail.com')}
        >
          Get In Touch
        </button>
        <div className='flex items-center justify-between p-3'></div>
      </div>
    </>
  );
};

export default Sidebar;
