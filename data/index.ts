export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Engineering secure and scalable smart contracts, focusing on DeFi protocols.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-50 grayscale",
    titleClassName: "justify-end text-neutral-100",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Globally accessible, asynchronous communication.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start text-neutral-100",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always learning and adapting",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center text-neutral-100",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Blockchain engineer focusing on EVM security and Rust.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start text-neutral-100",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building an ERC-4337 Account Abstraction Wallet",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-30 grayscale",
    titleClassName: "justify-center md:justify-start lg:justify-center text-neutral-100",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center text-neutral-100",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 0,
    title: "MEVA Protocol",
    des: "MEV capture and redistribution protocol. Custom tax bots and decentralized reward systems.",
    img: "/grid.svg",
    iconLists: ["/re.svg", "/tail.svg", "/solana.svg"],
    link: "https://github.com/harshedabdulla/meva",
  },
  {
    id: 1,
    title: "SME Lending Protocol",
    des: "DAO-governed lending contracts for undercollateralized DeFi Lending with on-chain credit scoring and automated liquidation logic.",
    img: "/grid.svg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com/harshedabdulla",
  },
  {
    id: 2,
    title: "Consensus Sentry",
    des: "Decentralized governance system in Rust with proposal/voting mechanics and cryptographic verification on ICP.",
    img: "/grid.svg",
    iconLists: ["/icp.png", "/re.svg", "/tail.svg", "/nodejs.svg"],
    link: "https://github.com/harshedabdulla",
  },
  {
    id: 3,
    title: "LearnMate AI",
    des: "AI-powered learning platform designed to empower students from diverse backgrounds and learning abilities.",
    img: "/grid.svg",
    iconLists: ["/re.svg", "/tail.svg", "/dock.svg", "/cloud.svg", "/lambda.svg", "/gpt.svg"],
    link: "https://intel-hack.pages.dev",
  },
  {
    id: 4,
    title: "Bloggy",
    des: "Decentralized blogging application built on the Internet Computer (ICP) platform.",
    img: "/grid.svg",
    iconLists: ["/re.svg", "/bootstrap.svg", "/icp.png", "/artemis.png", "/plug.png"],
    link: "https://dybl3-uyaaa-aaaal-qjfuq-cai.icp0.io",
  },
  {
    id: 5,
    title: "Oracle Aggregator",
    des: "Web-based Oracle Aggregator Dashboard displaying real-time cryptocurrency price data from Chainlink and Pyth.",
    img: "/grid.svg",
    iconLists: ["/re.svg", "/tail.svg", "/bitcoin.svg", "/solana.svg", "/coinbase.svg"],
    link: "https://oracle-aggregator-pearl.vercel.app",
  },
];

export const testimonials = [
  {
    quote: "Arkane Track Winner - Developed an innovative Web3 solution highlighting advanced blockchain mechanics.",
    name: "ETHIndia • 2024",
    title: "Hackathon Winner",
  },
  {
    quote: "2nd Prize Winner - Built an AI-based DApp using the Internet Computer Protocol and Rust.",
    name: "Elna.ai DeAI Hackathon",
    title: "Top Finalist",
  },
  {
    quote: "1st Place Winner - Secured first place out of hundreds of participants for building a high-impact application.",
    name: "BeachHack 5",
    title: "Grand Prize Winner",
  },
  {
    quote: "Runner up - Leveraged Intel's AI tools to build high-performance, intelligent applications.",
    name: "Intel oneAPI Hackathon",
    title: "Runner up",
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
    title: "Blockchain Developer",
    desc: "Designed and deployed ERC-20 token contracts on Polygon, engineered ERC-4337 wallet integration layer, and architected traceability systems on Hyperledger Fabric. Developed Fastify/Node.js backend services connecting on-chain states.",
    time: "Apr 2025 - Present",
    className: "md:col-span-2",
    thumbnail: "/kireap.png",
  },
  {
    id: 2,
    title: "Rust Developer",
    desc: "Migrated canister backend from Motoko to Rust/Wasm on Internet Computer, optimizing cryptographic serialization and stable memory management. Reduced memory footprint by 30%.",
    time: "Jan 2025 - Mar 2025",
    className: "md:col-span-2",
    thumbnail: "/elna.png",
  },
  {
    id: 3,
    title: "Blockchain Developer Intern",
    desc: "Built dApp on Internet Computer with wallet-based authentication, on-chain content storage via certified asset canisters, and decentralized access control.",
    time: "Jun 2024 - Aug 2024",
    className: "md:col-span-2",
    thumbnail: "/elna.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/harshedabdulla"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/harshedabdulla"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/harshed-abdulla/"
  },
];