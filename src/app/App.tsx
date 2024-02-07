import {Home} from "components/home/Home";
import {Skills} from "components/skills/Skills";
import {Portfolio} from "components/portfolio/Portfolio";
import {Resume} from "components/resume/Resume";

const App = () => {
	return (
		<main className='main'>
			<Home/>
			<Skills/>
			<Portfolio/>
			<Resume/>
		</main>
	);
};

export default App;
