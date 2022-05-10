import Tile from './Tile';

function Tiles({ tiles }) {
	return (
		<>
			{tiles.map((tile) => (
				<Tile tile={tile} key={tile.tileNum} />
			))}
		</>
	);
}

export default Tiles;
