import { useState, useEffect, Key } from 'react';
import Post from '../components/Post';
import { getPosts } from '../pages/api/getPosts';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animation';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => {
      console.log(res);
      setPosts(res);
    });
  }, []);

  return (
    <>
      <motion.div
        className=' flex flex-grow flex-col items-center justify-center px-6 pt-1'
        variants={routeAnimation}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <div
          className='dark:bg-dark-100 container mt-5 flex-grow p-4'
          style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
        >
          <motion.div
            className='my-3 grid gap-6 md:grid-cols-2'
            variants={stagger}
            initial='initial'
            animate='animate'
          >
            {posts.map((posts: { title: Key }) => (
              <motion.div
                className='dark:bg-dark-200 col-span-2 rounded-lg bg-gray-200 p-2 md:col-span-1'
                variants={fadeInUp}
              >
                <Post key={posts.title} post={posts} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial='initial'
            animate='animate'
          ></motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Blog;
