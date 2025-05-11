import "./app.scss";
import {Home} from "../components/home/home.jsx";
import {Skills} from "../components/skills/skills.jsx";
import {Portfolio} from "../components/portfolio/portfolio.jsx";
import {Resume} from "../components/resume/resume.jsx";
import {Contact} from "../components/contact/contact.jsx";
import {Footer} from "../components/footer/footer.jsx";
import {Header} from "../components/header/header.jsx";

export function App() {
	return <main className="main">
		<Header/>
		<Home/>
		<Skills/>
		<Portfolio/>
		<Resume/>
		<Contact/>
		<Footer/>
	</main>;
}
