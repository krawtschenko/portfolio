import {Home} from "components/home/Home";
import {Skills} from "components/skills/Skills";
import {Portfolio} from "components/portfolio/Portfolio";
import {Resume} from "components/resume/Resume";
import {Contact} from "components/contact/Contact";

const App = () => {
	return (
		<main className='main'>
			<Home/>
			<Skills/>
			<Portfolio/>
			<Resume/>
			<Contact/>
		</main>
	);
};

export default App;
