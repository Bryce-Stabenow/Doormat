import { useState } from 'react';

function Tiles({ tiles }) {
	async function getLogo(domain) {
		let trimDom = domain.replace(/http:\/\//, '');
		const data = await fetch(`http://favicongrabber.com/api/grab/${trimDom}`);
		const logoJSON = await data.json();

		setLogoData(logoJSON.icons[0].src);
		return;
	}

	const [logoData, setLogoData] = useState('');

	return (
		<>
			{tiles.map((tile) => (
				<div
					className="singleTile"
					key={tile.tileNum}
					onClick={(e) =>
						window.open(`${tile.link}`, '_blank', 'noopener', 'noreferrer')
					}
				>
					<h3>{tile.text}</h3>
					<img
						className={`tilePhoto ${getLogo(tile.link)}`}
						src={logoData}
						alt="Loading..."
					></img>
				</div>
			))}
		</>
	);
}

export default Tiles;
