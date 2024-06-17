const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<img
					src={'https://raw.githubusercontent.com/ViktorZigaZaga/business-card/main/src/assets/photo.jpg'}
					alt="Photo"
					width={200}
				/>
				<h1 className="header__title">
					<strong>
						Hi, my name is <i>Viktor</i>
					</strong>
					<br />
					a frontend developer
				</h1>
				<div className="header__text">
					<span>with passion for learning and creating.</span>
				</div>
				<a target="_blank" rel="noreferrer" href="https://balashikha.hh.ru/resume/9717c642ff0b4b06d60039ed1f786a7a583839" className="btn">
					Open resume
				</a>
			</div>
		</header>
	);
}

export default Header;