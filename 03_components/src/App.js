import "./App.css"
import Card from "./components/Card"
import Carousel from "./components/Carousel"
import Dropdown from "./components/Dropdown"

function App() {
	return (
		<div className="App">
			<Dropdown />
			<Carousel />
			<Card />
		</div>
	)
}

export default App
