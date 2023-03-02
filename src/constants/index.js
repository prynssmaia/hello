import {
  NavigationArrow,
  Layout,
  TextT,
  ChatCircle,
  BehanceLogo,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
} from 'phosphor-react';

export const navIcons = [
  {
    id: 'navigation-arrow',
    icon: NavigationArrow,
    ref: 'home',
  },
  {
    id: 'layout',
    icon: Layout,
    ref: 'projects',
  },
  {
    id: 'text-t',
    icon: TextT,
    ref: 'about',
  },
  {
    id: 'chat-circle',
    icon: ChatCircle,
    ref: 'contact',
  },
];

export const navLinks = [
  {
    id: 'home',
    icon: NavigationArrow,
    title: 'Home',
  },
  {
    id: 'projects',
    icon: Layout,
    title: 'Projects',
  },
  {
    id: 'about',
    icon: TextT,
    title: 'About',
  },
  {
    id: 'contact',
    icon: ChatCircle,
    title: 'Contact',
  },
];

export const projects = [
  {
    id: 'project-1',
    image: 'https://unsplash.com/pt-br/fotografias/dJpupM4LiS4',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'project-2',
    image: 'https://unsplash.com/pt-br/fotografias/mcSDtbWXUZU',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'project-3',
    image: 'https://unsplash.com/pt-br/fotografias/4UGmm3WRUoQ',
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export const socialMedia = [
  {
    id: 'behance-logo',
    icon: BehanceLogo,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'instagram-logo',
    icon: InstagramLogo,
    link: 'https://www.instagram.com/prynssmaia/',
  },
  {
    id: 'linkedin-logo',
    icon: LinkedinLogo,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'github-logo',
    icon: GithubLogo,
    link: 'https://www.linkedin.com/',
  },
];
