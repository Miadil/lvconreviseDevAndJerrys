import { Link } from "react-router-dom"
const Card = ({ name, image, id }) => {
	const characterLink = `/characters/${id}`
	return (
		<div>
			<Link to={characterLink}>
				<img
					className="Cardimg"
					src={image}
					alt={name}
					style={{ width: "300px" }}
				/>
				<p>{name}</p>
			</Link>
		</div>
	)
}
export default Card
