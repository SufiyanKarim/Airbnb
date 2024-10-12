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
import Filter from './pages/Filter.jsx';


const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pages/:id" element={<Pages />} /> 
          <Route path="pages" element={<Filter />} /> 
           
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
