//import { useState } from 'react';

function Tile({ tile, setEditorOpen }) {
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
					color:
						tile.text === 'New Tile' || tile.text === ''
							? 'rgba(0,0,0, 0.25)'
							: 'black',
				}}
			>
				{tile.text === 'New Tile' || tile.text === ''
					? 'Right click to edit tiles!'
					: tile.text}
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
