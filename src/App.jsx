import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import {
  Header,
  Footer,
  Home,
} from './index'
import Pages from './pages/Pages';



const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pages/:id" element={<Pages />} /> 

           
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
