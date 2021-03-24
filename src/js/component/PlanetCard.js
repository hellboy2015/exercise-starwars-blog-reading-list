import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	let basePlanetId = 1000;
	return (
		<div className="card col-3">
			<img
				className="card-img-top"
				src={"https://picsum.photos/id/" + (props.imageId + 1) + "/200/300"}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Population: {props.population}</p>
				<p className="card-text">Terrain: {props.terrain}</p>
				<Link to={"/singleplanet/" + props.planetId} className="btn btn-primary mr-2">
					Planet details
				</Link>
				<a
					onClick={() => actions.addFavorites(props.name, props.planetId + basePlanetId)}
					href="#"
					className="btn btn-outline-warning">
					&#x2661;
				</a>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	name: PropTypes.string,
	terrain: PropTypes.string,
	population: PropTypes.string,
	imageId: PropTypes.number,
	planetId: PropTypes.number
};

export default PlanetCard;
