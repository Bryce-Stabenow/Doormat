import Tiles from './Tiles';

function TileHolder({ tiles, setEditorOpen }) {
	return (
		<div className="tiles">
			<Tiles tiles={tiles} setEditorOpen={setEditorOpen} />
		</div>
	);
}

export default TileHolder;
