import { JSX } from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import { FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import {
	SiDjango,
	SiExpress,
	SiFastapi,
	SiGooglegemini,
	SiMysql,
	SiNestjs,
	SiPandas,
	SiPostgresql,
	SiPython,
	SiStyledcomponents,
	SiTailwindcss,
} from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle2 } from '../components/section-title.component 2';

import '../styles/projects-section.css';

const projects = [
	{
		slug: 'orbis-life-simulator',
		title: 'Orbis: Life Simulator',
		subtitle: 'Plataforma de simulação com IA baseada em regras',
		description:
			'Projeto universitário de simulação em RPG 2D com agentes autônomos controlados por regras e árvores de comportamento, focado na análise de grandes volumes de eventos gerados pela simulação.',
		features: [
			'Simulação em tempo real de agentes em mundo 2D',
			'IA baseada em regras e árvores de comportamento',
			'Comunicação em tempo real via WebSockets',
			'Painel analítico com gráficos e heatmaps',
		],
		techs: {
			backend: ['Python', 'FastAPI', 'WebSockets'],
			frontend: ['React', 'Styled-components'],
			database: ['MongoDB'],
			data: ['Pandas'],
			ai: ['Google Gemini'],
		},
		role: [
			'Arquitetura full stack',
			'Implementação da simulação no backend',
			'Interface da simulação e painel analítico',
		],
		repositories: {
			frontend: 'https://github.com/Orbis-Life-Simulator/orbis-frontend',
			backend: 'https://github.com/Orbis-Life-Simulator/orbis-backend',
		},
		link: '',
	},
	{
		slug: 'codequiz',
		title: 'CodeQuiz',
		subtitle: 'Plataforma de perguntas sobre Python',
		description:
			'Sistema full stack de perguntas de múltipla escolha voltado para iniciantes em Python, com controle de questões, respostas e estrutura preparada para expansão.',
		features: [
			'Listagem de perguntas',
			'Registro e validação de respostas',
			'Integração via API REST',
		],
		techs: {
			frontend: ['React', 'Styled-components'],
			backend: ['Node.js'],
			database: ['MongoDB'],
		},
		role: [
			'Modelagem de dados',
			'Criação das rotas e regras de negócio',
			'Integração completa entre front-end e API',
		],
		repositories: {
			frontend: 'https://github.com/CodeQuiz-PMI/front',
			backend: 'https://github.com/CodeQuiz-PMI/back-no-sql',
		},
		link: '',
	},
	{
		slug: 'termo-game',
		title: 'Termo Game',
		subtitle: 'Jogo de palavras com ranking e autenticação',
		description:
			'Jogo web inspirado no modelo de termo, desenvolvido como aplicação full stack com foco em API, autenticação e persistência de partidas.',
		features: [
			'Validação das tentativas no servidor',
			'Sistema de autenticação de usuários',
			'Persistência de partidas e resultados',
		],
		techs: {
			backend: ['NestJS'],
			frontend: ['Next.js', 'Tailwind CSS'],
			database: ['MongoDB'],
		},
		role: [
			'Desenvolvimento da API',
			'Implementação da lógica do jogo no backend',
			'Integração entre frontend e backend',
		],
		repositories: {
			frontend: 'https://github.com/DiegoAndreLeffa/gametermo-front',
			backend: 'https://github.com/DiegoAndreLeffa/gametermo-api',
		},
		link: 'https://gametermo-front.vercel.app/',
	},
	{
		slug: 'loltracker',
		title: 'LoL Tracker',
		subtitle: 'Aplicação de análise de partidas de League of Legends com IA',
		description:
			'Projeto de SaaS de análise de partidas de League of Legends API da Riot para encontrar o seu perfiu buscando suas partidas e gerando insights para voce melhoara em suas partidas, com integração do Gemini para analises mais detalhadas.',
		features: [
			'Busca de partidas via API da Riot',
			'Geração de insights personalizados usando Google Gemini',
			'Interface intuitiva para visualização de análises',
			'Sistema de autenticação e gerenciamento de usuários',
			'Sistema gameficado de evolução baseado em desempenho nas partidas',
		],
		techs: {
			backend: ['NestJS'],
			frontend: ['Next.js'],
			database: ['MongoDB'],
		},
		role: [
			'Desenvolvimento da API',
			'Implementação da lógica das analises no backend',
			'Integração entre frontend e backend',
			'Implementação da integração com a API da Riot e Gemini',
		],
		repositories: {
			frontend: 'https://github.com/DiegoAndreLeffa/Tracker-front',
			backend: 'https://github.com/DiegoAndreLeffa/Tracker-back',
		},
		link: '',
	},
];

export const ProjectsSection = () => {
	const techIconMap: Record<string, { icon: JSX.Element; color: string }> = {
		Python: {
			icon: <SiPython color='rgb(238,255,0)' />,
			color: 'rgba(227,252,86,0.5)',
		},
		React: {
			icon: <FaReact color='rgb(97,219,251)' />,
			color: 'rgba(97,219,251,0.6)',
		},
		'Styled-components': {
			icon: <SiStyledcomponents color='rgb(0,127,255)' />,
			color: 'rgba(0,127,255,0.6)',
		},
		'Node.js': {
			icon: <FaNodeJs color='rgb(104,160,99)' />,
			color: 'rgba(104,160,99,0.6)',
		},
		MongoDB: {
			icon: <DiMongodb color='rgb(0,237,100)' />,
			color: 'rgba(0,237,100,0.6)',
		},
		Django: {
			icon: <SiDjango color='rgb(255,0,0)' />,
			color: 'rgba(255,0,0,0.4)',
		},
		Express: {
			icon: <SiExpress color='white' />,
			color: 'rgba(255,255,255,0.4)',
		},
		MySQL: {
			icon: <SiMysql color='rgb(0,122,158)' />,
			color: 'rgba(0,122,158,0.6)',
		},
		PostgreSQL: {
			icon: <SiPostgresql color='rgb(0,122,158)' />,
			color: 'rgba(0,122,158,0.6)',
		},
		TypeScript: {
			icon: <BiLogoTypescript color='rgb(0,122,204)' />,
			color: 'rgba(0,122,204,0.6)',
		},
		Bootstrap: {
			icon: <FaBootstrap color='rgb(125,17,248)' />,
			color: 'rgba(125,17,248,0.6)',
		},
		FastAPI: {
			icon: <SiFastapi color='white' />,
			color: 'rgba(255,255,255,0.25)',
		},
		WebSockets: {
			icon: <FaNodeJs color='white' />, // Se quiser, mude para um ícone de rede/socket
			color: 'rgba(255,255,255,0.25)',
		},
		Pandas: {
			icon: <SiPandas color='white' />,
			color: 'rgba(255,255,255,0.25)',
		},
		'Google Gemini': {
			icon: <SiGooglegemini color='white' />,
			color: 'rgba(255,255,255,0.25)',
		},
		NestJS: {
			icon: <SiNestjs color='white' />,
			color: 'rgba(255,255,255,0.25)',
		},
		'Next.js': {
			icon: <RiNextjsFill color='white' />,
			color: 'rgba(97,219,251,0.25)',
		},
		'Tailwind CSS': {
			icon: <SiTailwindcss color='rgb(56,189,248)' />,
			color: 'rgba(56,189,248,0.25)',
		},
	};

	return (
		<section
			className='projects-section'
			id='projects'
		>
			<div className='projects-title'>
				<SectionTitle2
					title='Projetos'
					subTitle='PRINCIPAIS'
				/>
			</div>

			<div className='projects-list'>
				{projects.map((project) => (
					<article
						key={project.slug}
						className='project-card'
					>
						<div className='project-card-content'>
							<header className='project-header'>
								<div className='project-title-wrapper'>
									<h3>{project.title}</h3>
									<span>{project.subtitle}</span>
								</div>
								{project.link && (
									<a
										href={project.link}
										target='_blank'
										rel='noreferrer'
										className='live-link-btn'
									>
										Acessar Projeto
									</a>
								)}
							</header>

							<p className='project-description'>{project.description}</p>

							<div className='project-details'>
								<div className='detail-column'>
									<h4>Funcionalidades</h4>
									<ul>
										{project.features.map((feature, idx) => (
											<li key={idx}>{feature}</li>
										))}
									</ul>
								</div>
								<div className='detail-column'>
									<h4>Meu Papel</h4>
									<ul>
										{project.role.map((role, idx) => (
											<li key={idx}>{role}</li>
										))}
									</ul>
								</div>
							</div>

							<div className='project-techs'>
								<h4>Tecnologias</h4>
								<div className='project-tech-row'>
									{Object.values(project.techs)
										.flat()
										.map((tech, i) => {
											const techData = techIconMap[tech];
											return (
												<GlowBox
													key={i}
													title={tech}
													icon={techData?.icon}
													color={techData?.color ?? 'rgba(255,255,255,0.25)'}
												/>
											);
										})}
								</div>
							</div>
						</div>

						<footer className='project-links'>
							<a
								href={project.repositories.frontend}
								target='_blank'
								rel='noreferrer'
								className='repo-link'
							>
								{`< Frontend />`}
							</a>
							<a
								href={project.repositories.backend}
								target='_blank'
								rel='noreferrer'
								className='repo-link'
							>
								{`< Backend />`}
							</a>
						</footer>
					</article>
				))}
			</div>
		</section>
	);
};
