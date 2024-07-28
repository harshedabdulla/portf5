import { time } from "console";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Building successful projects with client collaboration and open communication at the forefront. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a fashion SaaS platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "LearnMate AI",
    des: "AI-powered learning platform designed to empower students from diverse backgrounds and learning abilities.",
    img: "/lm.png",
    iconLists: ["/re.svg", "/tail.svg", "/dock.svg", "/cloud.svg", "/lambda.svg","/gpt.svg"],
    link: "https://intel-hack.pages.dev",
  },
  {
    id: 2,
    title: "MetaSave",
    des: "IoT based framework that integrates Multimodal Machine Learning and Blockchain techniques to remotely monitor patients from the care of their homes and securely relay this information between healthcare providers and families.",
    img: "/metasave.png",
    iconLists: ["/re.svg", "/tail.svg", "/wha.svg", "/pinata.png", "/nodejs.svg"],
    link: "https://metasave.netlify.app",
  },
  {
    id: 3,
    title: "Bloggy",
    des: "bloggy is a decentralized blogging application built on the Internet Computer (ICP) platform",
    img: "/bloggy.png",
    iconLists: ["/re.svg", "/bootstrap.svg", "/icp.png", "artemis.png", "plug.png"],
    link: "/https://dybl3-uyaaa-aaaal-qjfuq-cai.icp0.io",
  },
  {
    id: 4,
    title: "Oracle Aggregator",
    des: "This project is a web-based Oracle Aggregator Dashboard built using React. It aggregates and displays real-time cryptocurrency price data from multiple sources including Chainlink and Pyth.",
    img: "/oracle.png",
    iconLists: ["/re.svg", "/tail.svg", "/bitcoin.svg", "/solana.svg", "/coinbase.svg"],
    link: "https://oracle-aggregator-pearl.vercel.app",
  },
  {
    id: 5,
    title: "Kochi Metro Analytics",
    des: "Traffic control details dashboard of Kochi Metro",
    img: "/natpac.png",
    iconLists: ["/re.svg", "/tail.svg", "/graph.png", "/rest.png"],
    link: "https://kochimetro.vercel.app",
  },
  
  {
    id: 6,
    title: "Code Red",
    des: "Code Red is an AI-powered virtual assistant designed to provide critical and real time information and guidance during emergency situations, such as floods, to help people make informed decisions for their safety and survival based on their current location.",
    img: "/codered.png",
    iconLists: ["/js.svg","/nodejs.svg","wha.svg","/aws.svg"],
    link: "https://github.com/harshedabdulla/code-red",
  },
  {
    id: 7,
    title: "Dresscoded",
    des: "Ecommerce platform for dress and apparels for the genz age group.",
    img: "/ryzz.png",
    iconLists: ["/re.svg","tail.svg","strapi.png"],
    link: "https://ryzzin.vercel.app",
  },
  {
    id: 8,
    title: "Starlet",
    des: "The official website of annual hackathon named, Starlet organized by Mind Empowered",
    img: "/starlet.png",
    iconLists: ["/js.svg"],
    link: "https://starlet.mind-empowered.org/",
  },

];

export const testimonials = [
  {
    quote:
    "Awarded Second Prize in Asia's First DeAI Hackathon By elna.ai",
    name: "Issued by elna.ai · May 2024",
    title: "Built an AI based Dapp using ICP and Motoko stack",
  },
  {
    quote:
      "Awarded First Prize in AI/ML track in GTA Sandshores Hackathon",
    name: "Issued by GTech MuLearn · Nov 2023",
    title: "Developed a WhatsApp Bot for AI based disaster rescue notifications",
  },
  {
    quote:
      "Awarded TinyMCE Track Winner in Make-a-ton 6.0.",
    name: "Issued by School of Engineering, CUSAT · Nov 2023",
    title: "Developed a chrome extension to help track,record,analyse and provide mental health suggestions.",
  },
  {
    quote:
      "Awarded runner up in Intel oneAPI hackathon",
    name: "Issued by Intel Corporation · Jul 2023",
    title: "Developed a web application to help students learn from their study material in an easier way.",
  },
  {
    quote:
      "Awarded best AI track prize at HACK SRM 4.0 hackathon",
    name: "Issued by SRM University, Andhra Pradesh · May 2023",
    title: "Developed an application which helps students learn quickly using teachers notes and pyq papers. It then guides students with important topics, adjusting to their understanding.",
  },
  {
    quote:
      "Awarded honorable mentions at BlockCamp blockchain hackathon",
    name: "Issued by Amrita Vishwa Vidyapeetham & Vidyut 23 · May 2023",
    title: "We created a decentralized version of chit fund. where there is no intermediary or risk like in the traditional way. We used thirdweb,polygon,react and tailwind for building the application.",
  },
  {
    quote:
      "Awarded runner up in Slashkey 2.0 hackathon",
    name: "Issued by IEEE CS Kerala Society, Intel, IEEE CUSAT SB · May 2023",
    title: "Developed an AI doctor assistant which can help doctors to analyse the patient before consultation through an AI avatar video calling the patient and doing a series of test, including throat,eyes and skin.",
  },
  {
    quote:
      "Awarded 1st place in BeachHack 5 hackathon",
    name: "Issued by Christ College of Engineering · Dec 2022",
    title: "Created an all-in-one app for fishermen community to navigate safely, rent equipment, and exclusive chatting feature to build their own community. React, PWA, Tailwind, Firebase and Maps API were used in this project.",
  },
  {
    quote:
      "Awarded 2nd place in TCS Euphoria hackathon",
    name: "Issued by Tata Consultancy Services and Rajagiri College of Social Sciences · Aug 2022",
    title: "Developed a web app to help manage garbage in an easy and efficient manner. Firebase and React was used in development.",
  },
];

export const companies = [
  {
    id: 1,
    name: "Elna.ai",
    img: "/elna.png",
    nameImg: "/elna.png",
  },
  {
    id: 2,
    name: "intelo",
    img: "/app.svg",
    nameImg: "/intelo.png",
  },
  {
    id: 3,
    name: "natpac",
    img: "/host.svg",
    nameImg: "/natpac.webp",
  },
  {
    id: 4,
    name: "xena",
    img: "/s.svg",
    nameImg: "/xena.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "DeAI Intern",
    desc: "Developed a complete blogging application using the Internet Computer Protocol stack.",
    time: "Jun 2024 - Jul 2024 · 2 mos",
    className: "md:col-span-2",
    thumbnail: "/elna.png",
  },
  {
    id: 2,
    title: "Software Development Intern",
    desc: "Worked on the user feedback capture module, to get information about users feedback about a prompt reply.",
    time: "Nov 2023 - Jun 2024 · 8 mos",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/intelo.png",
  },
  {
    id: 3,
    title: "Research And Development Intern",
    desc: "Conducted data analysis of Kochi metro users to predict peak times and traffic patterns.",
    time: "Nov 2023 - Feb 2024 · 4 mos",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/natpac.webp",
  },
  {
    id: 4,
    title: "Frontend Intern",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    time: "Jul 2022 - Oct 2022 · 4 mos",
    className: "md:col-span-2",
    thumbnail: "/xena.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];