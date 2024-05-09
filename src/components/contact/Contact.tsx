import style from "./contact.module.css";
import reusable from "common/styles/reusable.module.css";
import {FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap} from 'react-icons/fa'
import * as yup from "yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

interface Inputs {
	name: string
	email: string
	subject: string
	message: string
}

const schema = yup.object({
	name: yup.string().min(3).required(),
	email: yup.string().email().required(),
	subject: yup.string().min(3).required(),
	message: yup.string().min(5).max(200).required(),
});

export const Contact = () => {
	const {register, reset, handleSubmit, formState} = useForm<Inputs>({
		mode: "onBlur",
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data)
		reset()
	}

	return (
		<section className={`${style.contact} ${reusable.section}`} id='contact'>
			<h2 className={`${reusable.sectionTitle} ${reusable.text_cs}`}>Contact me</h2>
			<p className={reusable.sectionSubtitle}>
				Let's <span>Talk about ideas</span>
			</p>

			<div className={`${style.container} ${reusable.container} ${reusable.grid}`}>
				<div className={style.content}>
					<div className={style.card}>
						<span className={style.cardIcon}>
							<FaRegMap/>
						</span>
						<h3 className={style.cardTitle}>Address</h3>
						<p className={style.cardData}>Poznań, Poland</p>
					</div>

					<div className={style.card}>
						<span className={style.cardIcon}>
							<FaRegUser/>
						</span>
						<h3 className={style.cardTitle}>Freelance</h3>
						<p className={style.cardData}>Available right now</p>
					</div>

					<div className={style.card}>
						<span className={style.cardIcon}>
							<FaRegEnvelope/>
						</span>
						<h3 className={style.cardTitle}>Email</h3>
						<p className={style.cardData}>Eugenykravchenko@icloud.com</p>
					</div>

					<div className={style.card}>
						<span className={style.cardIcon}>
							<FaRegAddressBook/>
						</span>
						<h3 className={style.cardTitle}>Phone</h3>
						<p className={style.cardData}>+48 792 665 039</p>
					</div>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
					<div className={`${style.formGroup} ${reusable.grid}`}>
						<div className={style.formDiv}>
							<label className={`${style.formTag} ${reusable.text_cs}`}>Your full name <b>*</b></label>
							<input
								type="text"
								style={formState.errors.name ? {borderColor: '#d40000'} : {}}
								className={style.formInput} {...register('name')}/>
							{formState.errors.name && <span className={style.formError}>{formState.errors.name.message}</span>}
						</div>

						<div className={style.formDiv}>
							<label className={`${style.formTag} ${reusable.text_cs}`}>Your Email Address <b>*</b></label>
							<input
								type="email"
								style={formState.errors.email ? {borderColor: '#d40000'} : {}}
								className={style.formInput} {...register('email')}/>
							{formState.errors.email && <span className={style.formError}>{formState.errors.email.message}</span>}
						</div>
					</div>

					<div className={style.formDiv}>
						<label className={`${style.formTag} ${reusable.text_cs}`}>Your Subject <b>*</b></label>
						<input
							type="text"
							style={formState.errors.subject ? {borderColor: '#d40000'} : {}}
							className={style.formInput} {...register('subject')}/>
						{formState.errors.subject && <span className={style.formError}>{formState.errors.subject.message}</span>}
					</div>

					<div className={`${style.formDiv} ${style.formArea}`}>
						<label className={`${style.formTag} ${reusable.text_cs}`}>Your Message <b>*</b></label>
						<textarea
							style={formState.errors.message ? {borderColor: '#d40000'} : {}}
							className={style.formInput} {...register('message')}></textarea>
						{formState.errors.message && <span className={style.formError}>{formState.errors.message.message}</span>}
					</div>

					<div className={style.submit}>
						<p>* Accept the terms and conditions</p>
						<button type='submit' className={`${reusable.btn} ${reusable.text_cs}`}>Send Message</button>
					</div>
				</form>
			</div>
		</section>
	);
}