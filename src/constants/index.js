import {
    minecraft,
    rust,
    java,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    git,
    threejs,
    squid,
    hoyo,
    hormigeo,
    backrooms,
    eddt,
    cinematic,
    squid_min,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "Sobre Mí",
    },
    {
        id: "work",
        title: "Experiencia",
    },
    {
        id: "contact",
        title: "Contacto",
    },
];

const services = [
    {
        title: "Minecraft Developer",
        icon: minecraft,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Java Developer",
        icon: java,
    },
    {
        title: "Rust Developer",
        icon: rust,
    },
];

const technologies = [
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Rust",
        icon: rust,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Hellcraft",
        company_name: "MitosV",
        icon: minecraft,
        iconBg: "#383E56",
        date: "July 2021 - Ago 2021",
        description:
            "Hellcraft fue mi primer proyecto, era un evento plublico de un mes de duracion, la mecanica principal es si mueres queda permanentemente baneado",
        points: [],
    },
    {
        title: "Cinematic Mod",
        company_name: "MitosV",
        icon: cinematic,
        iconBg: "#90ddd0",
        date: "Sep 2021 - Oct 2021",
        description:
            "Este fue unos de mis primeros mod creados para Minecraft.",
        points: [
            "Muestra videos en minecraft.",
            "Cargar el video para uno o mas jugadores.",
        ],
    },
    {
        title: "Eufonia Studio",
        company_name: "Eufonia Studio",
        icon: "https://pbs.twimg.com/profile_images/1650320444577251329/sOZrOtF9_400x400.jpg",
        iconBg: "#0e1620",
        date: "Jan 2021 - Feb 2022",
        description:
            "Eufonia Studios, es una empresa desarrolladora de juegos, especializada en eventos de minecraft para creadores de contenido.",
        points: [],
    },
    {
        title: "Squid Craft 2",
        company_name: "Eufonia Studio",
        icon: squid_min,
        iconBg: "#ecab0d",
        date: "Jan 2023 - Present",
        description: "Mi primer evento de estando dentro de Eufonia Studio",
        points: [
            "Obtube mayor experiencia para trabajo en equipo.",
            "Aprendi a trabajar bajo situciones de estres en eventos en vivo.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Squid Craft 2",
        description:
            "Squid Craft 2 fue un evento de Twitch Rivals, realizado en colaboración con varios YouTubers y con la ayuda del estudio de desarrollo de videojuegos Eufonia Studio.",
        tags: [
            {
                name: "minecraft",
                color: "green-text-gradient",
            },
            {
                name: "java",
                color: "blue-text-gradient",
            },
        ],
        image: squid,
        source_code_link: "https://www.youtube.com/watch?v=gUjICymQEaY",
    },
    {
        name: "EL HOYO",
        description:
            "El Hoyo, fue un evento del streamer Juan Guarnizo, inspirado en la película de netflix del mismo nombre, fue realizado por el estudio de desarrollo Eufonia Studio.",
        tags: [
            {
                name: "minecraft",
                color: "green-text-gradient",
            },
            {
                name: "java",
                color: "blue-text-gradient",
            },
        ],
        image: hoyo,
        source_code_link: "https://www.youtube.com/watch?v=67hCA8rEzwg",
    },
    {
        name: "Backrooms",
        description:
            "El Hoyo, fue un evento del streamer Soaring, basado en los espacios liminales, fue realizado por el estudio de desarrollo Eufonia Studio.",
        tags: [
            {
                name: "minecraft",
                color: "green-text-gradient",
            },
            {
                name: "java",
                color: "blue-text-gradient",
            },
        ],
        image: backrooms,
        source_code_link: "https://www.youtube.com/watch?v=Y_bHG_I1jAY",
    },
    {
        name: "Hormigeo 2",
        description:
            "Hormigeo 2, fue un evento secuela de Hormigeo 1 del streamer Aldo Geo, fue realizado por el estudio de desarrollo Eufonia Studio.",
        tags: [
            {
                name: "minecraft",
                color: "green-text-gradient",
            },
            {
                name: "java",
                color: "blue-text-gradient",
            },
        ],
        image: hormigeo,
        source_code_link: "https://www.youtube.com/watch?v=yc2SZ3g14bw",
    },
    {
        name: "El Dios de Todo",
        description:
            "El Dios de Todo, fue una serie del streamer Juan Guarnizo relata el camino de Juan Cubito, el ex hechicero supremo, para convertirse en un nuevo Dios de Todo.",
        tags: [
            {
                name: "minecraft",
                color: "green-text-gradient",
            },
            {
                name: "java",
                color: "blue-text-gradient",
            },
        ],
        image: eddt,
        source_code_link: "https://www.youtube.com/watch?v=OnutxnD0_Fg",
    },
];

export { services, technologies, experiences, testimonials, projects };
