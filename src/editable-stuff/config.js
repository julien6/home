// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Julien",
  middleName: "",
  lastName: "Soulé",
  message: "",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/julien6",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/julien-soul%C3%A9-6b2b27173/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/julien_soule.jpeg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/julien_soule.jpeg"),
  imageSize: 375,
  message:
    "My name is Julien Soule. I am a PhD student passionated by providing Cyberdefense with Multi-Agent Systems.",
  resume: require("../editable-stuff/resume.pdf")
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "julien6", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["MOISE-MARL", "CybMASDE"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/julien_soule.jpeg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/julien_soule.jpeg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  logos: [
    {
      src: require('../assets/logos/lcis_logo.png'),
      height: 100,
      width: 300
    },
    {
      src: require('../assets/logos/grenoble-inp_logo.png'),
      height: 100,
      width: 130
    },
    {
      src: require('../assets/logos/la-ruche_logo.png'),
      height: 100,
      width: 90
    },
    {
      src: require('../assets/logos/uga_logo.png'),
      height: 100,
      width: 140
    }
  ],
  message:
    "I am always open to feedbacks so please feel free to email me at",
  email: "julien.soule@univ-grenoble-alpes.fr",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

const defense = {
  show: true,
  heading: "Thesis defense",
  data: {
    date: "November 17, 2025",
    location: {
      full_name: "Esisar – Grenoble INP UGA (Amphitheater D030), 50 Rue Barthélémy de Laffemas, 26000 Valence, France",
      google_maps_link: "https://maps.app.goo.gl/zNSoSKCdYUdoZ2nt6"
    },
    announce: "I will defend my thesis entitled 'On the Organization of a Cyberdefense Multi-Agent Systems'. You are all welcome to attend!",
    description: 'This thesis explores a distributed approach to cyber defense based on multi-agent systems capable of collectively detecting, responding to, and adapting to autonomous and evolving attacks. The work introduces a hybrid method that combines a symbolic organizational model <span style="white-space:nowrap">(<span style="font-size:0.8em"><InlineMath math="\\mathcal{M}OISE^+" /></span>)</span> with multi-agent reinforcement learning (MARL), framing the design as a constraint optimization problem. A software framework, CybMASDE, was developed and applied to several use cases (drone swarm, company infrastructure, Kubernetes microservices), demonstrating levels of resilience, adaptability, and autonomy that centralized approaches cannot achieve.',
    keywords: "Multi-Agent Systems, Cyberdefense, Autonomous Intelligent Cyberdefense Agent, Multi-Agent Reinforcement Learning, Assisted-Design",
    zoom_link: "https://grenoble-inp.zoom.us/j/91692482911",
    password: "747546",
    replay_video: "",
    manuscript: require("../editable-stuff/manuscript.pdf"),
    jury: {
      members: [
        {
          name: "Jean-Paul Jamont",
          title: "Full Professor",
          institution: "Université Grenoble Alpes",
          role: "Thesis Advisor"
        },
        {
          name: "Michel Occello",
          title: "Full Professor",
          institution: "Université Grenoble Alpes",
          role: "Co-advisor"
        },
        {
          name: "Gauthier Picard",
          title: "Research Director",
          institution: "ONERA Toulouse",
          role: "Reviewer"
        },
        {
          name: "Laurent Vercouter",
          title: "Full Professor",
          institution: "INSA Rouen",
          role: "Reviewer"
        },
        {
          name: "Oum-El-Kheir Aktouf",
          title: "Full Professor",
          institution: "Grenoble INP – Université Grenoble Alpes",
          role: "Examiner"
        },
        {
          name: "Aurélie Beynier",
          title: "Full Professor",
          institution: "Sorbonne Université",
          role: "Examiner"
        },
        {
          name: "Flavien Balbo",
          title: "Professor",
          institution: "École des Mines de Saint-Étienne",
          role: "Examiner"
        },
        {
          name: "Laeticia Matignon",
          title: "Associate Professor",
          institution: "Université Claude Bernard Lyon",
          role: "Examiner"
        }
      ],
      guests: [
      {
        name: "Paul Theron",
        title: "PhD",
        institution: "AICA IWG"
      },
      {
        name: "Louis-Marie Traonouez",
        title: "PhD",
        institution: "Thales Land and Air Systems, BU IAS"
      }
    ]
    }
  }
}

const researchActivites = {
  show: true,
  heading: "Research Activites",
  data: [{
    title: "Research Theme",
    description: "On organizations for a Multi-Agent System to be deployed in an networked information system to ensure/ease Cyberdefense. Agents are to adapt to hardware and software constraints as well as variability in hosts while relying on defensive collective strategies."
  },
  {
    title: "Keywords",
    description: "Multi-Agent Reinforcement Learning, Multi-Agent Systems, Software Architecture, Cyberdefense"
  }]
}

const publications = {
  show: true,
  heading: "Publications",
  data: {
    national_conference: [
      {
        full_reference: "Soulé, J., Jamont, J.-P., Occello, M., Théron, P., & Traonouez, L.-M. De l’Organisation des Systèmes Multi-Agents de Cyberdefense. RESSI 2023.",
        url: "https://ressi2023.sciencesconf.org/450961/document"
      },
      {
        full_reference: "Soulé, J., Jamont, J.-P., Occello, M., Théron, P., & Traonouez, L.-M. De l’Organisation des Systèmes Multi-Agents de Cyberdefense. RJCIA 2023.",
        url: "https://ut3-toulouseinp.hal.science/hal-04565426/document#page=97"
      },
      {
        full_reference: "Soulé, J., Jamont, J.-P., Occello, M., Théron, P., & Traonouez, L.-M. De l’Organisation des Systèmes Multi-Agents de Cyberdefense. JFSMA 2023.",
        url: "https://hal.science/hal-04557739/document#page=55"
      },
      {
        full_reference: "Soulé, J., Jamont, J.-P., Occello, M., Théron, P., Traonouez, L.-M. Un Outil pour la Conception de SMA par Apprentissage par Renforcement et Modélisation Organisationnelle. JFSMA 2024.",
        url: "https://hal.science/JFSMA/hal-04840721v1"
      },
      {
        full_reference: "Soulé, J., Jamont, J.-P., Occello, M., Théron, P., Traonouez, L.-M. Une Approche basée sur l'Apprentissage par Renforcement pour l'Ingénierie Organisationelle d'un SMA. JFSMA 2024.",
        url: "https://hal.science/JFSMA/hal-04840696v1"
      },
      {
        full_reference: "Soulé, J., Jamont, J.-P., Occello, M., Théron, P., & Traonouez, L.-M. Une approche organisationnelle pour améliorer l’explicabilité et le contrôle dans l’apprentissage par renforcement Multi-agent. JFSMA 2025. (Best paper award)",
        url: "https://www.cepadues.com/nos-articles/1148/"
      }
    ],
    international_conference: [
      {
        full_reference: "Soulé, J., Jamont, J.-P., Occello, M., Théron, P., & Traonouez, L.-M. Towards a Multi-Agent Simulation of Cyber-attackers and Cyber-defenders Battles. IEEE SMC 2023.",
        url: "https://ieeexplore.ieee.org/abstract/document/10394564"
      },
      {
        full_reference: "Soulé, J., Jamont, J.-P., Occello, M., Théron, P., Traonouez, L.-M. A MARL-based Approach for Easing MAS Organization Engineering. AIAI 2024.",
        url: "https://link.springer.com/chapter/10.1007/978-3-031-63223-5_24"
      },
      {
        full_reference: "J. Soule, J.-P. Jamont, M. Occello, L.-M. Traonouez, and P. Théron. An organizationally-oriented approach to enhancing explainability and control in multi-agent reinforcement learning. Proc. of the 24th Int. Conf. on Autonomous Agents and Multiagent Systems (AAMAS), 2025.",
        url: "https://arxiv.org/abs/2503.23615"
      },
      {
        full_reference: "J. Soule, J.-P. Jamont, M. Occello, L.-M. Traonouez, and P. Théron. Streamlining Resilient Kubernetes Autoscaling with Multi-Agent Systems via an Automated Online Design Framework. Proceedings of the 18th IEEE International Conference on Cloud Computing (CLOUD), Helsinki, Finland, July 2025.",
        url: "https://arxiv.org/abs/2505.21559"
      }
    ],
    national_journal: [],
    international_journal: [],
    national_workshop: [],
    international_workshop: []
  }
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, researchActivites, defense, publications };
