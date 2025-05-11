import {FaRegAddressBook, FaRegEnvelope, FaRegMap, FaRegUser} from 'react-icons/fa';
import shapeOne from '../../assets/shape-1.png';
import './contact.scss';
import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from "zod";

const schema = z.object({
	name: z.string().min(3, {message: 'Required'}).max(20),
	email: z.string().email(),
	subject: z.string().min(5, {message: 'Required'}).max(20),
	message: z.string().min(5, {message: 'Required'})
})

export const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset
	} = useForm({
		resolver: zodResolver(schema),
	})

	const onSubmit = async (data) => {
		try {
			const response = await fetch("https://formsubmit.co/eugenykravchenko@icloud.com", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(data),
			});
			if (response.ok) {
				alert("You successfully sent to the form!");
				reset();
			} else {
				alert("Something went wrong: " + response.status);
			}
		} catch (error) {
			alert("Error: " + error.message);
		}
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

					<form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
						<div className="contact__form-group grid">
							<div className="contact__form-div">
								<label className="contact__form-tag text-cs" htmlFor="name">
									Your Full Name <b>*</b>
								</label>
								<input
										type="text"
										name="name"
										id="name"
										autoComplete="name"
										{...register('name')}
										className={errors.name?.message ? "contact__form-input error" : 'contact__form-input'}
								/>
								{errors.name?.message && <span className='contact__form-error'>{errors.name?.message}</span>}
							</div>

							<div className="contact__form-div">
								<label className="contact__form-tag text-cs" htmlFor="email">
									Your Email Address <b>*</b>
								</label>
								<input
										type="email"
										name="email"
										id="email"
										autoComplete="email"
										{...register('email')}
										className={errors.email?.message ? "contact__form-input error" : 'contact__form-input'}
								/>
								{errors.email?.message && <span className='contact__form-error'>{errors.email?.message}</span>}
							</div>
						</div>

						<div className="contact__form-div">
							<label className="contact__form-tag text-cs" htmlFor="subject">
								Your Subject <b>*</b>
							</label>
							<input
									type="text"
									name="subject"
									id="subject"
									{...register('subject')}
									className={errors.subject?.message ? "contact__form-input error" : 'contact__form-input'}
							/>
							{errors.subject?.message && <span className='contact__form-error'>{errors.subject?.message}</span>}
						</div>

						<div className="contact__form-div contact__form-area">
							<label className="contact__form-tag text-cs" htmlFor="message">
								Your Message <b>*</b>
							</label>
							<textarea
									name="message"
									id="message"
									{...register('message')}
									className={errors.message?.message ? "contact__form-input error" : 'contact__form-input'}
							/>
							{errors.message?.message &&
									<span className='contact__form-error message'>{errors.message?.message}</span>}
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