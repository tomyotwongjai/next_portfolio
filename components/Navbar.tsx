import { DiCssdeck } from 'react-icons/di';
import { useEffect, useState, FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span
          className='mx-2 cursor-pointer hover:border-b-4 hover:text-green-400'
          onClick={() => setActive(name)}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [active, setActive] = useState('');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActive('About');
    if (pathname === 'projects') setActive('Project');
    if (pathname === 'tech') setActive('Tech');
    if (pathname === 'Blog') setActive('Blog');
  }, []);

  return (
    <div className='my-3 flex justify-between px-5 py-3'>
      <span className='  bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-xl font-bold text-transparent  md:text-2xl '>
        {active}
      </span>

      <div className=' flex  font-bold text-blue-500 dark:text-white'>
        <NavItem active={active} setActive={setActive} name='About' route='/' />
        <NavItem
          active={active}
          setActive={setActive}
          name='Projects'
          route='/projects'
        />
        <NavItem
          active={active}
          setActive={setActive}
          name='Tech'
          route='/technologies'
        />
        <NavItem
          active={active}
          setActive={setActive}
          name='Blog'
          route='/blog'
        />
      </div>
    </div>
  );
};

export default Navbar;
