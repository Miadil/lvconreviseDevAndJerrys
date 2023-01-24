import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DisplayCharacter = () => {
	const [character, setCharacter] = useState([])
	const param = useParams()

	useEffect(() => {
		axios
			.get(`https://miadil.github.io/starwars-api/api/id/${param.id}.json`)
			.then((res) => console.log(res.data) || setCharacter(res.data))
	}, [])

	return (
		<div>
			{console.log(param.id)}
			<img src={character.image} alt={character.name} />
			<p>{character.name}</p>
			<p>{character.mass}</p>
			<p>{character.gender}</p>
		</div>
	)
}
export default DisplayCharacter
