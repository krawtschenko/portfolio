import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { FaRegAddressBook, FaRegEnvelope, FaRegMap, FaRegUser } from 'react-icons/fa'
import * as yup from 'yup'

import style from './contact.module.scss'

interface Inputs {
  email: string
  message: string
  name: string
  subject: string
}

const schema = yup.object({
  email: yup.string().email().required(),
  message: yup.string().min(5).max(200).required(),
  name: yup.string().min(3).required(),
  subject: yup.string().min(3).required(),
})

export const Contact = () => {
  const { formState, handleSubmit, register, reset } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<Inputs> = data => {
    // eslint-disable-next-line no-console
    console.log(data)
    reset()
  }

  return (
    <section className={clsx(style.contact, 'section')} id={'contact'}>
      <h2 className={clsx('sectionTitle', 'text_cs')}>Contact me</h2>
      <p className={'sectionSubtitle'}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's <span>Talk about ideas</span>
      </p>

      <div className={clsx(style.container, 'container', 'grid')}>
        <div className={style.content}>
          <div className={style.card}>
            <span className={style.cardIcon}>
              <FaRegMap />
            </span>
            <h3 className={style.cardTitle}>Address</h3>
            <p>Poznań, Poland</p>
          </div>

          <div className={style.card}>
            <span className={style.cardIcon}>
              <FaRegUser />
            </span>
            <h3 className={style.cardTitle}>Freelance</h3>
            <p className={style.cardData}>Available right now</p>
          </div>

          <div className={style.card}>
            <span className={style.cardIcon}>
              <FaRegEnvelope />
            </span>
            <h3 className={style.cardTitle}>Email</h3>
            <p className={style.cardData}>Eugenykravchenko@icloud.com</p>
          </div>

          <div className={style.card}>
            <span className={style.cardIcon}>
              <FaRegAddressBook />
            </span>
            <h3 className={style.cardTitle}>Phone</h3>
            <p className={style.cardData}>+48 792 665 039</p>
          </div>
        </div>

        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={clsx(style.formGroup, 'grid')}>
            <div className={style.formDiv}>
              <label className={clsx(style.formTag, 'text_cs')}>
                Your full name <b>*</b>
              </label>
              <input
                className={style.formInput}
                style={formState.errors.name ? { borderColor: '#d40000' } : {}}
                type={'text'}
                {...register('name')}
              />
              {formState.errors.name && (
                <span className={style.formError}>{formState.errors.name.message}</span>
              )}
            </div>

            <div className={style.formDiv}>
              <label className={clsx(style.formTag, 'text_cs')}>
                Your Email Address <b>*</b>
              </label>
              <input
                className={style.formInput}
                style={formState.errors.email ? { borderColor: '#d40000' } : {}}
                type={'email'}
                {...register('email')}
              />
              {formState.errors.email && (
                <span className={style.formError}>{formState.errors.email.message}</span>
              )}
            </div>
          </div>

          <div className={style.formDiv}>
            <label className={clsx(style.formTag, 'text_cs')}>
              Your Subject <b>*</b>
            </label>
            <input
              className={style.formInput}
              style={formState.errors.subject ? { borderColor: '#d40000' } : {}}
              type={'text'}
              {...register('subject')}
            />
            {formState.errors.subject && (
              <span className={style.formError}>{formState.errors.subject.message}</span>
            )}
          </div>

          <div className={clsx(style.formDiv, style.formArea)}>
            <label className={clsx(style.formTag, 'text_cs')}>
              Your Message <b>*</b>
            </label>
            <textarea
              className={style.formInput}
              style={formState.errors.message ? { borderColor: '#d40000' } : {}}
              {...register('message')}
            ></textarea>
            {formState.errors.message && (
              <span className={style.formError}>{formState.errors.message.message}</span>
            )}
          </div>

          <div className={style.submit}>
            <p>* Accept the terms and conditions</p>
            <button className={clsx('btn', 'text_cs')} type={'submit'}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
