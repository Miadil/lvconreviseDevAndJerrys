const Card = ({ name, image }) => {
	return (
		<div>
			<img
				className="Cardimg"
				src={image}
				alt={name}
				style={{ width: "300px" }}
			/>
			<p>{name}</p>
		</div>
	)
}
export default Card
