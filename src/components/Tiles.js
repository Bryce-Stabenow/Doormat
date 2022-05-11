import Tile from './Tile';

function Tiles({ tiles, setEditorOpen }) {
	return (
		<>
			{tiles.map((tile) => (
				<Tile tile={tile} key={tile.tileNum} setEditorOpen={setEditorOpen} />
			))}
		</>
	);
}

export default Tiles;
