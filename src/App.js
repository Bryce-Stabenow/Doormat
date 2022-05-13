import TileHolder from './components/TileHolder';
import Header from './components/Header';
import Footer from './components/Footer';
import DailyInfo from './components/DailyInfo';
import TileEditor from './components/TileEditor';
import { useState } from 'react';

document.addEventListener('contextmenu', (event) => {
	event.preventDefault();
});

function App() {
	const onSubmit = (event) => {
		event.preventDefault();
		setEditor(false);
	};

	function setEditorOpen(currentTile) {
		if (editorOpen) {
			setEditor(false);
			console.log('editor now closed!');
		} else if (!editorOpen) {
			setEditor(true);
			setEditorTileNum(currentTile.tileNum);
			setEditorTile(currentTile);
			console.log('editor now open!');
		}
	}

	const [editorOpen, setEditor] = useState(false);
	const [editorTileNum, setEditorTileNum] = useState(0);
	const [editorTile, setEditorTile] = useState({});

	const [tiles, setTiles] = useState([
		{
			tileNum: 1,
			text: 'Gmail',
			link: 'http://mail.google.com',
			img: 'https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_32dp.png',
		},
		{
			tileNum: 2,
			text: 'Github',
			link: 'http://github.com',
			img: 'https://github.githubassets.com/favicons/favicon.svg',
		},
		{
			tileNum: 3,
			text: 'MongoDB',
			link: 'http://mongodb.com',
			img: 'https://www.mongodb.com/assets/images/global/favicon.ico',
		},
		{
			tileNum: 4,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 5,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 6,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 7,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 8,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 9,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 10,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 11,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 12,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 13,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 14,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 15,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 16,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 17,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 18,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 19,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 20,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 21,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 22,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 23,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 24,
			text: 'New Tile',
			link: '',
			img: '',
		},
		{
			tileNum: 25,
			text: 'New Tile',
			link: '',
			img: '',
		},
	]);
	const [user] = useState({
		firstName: 'Bryce',
		lastName: 'Stabenow',
	});

	return (
		<main>
			<Header userFirstName={user.firstName} />
			<div className="appSection">
				<TileHolder tiles={tiles} setEditorOpen={setEditorOpen} />
				{editorOpen ? (
					<TileEditor
						num={editorTileNum}
						tile={editorTile}
						tiles={tiles}
						setTiles={setTiles}
						onSubmit={onSubmit}
					/>
				) : (
					<DailyInfo />
				)}
			</div>
			<Footer />
		</main>
	);
}

export default App;
