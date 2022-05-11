function TileEditor({ num, tile, tiles, setTile }) {
	return (
		<form className="tileEditorForm">
			<h4>Tile #{num}</h4>
			<label htmlFor="title">Tile Name:</label>
			<input type="text" name="title" defaultValue={tile.text}></input>
			<label htmlFor="link">Link:</label>
			<input type="text" name="link" defaultValue={tile.link}></input>
			<input type="submit" value="Save Tile" className="tileSaveButton"></input>
		</form>
		//TODO: Make form submission update state of the tiles
	);
}

export default TileEditor;
