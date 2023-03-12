import {
  NavigationArrow,
  Layout,
  TextT,
  ChatCircle,
  TwitterLogo,
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
    image: 'https://source.unsplash.com/random/?red-aesthetic&1',
    title: 'Project 1',
    description: 'Lorem ipsum dolor',
  },
  {
    id: 'project-2',
    image: 'https://source.unsplash.com/random/?red-aesthetic&2',
    title: 'Project 2',
    description: 'Lorem ipsum dolor',
  },
];

export const socialMedia = [
  {
    id: 'twitter',
    icon: TwitterLogo,
    link: 'https://www.twitter.com/prynss_ms/',
  },
  {
    id: 'instagram',
    icon: InstagramLogo,
    link: 'https://www.instagram.com/prynssmaia/',
  },
  {
    id: 'linkedin',
    icon: LinkedinLogo,
    link: 'https://www.linkedin.com/',
  },
  {
    id: 'github',
    icon: GithubLogo,
    link: '#',
  },
];
