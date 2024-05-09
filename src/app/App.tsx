import {Home} from "components/home/Home";
import {Skills} from "components/skills/Skills";
import {Portfolio} from "components/portfolio/Portfolio";
import {Resume} from "components/resume/Resume";
import {Contact} from "components/contact/Contact";
import {Footer} from "components/footer/Footer";
import {Header} from "components/header/Header";

const App = () => {
	return (
		<main className='main'>
			<Header/>
			<Home/>
			<Skills/>
			<Portfolio/>
			<Resume/>
			<Contact/>
			<Footer/>
		</main>
	);
};

export default App;
