import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://alvaro-barrera.me/", // replace this with your deployed domain
  author: "Álvaro Barrera",
  profile: "https://alvaro-barrera.me/",
  desc: "Álvaro Barrera, software engineer en proyectos con Ruby on Rails, Laravel, desarrollo de API's, facturación electrónica, Single Page Application, conocimientos en marcos de trabajo ágiles - SCRUM",
  title: "Álvaro Barrera | Desarrollador de software",
  ogImage: "alvarobarrera.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  editPost: {},
};

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["es-ES"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/alvaro-barrera",
    linkTitle: ` ${SITE.title} en Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alvaro-barrera",
    linkTitle: `${SITE.title} en LinkedIn`,
    active: true,
  },
  {
    name: "X",
    href: "https://twitter.com/Alvaro__Barrera",
    linkTitle: `${SITE.title} en X`,
    active: true,
  },
];
