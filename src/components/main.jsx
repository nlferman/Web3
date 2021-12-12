import './main.css';
import punkImage from '../images/punks/1.jpg';
import instagrameLogo from '../images/assets/owner/instagram.png';
import twitterLogo from '../images/assets/owner/twitter.png';
import moreIcon from '../images/assets/owner/more.png';
import { useEffect, useState } from 'react';

const Main = ({ selectedPunk, punkListData }) => {
	const [activePunk, setActivePunk] = useState(punkListData[0]);

	useEffect(() => {
		setActivePunk(punkListData[selectedPunk]);
	}, [selectedPunk, punkListData]);

	return (
		<div className='main'>
			<div className='mainContent'>
				<div className='punkHighlight'>
					<div className='punkContainer'>
						<img className='selectedPunk' src={punkImage} alt='Active Punk' />
					</div>
				</div>

				<div className='punkDetails' style={{color: '#fff'}}>
					<div className='title'>Bandana Punk</div>
					<span className='itemNumber'>.#1</span>
				</div>
				
				<div className='owner'>
					<div className='ownerImageContainer'>
						<img src={punkImage} alt='owner_image' />
					</div>
				</div>
				<div className='ownerDetails'>
					<div className='ownerNameAndHandle'>
						<div>AAW8375IUHQW3I874Y2UIQ3H5R98YHRFT</div>
						<div className='ownerHandle'></div>
					</div>
					<div className='ownerLink'>
						<img src={instagrameLogo} alt='owner' />
					</div>
					<div className='ownerLink'>
						<img src={twitterLogo} alt='owner' />
					</div>
					<div className='ownerLink'>
						<img src={moreIcon} alt='owner' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main;