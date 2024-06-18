import Header from '/src/components/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<span>
								JavaScript, TypeScript, React, React Router, Redux, Redux toolkit, RTK Query,
								HTML, CSS, BootStrap, MaterialUI
							</span>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<span>NodeJS, ExpressJS, NestJS, PassportJS, MongoDB, Redis, Java</span>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Инструментарий</h2>
							<span>Docker, Webpack, Vite, ESLint, Jest, Babel, Npm, Yarn, Git, WebStorm, VSCode, Postman, CodePen, Figma, Adobe Photoshop</span>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;