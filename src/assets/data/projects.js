import { v4 as uuidv4 } from 'uuid'

const projects = [
	{
		id: uuidv4(),
		title: 'Phoneflow',
		statsEN: '7500+ users',
		statsFR: '7500+ utilisateurs',
		descEN:
			'A mobile app to manage your CMS or e-commerce webflow site from anywhere. I worked on this app during my internship at ComDesLezards and was in charge of developping the e-commerce features, implementing subscriptions for the new business model and optimizing the app.',
		descFR: `Application mobile pour gérer son site CMS ou e-commerce webflow. J'ai travaillé sur cette application pendant mon stage chez ComDesLezards où j'étais chargée de développer les fonctionnalités e-commerce, d'implémenter le système d'abonnements pour le nouveau business model and d'optimiser l'application. `,
		tech: 'Tech: React Native, Firebase, Revenue Cat',
		link: 'https://apps.apple.com/us/app/phoneflow-webflow-cms-client/id1528892928?platform=iphone',
		img1: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1656496549/samples/portfolio/phoneflow/Phoneflow-screens_obuixb.png',
	},
	{
		id: uuidv4(),
		title: 'VeloBleu Nice',
		statsEN: '4000+ unique users daily',
		statsFR: '4000+ utilisateurs uniques par jour',
		descEN:
			'The essential assistant for cycling in the city of Nice. I worked on this app during my internship at ComDesLezards and was in charge of getting and displaying data on the map such as bicycle paths, water points and free floating electric bikes.',
		descFR: `L'assistant mobile pour le vélo à Nice. J'ai travaillé sur cette application pendant mon stage chez ComDesLezards où j'étais en charge de la récupération et du traitement des données permettant l'affichage sur la carte des e-vélo bleus (vélos électriques en free floating), des pistes cyclables et des points d'eau.`,
		tech: 'Tech: React Native, Typescript, Firebase',
		link: 'https://apps.apple.com/app/id1566088958',
		img1: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1656499019/samples/portfolio/velobleu/Velobleu-portfolio_szqooq.png',
	},
	{
		id: uuidv4(),
		title: 'Studio S',
		descEN: `Corporate website for a video studio based in Paris. The company had a Wordpress website that I redesigned and rebuilt using modern technologies.`,
		descFR: `Site vitrine pour un studio vidéo spécialisé dans les vidéos d'entreprises situé à Paris. Lors de cette mission j'ai été en charge de la refonte du site Wordpress vers un site plus moderne et plus attirant.`,
		tech: `Tech: React, GatsbyJS, GraphQL`,
		link: `https://mystifying-goodall-afaf01.netlify.app/`,
		img1: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1645203857/samples/portfolio/studio-s/home_xeejri.png',
	},
	{
		id: uuidv4(),
		title: "Vite J'ai Faim",
		descEN: `Mobile application to order a surprise meal! I imagined this app and built it as a group project for my graduation`,
		descFR: `Application mobile pour commander un repas surprise ! J'ai proposé cette appli comme projet de fin de formation et nous l'avons développé en équipe`,
		tech: `Front-end: React Native<br>
        Back-end: Node.js, MongoDB`,
		link: `https://www.youtube.com/watch?v=oxXcCU_cMTU&ab_channel=Warion`,
		img1: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1638398458/samples/portfolio/vjf/VJF-display_netal5.png',
	},
	{
		id: uuidv4(),
		title: '50 Days 50 Projects',
		descEN: `50 simple javascript projects I coded to practice my front-end skills.`,
		descFR: `50 projets simples en javascript que j'ai codé pour m'entrainer au développement front-end.`,
		tech: `Front-end: HTML, CSS, Vanilla JS`,
		link: `http://neverwithoutchocolate.com/5050/`,
		img1: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1638181313/samples/portfolio/5050/fifty1_sadnyg.png',
		img2: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1638181313/samples/portfolio/5050/fifty2_hmxv4h.png',
	},
	{
		id: uuidv4(),
		title: 'TicketTac',
		descEN: `Website to buy tickets to space.
        I made this website as part of La Capsule’s hackathon in one day.`,
		descFR: `Site internet pour acheter des tickets de train pour l'espace. J'ai créé ce site dans le cadre du Hackathon de La Capsule`,
		tech: `Front-end: EJS<br>
        Back-end: Node.js, MongoDB`,
		link: `http://spacecapsule.herokuapp.com/`,
		img1: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1638181314/samples/portfolio/tickettac/tiktak1_g07y02.png',
		img2: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1638181313/samples/portfolio/tickettac/tiktak3_ebl72y.png',
	},
	{
		id: uuidv4(),
		title: 'MyMoviz',
		descEN: `Web application to get the latest movie releases and add them to a wishlist. 
        This was my first React project.`,
		descFR: `Application web pour accéder aux films les plus populaires et les ajouter à une liste d'envies.
        Il s'agit de mon premier projet React.`,
		tech: `Front-end: React<br>
        Back-end: Node.js, MongoDB`,
		link: '',
		img1: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1638181314/samples/portfolio/mymoviz/mymoviz_uzkk7g.png',
	},
	{
		id: uuidv4(),
		title: 'MorningNews',
		descEN: `Web application that displays current news in a selected language and allows the user to save them in a wishlist.`,
		descFR: `Application web qui affiche les news actualisées selon la langue sélectionnée et permet de les sauvegarder dans une wishlist.`,
		tech: `Front-end: React, Redux<br>
        Back-end: Node.js, MongoDB`,
		link: `https://github.com/Wawamama/morningNewsV2`,
		img1: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1638181314/samples/portfolio/morningNews/morning3_gykfpn.png',
		img2: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1638181313/samples/portfolio/morningNews/morning1_ul0gfg.png',
	},

	{
		id: uuidv4(),
		title: 'BlackBoard',
		descEN: `Dashboard for a fictionnal scooter shop. Allows management of orders and client messages.`,
		descFR: `Tableau de bord pour un magasin de trotinettes (fictif). Permet de suivre les commandes et les messages des clients`,
		tech: `Front-end: EJS<br>
        Back-end: Node.js, MongoDB`,
		link: `https://github.com/Wawamama/blackboard/tree/master`,
		img1: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1638181314/samples/portfolio/blackboard/blackboard2_l08izs.png',
		img2: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1638181314/samples/portfolio/blackboard/blackboard1_qgydvt.png',
	},

	{
		id: uuidv4(),
		title: 'FaceUp',
		descEN: `Mobile application to take pictures and save them in a gallery. The AI recognizes faces and generates gender and age tags automatically.`,
		descFR: `Application mobile qui permet de prendre une photo et de les présenter sous forme de galerie. Une IA reconnait les visages et génère des tags automatiquement`,
		tech: `Front-end: EJS<br>
        Back-end: Node.js, MongoDB`,
		link: `https://github.com/Wawamama/faceupApp`,
		img1: 'https://res.cloudinary.com/daxjdptqt/image/upload/v1638181314/samples/portfolio/faceup/faceup_yjpmzc.png',
	},
]

export default projects
