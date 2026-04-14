import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import { FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import {
	SiDjango,
	SiExpress,
	SiMysql,
	SiPostgresql,
	SiPython,
	SiStyledcomponents,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

import { GlowBox } from '../components/glow-box';
import { SectionTitle2 } from '../components/section-title.component 2';

const techs = [
	{
		heading: 'Stack Principal',
		items: [
			{
				title: 'Python',
				icon: <SiPython color='rgb(238, 255, 0)' />,
				color: 'rgba(227, 252, 86, 0.53)',
			},
			{
				title: 'React JS',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgb(97, 219, 251, 0.6)',
			},
			{
				title: 'Node JS',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgb(104, 160, 99)',
			},
			{
				title: 'TypeScript',
				icon: <BiLogoTypescript color='rgb(0, 122, 204)' />,
				color: 'rgba(0, 122, 204, 0.6)',
			},
			{
				title: 'Django',
				icon: <SiDjango color='rgb(255, 0, 0)' />,
				color: 'rgba(250, 62, 62, 0.4)',
			},
			{
				title: 'Express JS',
				icon: <SiExpress color='rgba(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'C#',
				icon: <TbBrandCSharp color='rgba(29, 157, 187)' />,
				color: 'rgba(29,157,187, 0.6)',
			},
		],
	},
	{
		heading: 'UI & Estilização',
		items: [
			{
				title: 'Styled Components',
				icon: <SiStyledcomponents color='rgb(0, 127, 255)' />,
				color: 'rgb(0, 127, 255, 0.6)',
			},
			{
				title: 'Bootstrap',
				icon: <FaBootstrap color='rgb(125, 17, 248)' />,
				color: 'rgb(125, 17, 248, 0.75)',
			},
			// Optionally add ShadCn here
		],
	},
	{
		heading: 'Bancos de Dados',
		items: [
			{
				title: 'PostgreSQL',
				icon: <SiPostgresql color='rgb(0, 122, 158)' />,
				color: 'rgb(0, 122, 158, 0.75)',
			},
			{
				title: 'MongoDB',
				icon: <DiMongodb color='rgb(0, 237, 100)' />,
				color: 'rgb(0, 237, 100, 0.7)',
			},
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgb(0, 122, 158, 0.75)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle2
					title='Tecnologias'
					subTitle='STACK'
				/>
			</div>
		</section>
	);
};
