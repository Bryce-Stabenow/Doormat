import { useState } from 'react';

function Tile({ tile }) {
	async function getLogo(domain) {
		if (domain === '') {
			return;
		}
		let trimDom = domain.replace(/http:\/\//, '');
		const data = await fetch(`http://favicongrabber.com/api/grab/${trimDom}`);
		const logoJSON = await data.json();

		setLogoData(logoJSON.icons[0].src);
		return;
	}

	const [logoData, setLogoData] = useState('');

	return (
		<div
			className="singleTile"
			onClick={(e) =>
				window.open(`${tile.link}`, '_blank', 'noopener', 'noreferrer')
			}
		>
			<h3
				style={{
					margin: 0,
					color: tile.link === '' ? 'rgba(0,0,0, 0.25)' : 'black',
				}}
			>
				{tile.text}
			</h3>
			<img
				className={`tilePhoto ${getLogo(tile.link)}`}
				src={logoData}
				alt={tile.link === '' ? '' : 'Loading logo...'}
			></img>
		</div>
	);
}

export default Tile;
