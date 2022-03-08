import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const contactForm = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qfv2h3h',
        'template_5hohr8k',
        e.target,
        'Fx9ffsop8kM-ogtTs'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div>
      <form
        onSubmit={sendEmail}
        className=' flex  flex-col rounded-lg bg-white px-8 py-8 shadow-xl dark:bg-blue-500'
      >
        <h1 className='text-2xl font-bold dark:text-gray-50'>Send a message</h1>

        <label
          htmlFor='fullname'
          className='mt-8 font-light text-gray-500 dark:text-white'
        >
          Full name<span className='text-red-500 dark:text-white'>*</span>
        </label>
        <input
          required
          type='text'
          name='fullName'
          className='border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-green-500 focus:rounded-md focus:outline-none focus:ring-1 dark:text-white'
        />

        <label
          htmlFor='email'
          className='mt-4 font-light text-gray-500 dark:text-white'
        >
          E-mail<span className='text-red-500'>*</span>
        </label>
        <input
          required
          type='email'
          name='email'
          className='border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-green-500 focus:rounded-md focus:outline-none focus:ring-1 dark:text-white'
        />

        <label
          htmlFor='message'
          className='mt-4 font-light text-gray-500 dark:text-gray-50'
        >
          Message<span className='text-red-500'>*</span>
        </label>
        <textarea
          required
          name='message'
          className='border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-green-500 focus:rounded-md focus:outline-none focus:ring-1 dark:text-white'
        ></textarea>
        <div className='flex flex-row items-center justify-start'>
          <button className='mt-8 flex flex-row items-center rounded-md bg-[#130F49] px-10 py-2 text-lg font-light text-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600'>
            Send
          </button>
          <div>
            {result ? (
              <p className='m-5 px-5 text-red-400'>
                Awesome!. Will be in touch shortly
              </p>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default contactForm;
