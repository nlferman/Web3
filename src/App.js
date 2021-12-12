import './App.css';
import Header from './components/header';
import {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import PunkList  from './components/punkList';
import Main from './components/main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect (() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=%7B%7Byour_collection_address_here%7D%7D'
      )
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.value);
    };
    getMyNfts();
  }, []);

  return (
    <div className='app'>
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Main selectedPunk={selectedPunk} punkListData={punkListData} />
            <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )
      }
      
    </div>
  )
}

export default App;
