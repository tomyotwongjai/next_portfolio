import React from 'react';
import { FunctionComponent } from 'react';
import { Category } from '../type';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  let className = 'capitalize cursor-pointer hover:text-blue-500';
  if (active === value) className += 'text-blue-400';

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className=' mx-2  flex cursor-pointer list-none space-x-3 overflow-x-auto rounded-lg  px-3 py-2 font-bold '>
      <NavItem value='all' {...props} />
      <NavItem value='latest' {...props} />
      <NavItem value='previous' {...props} />
    </div>
  );
};

export default ProjectNavbar;
