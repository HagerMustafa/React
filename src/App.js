// import logo from './logo.svg';
import './App.css';
// import {ColorSchemesExample} from './Nav';
import  NavComponent  from './Nav';
import SliderComponent from './slider';
import Footer from './footer';
import Products from './products';
function App() {
  return (
    <div className="App">
    <NavComponent></NavComponent>
    <SliderComponent></SliderComponent>
    <Products></Products>
    <Footer></Footer>
    </div>
  );
}

export default App;
