import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';
import ContactForm from './ContactForm';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Sidebar = () => {
  // Card Flip Animation

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <div className=''>
        <img
          src='/astronaut.svg'
          alt='my-image'
          className='mx-auto h-32 w-32 rounded-full'
        />

        <h3 className='bg-red-500 bg-clip-text text-center text-2xl font-bold text-transparent'>
          Self Taught
        </h3>
        <p className='bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-center text-2xl font-bold text-transparent'>
          Web developer
        </p>
        <button className=' w-8/10 h-8  cursor-pointer rounded-full bg-gradient-to-r from-green-400 to-blue-400 px-5 text-white duration-300 hover:-translate-y-1 hover:scale-110'>
          <a href='/assets/Resume.pdf' download='Tom-Resume'>
            Download CV
          </a>
        </button>
        <div className='my-5 mx-auto flex w-9/12 justify-around  md:w-full'>
          <a href=''>
            <AiFillTwitterCircle
              style={{ color: '#1DA1F2' }}
              className='h-8 w-8 cursor-pointer duration-300 hover:-translate-y-1 hover:scale-110 '
            />
          </a>
          <a href=''>
            <AiFillGithub
              style={{ color: '#4078c0' }}
              className='h-8 w-8 cursor-pointer duration-300 hover:-translate-y-1 hover:scale-110'
            />
          </a>
          <a href=''>
            <FiLinkedin
              style={{ color: '#0e76a8' }}
              className='h-8 w-8 cursor-pointer duration-300 hover:-translate-y-1 hover:scale-110'
            />
          </a>
        </div>
        <div className='my-5 border-2'></div>
        <button
          className='w-8/10 h-8  cursor-pointer rounded-full bg-gradient-to-r from-green-400 to-blue-400 px-5 text-white duration-300 hover:-translate-y-1 hover:scale-110'
          onClick={() => window.open('mailto:travel3.biz@gmail.com')}
        >
          Email
        </button>
        <div className='flex items-center justify-between p-3'></div>
        <button
          className='w-8/10 h-8  cursor-pointer rounded-full bg-gradient-to-r from-green-400 to-blue-400 px-5 text-white duration-300 hover:-translate-y-1 hover:scale-110'
          onClick={handleClick}
        >
          Contact
        </button>
      </div>
      <div>
        <ContactForm />
        <button
          className='my-3 w-6/12  rounded-full bg-gradient-to-r from-green-400 to-blue-400 px-5 text-white hover:scale-105 focus:outline-none'
          onClick={handleClick}
        >
          Return
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default Sidebar;
