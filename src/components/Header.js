function Header({ userFirstName }) {
	return (
		<header className="header">
			<h1>Doormat</h1>
			<p>Welcome, {userFirstName}!</p>
		</header>
	);
}

Header.defaultProps = {
	userFirstName: 'Bryce',
};

export default Header;
