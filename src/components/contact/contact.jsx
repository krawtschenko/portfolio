import {useState} from 'react';
import {
	FaRegAddressBook,
	FaRegEnvelope,
	FaRegUser,
	FaRegMap,
} from 'react-icons/fa';
import shapeOne from '../../assets/shape-1.png';
import './contact.scss';

export const Contact = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setForm(prev => ({...prev, [name]: value}));
	};

	const contactCards = [
		{icon: <FaRegMap/>, title: 'Address', data: 'Poznań, Poland'},
		{icon: <FaRegUser/>, title: 'Freelance', data: 'Available Right Now'},
		{icon: <FaRegEnvelope/>, title: 'Email', data: 'eugenykravchenko@icloud.com'},
		{icon: <FaRegAddressBook/>, title: 'Phone', data: '+48 730 946 832'},
	];

	return (
			<section className="contact section" id="contact">
				<header className="contact__header">
					<h2 className="section__title text-cs">Contact Me</h2>
					<p className="section__subtitle">
						Let's <span>Talk About Ideas</span>
					</p>
				</header>

				<div className="contact__container container grid">
					<div className="contact__content">
						{contactCards.map((card, index) => (
								<div className="contact__card" key={index}>
									<span className="contact__card-icon">{card.icon}</span>
									<h3 className="contact__card-title">{card.title}</h3>
									<p className="contact__card-data">{card.data}</p>
								</div>
						))}
					</div>

					<form className="contact__form" onSubmit={(e) => e.preventDefault()}>
						<div className="contact__form-group grid">
							<div className="contact__form-div">
								<label className="contact__form-tag text-cs">
									Your Full Name <b>*</b>
								</label>
								<input
										type="text"
										name="name"
										onChange={handleChange}
										value={form.name}
										className="contact__form-input"
								/>
							</div>

							<div className="contact__form-div">
								<label className="contact__form-tag text-cs">
									Your Email Address <b>*</b>
								</label>
								<input
										type="email"
										name="email"
										onChange={handleChange}
										value={form.email}
										className="contact__form-input"
								/>
							</div>
						</div>

						<div className="contact__form-div">
							<label className="contact__form-tag text-cs">
								Your Subject <b>*</b>
							</label>
							<input
									type="text"
									name="subject"
									onChange={handleChange}
									value={form.subject}
									className="contact__form-input"
							/>
						</div>

						<div className="contact__form-div contact__form-area">
							<label className="contact__form-tag text-cs">
								Your Message <b>*</b>
							</label>
							<textarea
									name="message"
									onChange={handleChange}
									value={form.message}
									className="contact__form-input"
							/>
						</div>

						<div className="contact__submit">
							<p>* Accept the terms and conditions.</p>
							<button type="submit" className="btn contact__btn text-cs">
								Send Message
							</button>
						</div>
					</form>
				</div>

				<div className="section__deco deco__left">
					<img src={shapeOne} alt="shape decoration" className="shape"/>
				</div>

				<div className="section__bg-wrapper">
					<span className="bg__title">Contact Me</span>
				</div>
			</section>
	);
};