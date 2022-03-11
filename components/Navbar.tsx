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
    if (pathname === '/') setActive('Home');
    else if (pathname === 'projects') setActive('Project');
    else if (pathname === 'tech') setActive('Tech');
    else if (pathname === 'blog') setActive('Blog');
  }, [pathname]);

  return (
    <div className='my-3 flex justify-between px-5 py-3'>
      <span className='bg-neutral-800 from-green-400 to-blue-400 bg-clip-text text-xl font-bold text-transparent dark:bg-gradient-to-r  md:text-2xl '>
        {active}
      </span>

      <div className=' flex  font-bold text-neutral-800 dark:text-white'>
        <NavItem active={active} setActive={setActive} name='Home' route='/' />
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
