import './App.css';
import NavBar from './Header';
import Counter from './Counter';
import Players from './Players'
import Footer from './Footer';
export default function App() {
  return (
    <div>
  <Counter/>
     <NavBar/>
    <Players/> 
    <Footer/>
    </div>  );
}
