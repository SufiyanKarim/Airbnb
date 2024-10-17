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
// import Pages from './pages/Pages';
import Pages from './pages/Pages.jsx'
import IndividualPage from './pages/IndividualPage/IndividualPage.jsx';




const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pages/:id" element={<Pages />} /> 
          <Route path="individual/:id" element={<IndividualPage />} /> 
           
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
