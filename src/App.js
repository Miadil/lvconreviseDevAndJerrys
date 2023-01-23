import { Routes, Route } from "react-router-dom"

import Characters from "./pages/Characters"
import Header from "./components/Header"

import Home from "./pages/Home"

import "./App.css"
import DisplayCharacter from "./components/DisplayCharacter"

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/characters/:id" element={<DisplayCharacter />} />
			</Routes>
		</div>
	)
}

export default App
