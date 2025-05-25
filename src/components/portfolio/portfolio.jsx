import {projects} from '../../app/data.js';
import './portfolio.scss';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import {FaArrowRight} from "react-icons/fa";

export const Portfolio = () => {
	return (<section className='portfolio section' id='work'>
		<h2 className='section__title text-cs'>Portfolio</h2>
		<p className='section__subtitle'>
			My <span>Cases</span>
		</p>

		<div className='portfolio__container container grid'>
			{projects.map((projectItem) => {
				const {id, img, title, description, preview, code} = projectItem;
				return (
						<div
								className='portfolio__items card card-two'
								key={id}
						>
							<div className='portfolio__img-wrapper'>
								<img src={img} alt='' className='portfolio__img'/>
							</div>

							<span className='portfolio__category text-cs'></span>
							<h3 className='portfolio__title'>{title}</h3>
							<p className='portfolio__description'>{description}</p>
							<div className='portfolio__buttons'>
								<a className='link' href={preview} target='_blank'>
									See Preview
									<FaArrowRight className='link__icon'/>
								</a>

								<a className='link' href={code} target='_blank'>
									See Code
									<FaArrowRight className='link__icon'></FaArrowRight>
								</a>
							</div>

							<img src={shapeTwo} alt='shapeTwo' className='shape c__shape'/>
						</div>);
			})}
		</div>

		<div className='section__deco deco__right'>
			<img src={shapeOne} alt='shapeOne' className='shape'/>
		</div>

		<div className='section__bg-wrapper'>
			<span className='bg__title'>Portfolio</span>
		</div>
	</section>);
};
