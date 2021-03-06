import React from "react";
import './header.css';
import punkLogo from '../images/assets/header/cryptopunk-logo.png';
import searchIcon from '../images/assets/header/search.png';
import themeSwitchIcon from '../images/assets/header/theme-switch.png';

const Header = () => {
	return (
		<div className='header'>
			<div className='logoContainer'>
				<img src={punkLogo} className='punkLogo' alt='punk logo' />
			</div>

			<div className='searchBar'>
				<div className='searchIconContainer'>
					<img src={searchIcon} alt='Search Icon' />
				</div>
				<input className='searchInput' placeholder='Content, Item, or User...' />
			</div>

			<div className='headerItems'>
				<p>Drops</p>
				<p>Marketplace</p>
				<p>Create</p>
			</div>

			<div className='headerActions'>
				<div className='themeSwitchContainer'>
					<img src={themeSwitchIcon} alt='Theme Switch' />
				</div>
			</div>

			<div className='loginButton'>
				GET IN
			</div>
		</div>
	)
}

export default Header;