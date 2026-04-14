import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<FloatingButton
				label='Sobre Mim'
				className='first'
				href='/#about-me'
			/>

			<p>Olá, eu sou</p>
			<TextHover
				text='DIEGO'
				className='name'
			/>
			<p>Desenvolvedor Full Stack</p>
			<p>Full Stack Developer</p>

			<FloatingButton
				label='Tecnologias'
				className='sec'
				href='/#tech-stack'
			/>
			<FloatingButton
				label='Projetos'
				className='sec sec-below'
				href='/#projects'
			/>

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/DiegoAndreLeffa'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				<GlowLink
					href='https://www.linkedin.com/in/diegoandreleffa/'
					color='rgb(0, 160, 220, 0.6)'
					icon={<FaLinkedinIn color='rgb(0, 160, 220)' />}
					aria-label='linkedin'
				/>
			</div>
		</div>
	);
};
