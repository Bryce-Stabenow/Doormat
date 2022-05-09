function Tiles({ tiles }) {
	function directUser() {
		console.log('redirect');
	}
	return (
		<>
			{tiles.map((tile) => (
				<div className="singleTile" key={tile.tileNum} onClick={directUser}>
					{tile.text}
				</div>
			))}
		</>
	);
}

export default Tiles;
