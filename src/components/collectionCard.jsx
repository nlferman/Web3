import React from "react";
import './collectionCard.css';
import weth from '../images/assets/weth.png';

const CollectionCard = ({id, name, traits, image}) => {
	return (
		<div className='collectionCard'>
			<img src={image} alt='' />
			<div className='details'>
				
				<div className='name'>
					{name} <div className='id'> .#{id}</div>
				</div>

				<div className='priceContainer'>
					<img src={weth} className='wethImage' alt='' />
					<div className='price'>{traits[0]?.value}</div>
				</div>
				
			</div>
		</div>
	)
}

export default CollectionCard;