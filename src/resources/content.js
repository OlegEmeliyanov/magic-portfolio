import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Oleg",
  lastName: "Emeliyanov",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Designer Furniture Manufacturer & Supplier",
  avatar: "/images/avatar.jpg",
  email: "oleg@emeliyanov.it",
  location: "Europe/Rome", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Italin", "Russian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/oleg-emeliyanov/",
  },
  {
    name: "X.com",
    icon: "x",
    link: "https://x.com/olegemeliyanov",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and manufacturing</>,
  featured: {
    display: true,
  },
  subline: (
    <>
      I'm {person.firstName} a furniture supply specialist passionate about
      transforming spaces with smart, stylish solutions. I develop custom design
      tools using 3Cad Evolution, turning creative concepts into precise,
      functional realities.
      When I'm not crafting workflows and design systems, you'll likely find me in the skies, immersed in the world of UltraLight Aviation.
      I'm the founder and current owner of the Borea, startup offering high-quality kits for assembling ultralight aircraft.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/ole-eme/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Oleg brings ideas to life — from bold design concepts to flawlessly
        executed furniture projects of any complexity. With years of expertise
        and a network of trusted Italian brands, he turns spaces into stories
        and ships ready-to-enjoy pieces anywhere in the world. Backed by
        reliable logistics partners, Oleg makes distance invisible and quality
        inevitable. Always open to fresh ideas and meaningful partnerships, he
        welcomes every opportunity to create something remarkable together.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "NordicAlpha",
        timeframe: "2013 - Present",
        role: "Management board member",
        achievements: [
          <>
            Continuously improving the company's brand and services. Project management, creating new products, marketing, sales, customer support and more.
          </>,

        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Vettoretti",
        timeframe: "2022 - 2025",
        role: "Managing Director at Vettoretti Srl",
        achievements: [
          <>
            Managing the company's operations, projects, production, personnel, marketing, sales and customer support.
          </>,

        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Home Cucine",
        timeframe: "2020 - 2022",
        role: "Senior Software Developer at Home Cucine Srl",
        achievements: [
          <>
            Developed a 3Cad Evolution design system that helps kitchen furniture manufacturer and their retailers to design their products faster and more efficiently.
          </>,

        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Yaroslavl State Polytechnical University",
        description: <>Master's degree, Engineering/Industrial Management.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "AutoCAD & SolidWorks",
        description: (
          <>Modeling and designing furniture and kitchen furniture.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "3Cad Evolution",
        description: (
          <>Building design systems for furniture manufacturers and retailers.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
