import Project1 from '../assets/projects/project1.jpeg';
import Project2 from '../assets/projects/project2.jpg';
import Project3 from '../assets/projects/project3.jpeg';
import Project4 from '../assets/projects/project4.jpeg';
import Project5 from '../assets/projects/project5.jpg';
import Project6 from '../assets/projects/project6.jpg';

export const links = [{
	name: 'Home', path: 'home',
}, {
	name: 'Skills', path: 'skills',
}, {
	name: 'Works', path: 'work',
}, {
	name: 'Resume', path: 'resume',
}, {
	name: 'Contact', path: 'contact',
},];

export const skills = [{
	id: 1,
	name: 'HTML',
	percentage: 90,
	description: 'The standard markup language used for creating web pages, defining the structure of content on the web.',
}, {
	id: 2,
	name: 'CSS',
	percentage: 85,
	description: 'The style sheet language used for describing the presentation of a document written in HTML or XML, including layout, colors, and fonts.',
}, {
	id: 3,
	name: 'Sass',
	percentage: 80,
	description: 'A preprocessor for CSS that adds variables, nested styles, and other features to enhance styling capabilities.',
}, {
	id: 4,
	name: 'JavaScript',
	percentage: 90,
	description: 'The core programming language for web development, including DOM manipulation, asynchronous operations, and performance optimization.',
}, {
	id: 5,
	name: 'TypeScript',
	percentage: 85,
	description: 'A superset of JavaScript that adds static typing, improving development efficiency and code quality.',
}, {
	id: 6,
	name: 'React',
	percentage: 85,
	description: 'A library for building user interfaces, enabling the creation of efficient, complex applications with a component-based approach.',
}, {
	id: 7,
	name: 'Next.js',
	percentage: 75,
	description: 'A React framework for building server-rendered applications and static websites, with built-in static generation support.',
}, {
	id: 8,
	name: 'Redux & RTK Query',
	percentage: 75,
	description: 'A library for managing application state and integrating with APIs, allowing efficient data fetching, caching, and updating.',
}, {
	id: 9,
	name: 'Git',
	percentage: 85,
	description: 'A distributed version control system for tracking changes in source code during software development, enabling collaboration.',
},];

export const projects = [{
	id: 1,
	img: Project1,
	category: 'Branding',
	title: 'Zorro',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
}, {
	id: 2,
	img: Project2,
	category: 'UI UX Design',
	title: 'Gooir',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
}, {
	id: 3,
	img: Project3,
	category: 'Development',
	title: 'Explore',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
}, {
	id: 4,
	img: Project4,
	category: 'Photography',
	title: 'Mozar',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
}, {
	id: 5,
	img: Project5,
	category: 'Development',
	title: 'Stay Fit',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
}, {
	id: 6,
	img: Project6,
	category: 'Branding',
	title: 'Kana',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
},];

export const cv = [{
	id: 1,
	title: 'IT-Incubator Courses',
	subtitle: 'Frontend Programming',
	date: '2022 - 2024',
	description: 'Intensive front-end development course focused on practical skills in HTML, CSS, JavaScript, TypeScript, React, Redux, and REST APIs. Includes project-based learning, code reviews, and job preparation',
	category: 'education',
},

	{
		id: 2,
		title: 'Sumy State University',
		subtitle: 'Master of Computer Science',
		date: '2013 - 2017',
		description: 'Relevant coursework in System Design, Software Engineering, and Database Development',
		category: 'education',
	},

	{
		id: 4,
		title: 'Frontend Developer',
		subtitle: '',
		date: '',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		category: 'experience',
	},

	{
		id: 5,
		title: 'IT Support Specialist',
		subtitle: 'Pro-Info',
		date: '2021 - Present',
		description: 'System administration: managing domains and services, ensuring data archiving and system continuity, administering Microsoft 365 and Active Directory\n' +
				'User support: installing software and hardware components, troubleshooting application and hardware issues\n' +
				'Hardware and software maintenance: setting up workstations, assembling components, cleaning equipment, performing system upgrades\n' +
				'Handling requests through the Helpdesk system: registering, tracking, and resolving user tickets',
		category: 'experience',
	},
];

