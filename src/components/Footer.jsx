import mail from '/src/assets/icons/mail.svg';
import telegram from '/src/assets/icons/telegram.svg';
import whatsapp from '/src/assets/icons/whatsapp.svg';
import gitHub from '/src/assets/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a target="_blank" rel="noreferrer" href="https://t.me/+79268969539">
								<img src={telegram} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a target="_blank" rel="noreferrer" href="https://wa.me/79268969539">
								<img src={whatsapp} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a target="_blank" rel="noreferrer" href="https://github.com/ViktorZigaZaga">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="mailto:bassa555@mail.ru">
								<img src={mail} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<span>© 2024 Виктор Бауэр | Изображения: <a target="_blank" rel="noreferrer" href='https://unsplash.com/'>Unsplash</a></span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;