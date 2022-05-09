import Tiles from './Tiles';

function TileHolder({ tiles }) {
	return (
		<div className="tiles">
			<Tiles tiles={tiles} />
		</div>
	);
}

export default TileHolder;
