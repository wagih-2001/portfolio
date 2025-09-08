// === New Icons ===
import clerk from './clerk.png';
import cssIcon from './css.png';
import htmlIcon from './html.png';
import jsIcon from './js-.png';
import nextIcon from './next.png';
import reactIcon from './react.png';
import reduxIcon from './redux.png';
import strapiIcon from './strapi.png';
import stripeIcon from './stripe.png';
import tailwindIcon from './tailwind.png';
import typescriptIcon from './typescript.png';
import vercelIcon from './vercel.png';

// === Old Icons ===
import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

// === Assets Export ===
export const assets = {
  // New Icons
  clerk,
  cssIcon,
  htmlIcon,
  jsIcon,
  nextIcon,
  reactIcon,
  reduxIcon,
  strapiIcon,
  stripeIcon,
  tailwindIcon,
  typescriptIcon,
  vercelIcon,
  // Old Icons
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark
};

// === Work Data Updated with Real Icons ===
export const workData = [
  {
    title: 'Learnfiy – Online Learning Platform',
    description:
      'Full-Stack learning platform built with Next.js, Strapi, Clerk Auth, and Tailwind CSS.',
    bgImage: '/work-1.png',
    tools: [
      { name: 'Next.js', icon: assets.nextIcon },
      { name: 'Tailwind CSS', icon: assets.tailwindIcon },
      { name: 'Strapi', icon: assets.strapiIcon },
      { name: 'Clerk Auth', icon: assets.clerk },
      { name: 'Context API', icon: assets.reactIcon }
    ],
    domain: 'https://learnfiy.vercel.app',
    github: 'https://github.com/wagih-2001/Learnfiy'
  },
  {
    title: 'Prayer-Time – Islamic Prayer Times App',
    description:
      'Responsive app displaying daily prayer times using Aladhan API.',
    bgImage: '/work-2.png',
    tools: [
      { name: 'React.js', icon: assets.reactIcon },
      { name: 'CSS3', icon: assets.cssIcon },
      { name: 'Fetch API', icon: assets.jsIcon }
    ],
    domain: 'https://prayer-time-flame.vercel.app',
    github: 'https://github.com/wagih-2001/prayer-time'
  },
  {
    title: 'E-commerce Topico – Online Store',
    description:
      'Modern e-commerce website with responsive design showcasing products & categories.',
    bgImage: '/work-3.png',
    tools: [
      { name: 'HTML5', icon: assets.htmlIcon },
      { name: 'CSS3', icon: assets.cssIcon },
      { name: 'JavaScript', icon: assets.jsIcon }
    ],
    domain: 'https://wagih-2001.github.io/E-commerce-Topico/',
    github: 'https://github.com/wagih-2001/E-commerce-Topico'
  },
  {
    title: 'Logo Project – Landing Page Showcase',
    description:
      'Responsive landing page showcasing logos with advanced CSS styling.',
    bgImage: '/work-4.png',
    tools: [
      { name: 'HTML5', icon: assets.htmlIcon },
      { name: 'CSS3', icon: assets.cssIcon },
      { name: 'JavaScript', icon: assets.jsIcon }
    ],
    domain: 'https://wagih-2001.github.io/logo-/',
    github: 'https://github.com/wagih-2001/logo-'
  }
];

// === Services Section ===
export const serviceData = [
  {
    icon: assets.web_icon,
    title: 'Frontend Development',
    description:
      'Building responsive, interactive web apps using React.js, Next.js & Tailwind CSS.',
    link: ''
  },
  {
    icon: assets.ui_icon,
    title: 'Web App Integration',
    description:
      'API integration, state management, and backend connectivity with Strapi.',
    link: ''
  },
  {
    icon: assets.mobile_icon,
    title: 'UI/UX Design',
    description:
      'Creating modern, user-friendly designs with Figma & Tailwind.',
    link: ''
  },
  {
    icon: assets.graphics_icon,
    title: 'Performance Optimization',
    description:
      'Improving load times, scalability, and accessibility for better user experience.',
    link: ''
  }
];

// === Info List ===
export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Languages , Frameworks',
    description:
      'HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind CSS, TypeScript'
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: ' Computer Science  Zagazig University'
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Developed Many projects'
  }
];

// === Tools Section ===
export const toolsData = [
  assets.vscode,
  assets.git,
  assets.figma,
  assets.vercelIcon,
];
