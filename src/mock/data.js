import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ben Davis', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

export const navData = {
  path1: 'Home',
  path2: 'About',
  path3: 'Projects',
  path4: 'Contact',
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Ben Davis',
  subtitle: 'Front-End UI/UX Designer & Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Recent graduate from Lipscomb University with a Bachelor of Science in Electrical and Computer Engineering with a commitment to excellence, strong written language skills, creativity and artistic talent, as well as an accomplished amateur photographer.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'BenDavis_resume_V3_2020.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'MiniClueTemp.png',
    title: 'Mini Clue',
    info: 'This is a simplified, single-player version of the game Clue. Games consist of one player constantly making accusatory guesses in an attempt to narrow down the culprit and can last as short as a minute (or less). This project was built using <span class="highlight">ReactJS</span>.',
    info2: '',
    url: '', // url for live demo of project
    repo: 'https://github.com/bcdavis/CH43-Capstone-Mini-Clue', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
