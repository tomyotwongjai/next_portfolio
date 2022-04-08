import React from 'react';
import Link from './NoScrollLink';
import moment from 'moment';

const Posts = ({ post }) => {
  return (
    <>
      <div className='flex w-full flex-col items-center justify-center p-12 text-left sm:flex-row'>
        {/* <Link href='https://dev.to/tomyotwongjai'> */}
        <Link href={{ pathname: '/posts/[slug]', query: { id: post.id } }}>
          <a
            className='w-full text-gray-500 dark:text-gray-300'
            target='_blank'
          >
            <h3 className='text-2xl text-gray-600 dark:text-gray-100'>
              {post.title}
            </h3>

            <p className='my-1 text-sm'>
              <span>{moment(post.date).format('Do MMMM YYYY')}</span>
              <span className='px-1'>-</span>
              <span>{post.tags}</span>
            </p>

            <p className='mt-2 text-base'>{post.description}</p>
            <p className='mt-2 text-base underline transition-colors hover:text-gray-800 dark:hover:text-gray-100'>
              Read more
            </p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Posts;
