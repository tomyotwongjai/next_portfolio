import { RiComputerLine } from 'react-icons/ri';
import { Service, Skill, Tech, IsProjects } from './type';
import {
  AiFillGithub,
  AiOutlineFire,
  AiFillHtml5,
  AiOutlineChrome,
} from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss, SiNextdotjs, SiVisualstudio } from 'react-icons/si';
import { RiReactjsFill, RiVuejsFill } from 'react-icons/ri';
import { BsStackOverflow } from 'react-icons/bs';
export const services: Service[] = [
  {
    title: 'Design',
    about:
      'Simple content structure focus on clean design and user interaction ',
    Icon: RiComputerLine,
  },
  {
    title: 'Focus',
    about:
      'Developing and maintain the user interface and implementing design on mobile websites',
    Icon: SiTailwindcss,
  },
  {
    title: 'Front-end',
    about: 'Continuos learning everything front-end has to offer.',
    Icon: AiFillGithub,
  },
];

export const languages: Skill[] = [
  {
    name: 'HTML5',
    Icon: AiFillHtml5,
  },
  {
    name: 'CSS3',
    Icon: DiCss3,
  },
  {
    name: 'TailwindCSS',
    Icon: SiTailwindcss,
  },
  {
    name: 'ReactJS',
    Icon: RiReactjsFill,
  },
  {
    name: 'VueJS',
    Icon: RiVuejsFill,
  },
  {
    name: 'NextJS',
    Icon: SiNextdotjs,
  },
];

export const tools: Tech[] = [
  {
    name: 'GitHub',
    Icon: AiFillGithub,
  },
  {
    name: 'Firebase',
    Icon: AiOutlineFire,
  },
  {
    name: 'Stackoverflow',
    Icon: BsStackOverflow,
  },
  {
    name: 'ChromeDev tools',
    Icon: AiOutlineChrome,
  },
  {
    name: 'Vs code',
    Icon: SiVisualstudio,
  },
];

export const projects: IsProjects[] = [
  {
    id: 1,
    name: 'Weather Application',
    description:
      'Weather application build with react. Fetching current weather information using openweather API ',
    image_path: '/images/project1.png',
    deploy_url: 'https://whatweathercity.netlify.app/',
    github_url: 'https://github.com/tomyotwongjai/react-weather-app',
    category: ['previous'],
    key_techs: [
      'React',
      'openweathercit api',
      'react-hook',
      'callback function',
    ],
  },
  {
    id: 2,
    name: 'Static landing page',
    description:
      'Simple responsive static Landing page using html/css and some javascript for animation & scrollup ',
    image_path: '/images/project2.png',
    deploy_url: 'https://onepagelanding.netlify.app',
    github_url: 'https://github.com/tomyotwongjai/react-weather-app',
    category: ['previous'],
    key_techs: [
      'React',
      'openweathercit api',
      'react-hook',
      'callback function',
    ],
  },
  {
    id: 3,
    name: 'Chat Application',
    description:
      'Fully functional end to end chat application using chat.io API, google authentication. Using firebase as a backend',
    image_path: '/images/project3.png',
    deploy_url: 'https://awesomechat.netlify.app/',
    github_url: 'https://github.com/tomyotwongjai/react-weather-app',
    category: ['previous'],
    key_techs: ['React', 'Chat.io api', 'react-hook'],
  },
  {
    id: 4,
    name: 'First Portfolio',
    description:
      'Weather application build with react. Fetching current weather information using openweather API ',
    image_path: '/images/project4.png',
    deploy_url: 'https://tomyotwongjai.netlify.app/',
    github_url: 'https://github.com/tomyotwongjai/react-weather-app',
    category: ['previous'],
    key_techs: [
      'React',
      'openweathercit api',
      'react-hook',
      'callback function',
    ],
  },
];
