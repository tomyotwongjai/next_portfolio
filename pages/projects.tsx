import { useState } from 'react';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import ProjectNavbar from '../components/ProjectNavbar';
import { projects as projectsData } from '../data';
import { Category } from '../type';
import { motion } from 'framer-motion';
import { stagger, fadeInUp, routeAnimation } from '../animation';

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('all');

  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handleFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
  return (
    <motion.div
      className='overflow-y-scroll px-5 py-2'
      style={{ height: '65vh' }}
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <title>Web Developer | portfolio | Tom Yotwongjai</title>
      </Head>
      <ProjectNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />

      <motion.div
        className='relative my-3 grid grid-cols-12 gap-4'
        variants={stagger}
        initial='initial'
        animate='animate'
      >
        {projects.map((project, id) => (
          <motion.div
            className='dark:bg-dark-200 col-span-12 rounded-lg bg-gray-200 p-2 sm:col-span-6 lg:col-span-4'
            variants={fadeInUp}
          >
            <ProjectCard
              project={project}
              key={id}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
