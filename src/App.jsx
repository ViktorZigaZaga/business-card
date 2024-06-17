import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import "/src/App.css"
import Navbar from "/src/components/Navbar"
import Footer from "/src/components/Footer";
import Home from "/src/pages/Home";
import Projects from "/src/pages/Projects";
import Project from "/src/pages/Project";
import Skills from "/src/pages/Skills";
import Contacts from "/src/pages/Contacts";
import ScrollToTop from "/src/utils/scrollToTop"

function App() {
  return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path="/business-card/projects" element={<Projects />} />
					<Route path="/business-card/project/:id" element={<Project />} />
					<Route path="/business-card/skills" element={<Skills />} />
					<Route path="/business-card/contacts" element={<Contacts />} />
					<Route path="/business-card" element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</div>
  );
}

export default App;