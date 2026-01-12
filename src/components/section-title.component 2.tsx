type TSectionTitleProps = {
	title: string;
	subTitle?: string;
};
export const SectionTitle2 = ({ title, subTitle }: TSectionTitleProps) => {
	return (
		<div className='title'>
			<p
				style={{
					fontSize: '5rem',
					color: 'white',
					marginBottom: '1.875rem',
					letterSpacing: '0.1rem',
					textTransform: 'uppercase',
					fontFamily: "'Fugaz One', sans-serif",
				}}
			>
				{title}
			</p>
			{subTitle && <p className='text2'>{subTitle}</p>}
		</div>
	);
};
