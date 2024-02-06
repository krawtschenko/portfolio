import {Home} from "components/home/Home";
import {Skills} from "components/skills/Skills";
import {Portfolio} from "components/portfolio/Portfolio";

const App = () => {
	return (
		<main className='main'>
			<Home/>
			<Skills/>
			<Portfolio/>
		</main>
	);
};

export default App;
