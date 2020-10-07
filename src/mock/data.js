import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
	title: 'Sam McEwan | Portfolio',
	lang: 'en',
	description: 'Web developer & graphic designer based in Edinburgh'
};

// HERO DATA
export const heroData = {
	title: '',
	name: 'Sam McEwan',
	subtitle: 'Web Developer + Graphic Designer',
	cta: 'Know More',
	degree: '(BDES)',
	location: 'Based in Edinburgh'
};

// ABOUT DATA
export const aboutData = {
	img: 'profile2.jpg',
	paragraphOne: 'I am a creative and multi-disciplinary designer and web developer based in Edinburgh.',
	paragraphTwo: 'Currently learning React and improving my Javascript skills.',
	paragraphThree: 'Experience in web hosting and graphic design.',
	resume: ''
};

// PROJECTS DATA
export const projectsData = [
	{
		id: nanoid(),
		img: 'crinkle.jpg',
		title: 'Crinkle Clothing',
		info: 'Work-in-progress e-commerce app made with React and Firebase.',
		info2:
			'Features a checkout, payments with Stripe, authentication and user accounts with email or Google sign in.',
		info3: 'Not yet optimised for mobile devices.',
		url: 'https://crinkle.herokuapp.com/',
		repo: 'https://github.com/samlmcewan/react-ecommerce-app'
	},
	{
		id: nanoid(),
		img: 'pistachio.jpg',
		title: 'Pistachio Graphics',
		info: 'Logo and website creation for Edinburgh-based web and graphics company.',
		info2: 'Built with HTML and CSS using a bootstrap template.',
		info3: 'Features custom SVG animations.',
		url: 'https://pistachio.graphics/',
		repo: ''
	},
	{
		id: nanoid(),
		img: 'vapedrop.jpg',
		title: 'Vapedrop',
		info: 'Redesign of an e-commerce site for a vape shop based in Leith.  ',
		info2: `As the old site used Wordpress linked to the shop's POS, I kept most of the basic functionality.`,
		info3:
			'I implemented new plugins for discount rules and sliders and rebranded the site with a new Wordpress theme, layout and graphics.',
		url: 'https://vapedropuk.com/',
		repo: ''
	},
	{
		id: nanoid(),
		img: 'seahorses.jpg',
		title: 'Ailsa And The Seahorses',
		info: 'Website showcasing dream-pop artist Ailsa And The Seahorses.',
		info2: 'Built with HTML and CSS using a bootstrap template.',
		info3: 'PHP used for navbar. Blog/events PHP functionality was out-sourced.',
		url: 'https://ailsaandtheseahorses.com/',
		repo: ''
	}
];

// CONTACT DATA
export const contactData = {
	cta: 'Would you like to work with me?',
	btn: `Let's Talk`,
	email: 'samlmcewan@gmail.com'
};

// FOOTER DATA
export const footerData = {
	networks: [
		{
			id: nanoid(),
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/sam-mcewan-521b46184/'
		},
		{
			id: nanoid(),
			name: 'github',
			url: 'https://github.com/samlmcewan/'
		}
	]
};

// Github start/fork buttons
export const githubButtons = {
	isEnabled: false // set to false to disable the GitHub stars/fork buttons
};
