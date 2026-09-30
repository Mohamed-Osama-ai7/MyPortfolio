const mongoose = require('mongoose');

const projectRouter = require('./project');
const Project = projectRouter.Project;


// =========================
// MongoDB Connection
// =========================

const mongoURI =
  process.env.MONGO_URI ||
  'mongodb://localhost:27017/portfolio_db';


// =========================
// Portfolio Projects
// =========================

const projects = [

  {
    name: 'PhysioMentor',
    category: 'AI • Healthcare Education',
    year: '2026',
    description:
      'An AI-powered physiotherapy learning platform designed to help students understand clinical concepts, anatomy, rehabilitation topics, and physiotherapy knowledge through an interactive educational experience.',
    technologies: [
      'AI',
      'Machine Learning',
      'Physiotherapy Education',
      'Web Application'
    ],
    featured: true
  },

  {
    name: 'InvoiceGuard AI',
    category: 'AI • Machine Learning',
    year: '2026',
    description:
      'An intelligent invoice payment risk prediction and cash-flow protection system that helps identify late-payment risk, analyze customer behavior, and support receivables decisions.',
    technologies: [
      'Python',
      'Machine Learning',
      'NLP',
      'Streamlit',
      'FastAPI'
    ],
    githubUrl:
      'https://github.com/Mohamed-Osama-ai7/Inovice-Guard-ai',
    liveUrl:
      'https://inovice-guard-ai-17.streamlit.app/',
    featured: true
  },

  {
    name: 'PromiseGuard AI',
    category: 'AI • NLP',
    year: '2026',
    description:
      'An AI system focused on detecting future-action commitments in employee messages using Natural Language Processing and machine learning.',
    technologies: [
      'Python',
      'NLP',
      'Machine Learning',
      'LLM'
    ],
    githubUrl:
      'https://github.com/Mohamed-Osama-ai7/promise-guard'
  },

  {
    name: 'AUTO GEN',
    category: 'AI • Automation',
    year: '2026',
    description:
      'An AI-powered customer service and automation platform combining conversational AI, automation workflows, product discovery, and automated invoice delivery.',
    technologies: [
      'FastAPI',
      'n8n',
      'AI Studio',
      'Python'
    ]
  },

  {
    name: 'HEALIX Healthcare System',
    category: 'Healthcare • Software',
    year: '2025–2026',
    description:
      'A healthcare management system designed around clinic operations, patient management, digital booking, requirements analysis, and database architecture.',
    technologies: [
      'SQL',
      'Database Design',
      'System Analysis',
      'Architecture'
    ]
  },

  {
    name: 'Enterprise Customer Churn AI',
    category: 'AI • Data',
    year: '2026',
    description:
      'A machine learning project focused on predicting customer churn and exploring practical approaches to classification and customer retention analysis.',
    technologies: [
      'Python',
      'Machine Learning',
      'Classification'
    ],
    githubUrl:
      'https://github.com/Mohamed-Osama-ai7/enterprise-customer-churn-ai'
  },

  {
    name: 'NASA Space Apps Challenge',
    category: 'NASA • AI • Web',
    year: '2025',
    description:
      'A weather-focused AI project developed for NASA Space Apps, using weather data and machine learning concepts for rainfall prediction and analysis.',
    technologies: [
      'Python',
      'AI',
      'Machine Learning',
      'Weather Data',
      'Web Development'
    ]
  },

  {
    name: 'Zero Hour — First-Person Shooter',
    category: 'Game Development',
    year: '2026',
    description:
      'A first-person shooter game developed using Unity and C# as an ITI graduation project. The project focused on gameplay systems, combat mechanics, player interaction, physics, and first-person game development.',
    technologies: [
      'Unity',
      'C#',
      'FPS',
      'Game Logic',
      'Physics',
      'ITI Graduation Project'
    ]
  },

  {
    name: 'Firmware Manifest System',
    category: 'Systems',
    year: '2026',
    description:
      'A firmware manifest architecture focused on update verification, system integrity, reliability, and secure update workflows.',
    technologies: [
      'Firmware Architecture',
      'Security',
      'Update Verification'
    ]
  },

  {
    name: 'OS & Algorithm Scheduling Systems',
    category: 'C++ • Operating Systems',
    year: '2026',
    description:
      'Implemented operating-system scheduling algorithms and evaluated their behavior and performance using algorithmic optimization.',
    technologies: [
      'C++',
      'Operating Systems',
      'Scheduling',
      'Algorithms'
    ]
  },

  {
    name: 'Pizza Restaurant Database',
    category: 'Database',
    year: '2026',
    description:
      'A relational database system designed for restaurant operations, menu management, order processing, inventory, and structured data management.',
    technologies: [
      'SQL',
      'Database Design',
      'Relational Modeling'
    ]
  },

  {
    name: 'GPS Vehicle Tracker',
    category: 'IoT • Embedded Systems',
    year: '2025',
    description:
      'A hardware-software GPS tracking system designed for real-time location monitoring and embedded integration.',
    technologies: [
      'GPS',
      'Embedded Systems',
      'Real-Time Processing'
    ]
  },

  {
    name: 'Autonomous Robotics',
    category: 'Robotics',
    year: '2024–2025',
    description:
      'Autonomous robotics projects involving human-following, maze solving, sensor processing, navigation, and obstacle avoidance.',
    technologies: [
      'Robotics',
      'Embedded Systems',
      'Sensors',
      'Navigation'
    ]
  }

];


// =========================
// Seed Database
// =========================

async function seedDatabase() {

  try {

    await mongoose.connect(mongoURI);

    console.log('Connected to MongoDB');

    await Project.deleteMany({});

    console.log('Old projects removed');

    const insertedProjects =
      await Project.insertMany(projects);

    console.log(
      `${insertedProjects.length} projects inserted successfully`
    );

  } catch (error) {

    console.error(
      'Seed error:',
      error.message
    );

  } finally {

    await mongoose.disconnect();

    console.log('MongoDB connection closed');

  }
}


seedDatabase();