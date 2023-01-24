import { useState, useEffect } from "react"
import axios from "axios"

import Card from "../components/Card"

const Characters = () => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		// fetch("https://miadil.github.io/starwars-api/api/all.json")
		// 	.then((res) => res.json())
		// 	.then((res) => setCharacters(res))
		axios
			.get("https://miadil.github.io/starwars-api/api/all.json")
			.then((res) => setCharacters(res.data))
	}, [])

	return (
		<div>
			{characters.map((character) => (
				<Card
					key={character.id}
					name={character.name}
					image={character.image}
					id={character.id}
				/>
			))}
		</div>
	)
}
export default Characters
