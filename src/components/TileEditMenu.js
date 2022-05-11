import React from 'react';

class TileEditMenu extends React.Component {
	state = {
		xPos: '0px',
		yPos: '0px:',
		showMenu: false,
	};

	componentDidMount() {
		document.addEventListener('click', this.handleClick);

		document.addEventListener('contextmenu', this.handleContextMenu);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClick);

		document.removeEventListener('contextmenu', this.handleContextMenu);
	}

	handleClick = (e) => {
		if (this.state.showMenu) this.setState({ showMenu: false });
	};

	handleContextMenu = (e) => {
		e.preventDefault();

		this.setState({
			xPos: `${e.pageX}px`,

			yPos: `${e.pageY}px`,

			showMenu: true,
		});
	};

	render() {
		const { showMenu, xPos, yPos } = this.state;

		if (showMenu)
			return (
				<form
					className="TileEditMenu"
					style={{
						position: 'absolute',
						top: yPos,

						left: xPos,
					}}
				>
					<input type="text"></input>
					<input type="text"></input>
					<input type="text"></input>
					<input type="submit"></input>
				</form>
			);
		else return null;
	}
}

export default TileEditMenu;
