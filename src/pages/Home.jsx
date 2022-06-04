import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../request';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  return (
    <div>
        <Main/>
        <Row key={uuidv4()} uniqueId="1" title='Up Coming' fetchURL={requests.requestUpcoming}/>
        <Row key={uuidv4()} uniqueId="2" title='Popular' fetchURL={requests.requestPopular}/>
        <Row key={uuidv4()} uniqueId="3" title='Trendign' fetchURL={requests.requestTrending}/>
        <Row key={uuidv4()} uniqueId="4" title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row key={uuidv4()} uniqueId="5" title='Horror' fetchURL={requests.requestHorror}/>

    </div>
  )
}

export default Home