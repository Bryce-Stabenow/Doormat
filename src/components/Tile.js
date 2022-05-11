//import { useState } from 'react';

function Tile({ tile, setEditorOpen }) {
	// async function getLogo(domain) {
	// 	if (domain === '') {
	// 		return;
	// 	}
	// 	let trimDom = domain.replace(/http:\/\//, '');
	// 	const data = await fetch(`http://favicongrabber.com/api/grab/${trimDom}`);
	// 	const logoJSON = await data.json();

	// 	setLogoData(logoJSON.icons[0].src);
	// 	return;
	// }

	//const [logoData, setLogoData] = useState('');

	return (
		<div
			className="singleTile"
			onClick={
				tile.link !== ''
					? () =>
							window.open(`${tile.link}`, '_blank', 'noopener', 'noreferrer')
					: () => alert('error') //change to render menu for updating tile
			}
			onContextMenu={() => setEditorOpen(tile)}
		>
			<h3
				style={{
					margin: 0,
					padding: 5,
					color: tile.link === '' ? 'rgba(0,0,0, 0.25)' : 'black',
				}}
			>
				{tile.text === 'New Tile' ? 'Right click to edit tiles!' : tile.text}
			</h3>
			<img
				className={'tilePhoto'}
				src={tile.img}
				alt={tile.link === '' ? '' : 'Loading logo...'}
			></img>
		</div>
	);
}

export default Tile;
