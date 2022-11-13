import './App.css';
import Banner from './Components/Banner/Banner.js';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar.js';
import Posts from './Components/Posts/Posts.js';

import { trending, romance, comedy, crime, action, music, fantasy, horror } from './Urls/Urls'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner url={trending} />
      <Posts title = 'Fantasy on Netflix' url={fantasy}/>
      <Posts title = 'Comedy Movies' url={comedy}/>
      <Posts title = 'Horror Films' url={horror}/>
      <Posts title = 'Romance Movies' url={romance}/>
      <Posts title = 'Action Films' url={action}/>
      <Posts title = 'Music Movies' url={music}/>
      <Posts title = 'Crime Movies' url={crime}/>
      <Footer />
    </div>
  );
}

export default App;