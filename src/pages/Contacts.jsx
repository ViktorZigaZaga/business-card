const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<span>Moscow (Balashikha), Russia</span>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<span>
							<a href="tel:+79268969539">+7(926)-896-95-39</a>
						</span>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<span>
							<a target="_blank" href="mailto:bassa555@mail.ru">
								bassa555@mail.ru
							</a>
						</span>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">GitHub</h2>
						<span>
							<a target="_blank" href="https://github.com/ViktorZigaZaga">
							https://github.com/ViktorZigaZaga
							</a>
						</span>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;