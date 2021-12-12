import CollectionCard from "./collectionCard"

const PunkList = ({ punkListData, setSelectedPunk }) => {

	

	return (
		<div className='punkList' >
			<div>
				{punkListData.map(punk => (
				<div onClick={() => {console.log(punk.id)}}>
					<CollectionCard
						key={punk.token_id}
						id={punk.token_id}
						name={punk.name}
						traits={punk}
						image={punk.image_original_url}
					/>
				</div>
				))}
				
			</div>
		</div>
	)
}

export default PunkList;