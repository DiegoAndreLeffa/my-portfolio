import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experiência',
		items: [
			{
				title: 'Desenvolvedor Full Stack',
				place: 'Projetos Acadêmicos e Pessoais',
				timePeriod: '2021 - Atual',
				description: (
					<ul>
						<li>
							Desenvolvimento de aplicações web e mobile utilizando tecnologias
							como <strong>React</strong>, <strong>Node.js</strong> e{' '}
							<strong>React Native</strong>.
						</li>
						<li>
							Criação de APIs REST, integração com bancos de dados e
							implementação de regras de negócio.
						</li>
						<li>
							Experiência com projetos práticos voltados para estudo, portfólio
							e resolução de problemas reais.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Formação Complementar',
		items: [
			{
				title: 'Desenvolvimento Full Stack',
				place: 'Cursos Kenzie Academy Brasil',
				timePeriod: '2021 - 2023',
				description: (
					<ul>
						<li>
							Estudos focados em desenvolvimento front-end e back-end,
							abrangendo boas práticas, arquitetura e versionamento de código.
						</li>
						<li>
							Aplicação prática dos conhecimentos em projetos próprios e
							colaborativos.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Formação Acadêmica',
		items: [
			{
				title: 'Análise e Desenvolvimento de Sistemas',
				place: 'Ensino Superior',
				timePeriod: 'Concluido em 2025',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<SectionTitle
				title='Sobre'
				subTitle='MIM'
			/>
			<div>
				<div
					className='intro'
					style={{ textAlign: 'justify' }}
				>
					<p style={{ marginTop: '20px' }}>
						Olá, eu sou <strong>Diego</strong>, Desenvolvedor Full Stack com
						atuação voltada principalmente para backend.
					</p>

					<p>
						Atuo no desenvolvimento de aplicações web completas, desde a
						construção de interfaces até a criação de APIs e regras de negócio.
					</p>

					<p>
						Participo da implementação de funcionalidades de ponta a ponta,
						incluindo desenvolvimento de APIs REST, autenticação, modelagem de
						dados, integração entre sistemas e organização de arquitetura de
						código, sempre buscando soluções eficientes, escaláveis e bem
						estruturadas.
					</p>

					<p>
						Tenho como objetivo evoluir tecnicamente e consolidar minha carreira
						como desenvolvedor, contribuindo na construção de sistemas robustos
						e aplicáveis no mundo real.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
