function TileEditor({ num, tile, tiles, setTiles, onSubmit }) {
	async function updateNewTile(oldTiles, newTile) {
		let updatedTileInd = oldTiles.findIndex(
			(x, i, arr) => arr[i].tileNum === newTile.tileNum
		);

		if (newTile.img === '') {
			let trimDom = newTile.link.replace(/http:\/\//, '');
			const data = await fetch(`http://favicongrabber.com/api/grab/${trimDom}`);
			const logoJSON = await data.json();
			newTile.img = logoJSON.icons[0].src;

			let dummyArr = oldTiles.map((x) => x);
			dummyArr.splice(updatedTileInd, 1, newTile);
			setTiles(dummyArr);
			return 'Tile Updated';
		} else {
			let dummyArr = oldTiles.map((x) => x);
			dummyArr.splice(updatedTileInd, 1, newTile);
			setTiles(dummyArr);
			return 'Tile Updated';
		}
	}

	return (
		<form className="tileEditorForm" onSubmit={onSubmit}>
			<h4>Tile #{num}</h4>
			<label htmlFor="title">Tile Name:</label>
			<input
				type="text"
				name="title"
				defaultValue={tile.text}
				className="tileTitleInput"
			></input>
			<label htmlFor="link">Link:</label>
			<input
				type="text"
				name="link"
				defaultValue={tile.link === '' ? 'http://' : tile.link}
				className="tileLinkInput"
			></input>
			<input
				type="submit"
				value="Save Tile"
				className="tileSaveButton"
				onClick={() => {
					let newText = document.querySelector('.tileTitleInput').value;
					let newLink = document.querySelector('.tileLinkInput').value;
					updateNewTile(tiles, {
						tileNum: tile.tileNum,
						text: newText,
						link: newLink,
						img: tile.img,
					});
				}}
			></input>
		</form>
	);
}

export default TileEditor;

//TODO: Connect with backend!!! AHHHH!!!
