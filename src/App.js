import TileHolder from './components/TileHolder';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
	const [tiles] = useState([
		{
			tileNum: 1,
			text: 'Gmail',
			link: 'http://mail.google.com',
		},
		{
			tileNum: 2,
			text: 'Github',
			link: 'http://github.com',
		},
		{
			tileNum: 3,
			text: 'MongoDB',
			link: 'http://mongodb.com',
		},
		{
			tileNum: 4,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 5,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 6,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 7,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 8,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 9,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 10,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 11,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 12,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 13,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 14,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 15,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 16,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 17,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 18,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 19,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 20,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 21,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 22,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 23,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 24,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 25,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 26,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 27,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 28,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 29,
			text: 'New Tile',
			link: '',
		},
		{
			tileNum: 30,
			text: 'New Tile',
			link: '',
		},
	]);
	const [user] = useState({
		firstName: 'Sara',
		lastName: 'Stabenow',
	});

	return (
		<main>
			<Header userFirstName={user.firstName} />
			<TileHolder tiles={tiles} />
			<Footer />
		</main>
	);
}

export default App;
