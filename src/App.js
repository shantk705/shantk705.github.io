import './components/rotateTags.scss';
import icon from './images/laptop.svg';
import Tags  from'./components/rotateTags.js';
import './index.css'
import './components/card.scss'
import Cards from './components/card.js'
import Footers from './components/footer.js';
import './components/Footer.scss'






function App() {
  return (
    <>
    <div className='nav-container'>
    <img src={icon}alt='a laptop picture'/>
     <div className='logo-title'>Compu<span className='store'>Store</span></div>
     <input className='search-bar' Type="text" placeholder="Search For Products..."/>
     </div>
    
    <Tags/>
    <div className='card-container'>
    <Cards/>
    </div>
    <Footers/>
   
  
    
  
    </>
    
  );
}

export default App;
