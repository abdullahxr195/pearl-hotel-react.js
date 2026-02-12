import logo from './logo.svg';
import './App.css';
import Page1 from './component/page1.js';
import Nav from './component/nav.js';
import Footer from './component/footer.js';
import Page2 from './component/page2.js';
import PageEvent from './component/page event.js';
import Services from './component/services page.js';
import Services2 from './component/services page2.js';
import Services3 from './component/services page3.js';
import Services4 from './component/services page4.js';
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
        <Route path="/services-page" Component={Services}/>
        <Route path="/services-page2" Component={Services2}/>
        <Route path="/services-page3" Component={Services3}/>
        <Route path="/services-page4" Component={Services4}/>
      </Routes>

     
      </BrowserRouter>
       {/* <Footer /> */}
     
      
    </div>
  );
}

export default App;
