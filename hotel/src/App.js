import logo from './logo.svg';
import './App.css';
import Page1 from './component/page1.js';
import Nav from './component/nav.js';
import Footer from './component/footer.js';
import Page2 from './component/page2.js';
import PageEvent from './component/page event.js';
import{BrowserRouter ,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav />
      <Routes>
        <Route path="/" Component={Page1}/>
        <Route path="/page2" Component={Page2}/>
        <Route path="/page-event" Component={PageEvent}/>
      </Routes>

      
      </BrowserRouter>
      
     {/* <Footer /> */}
      
    </div>
  );
}

export default App;
