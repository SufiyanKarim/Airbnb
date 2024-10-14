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
<<<<<<< HEAD

=======
// import Filter from './pages/Filter.jsx';
>>>>>>> 984bf501537266e25ebe63dc141987b9d9cb3afc


const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pages/:id" element={<Pages />} /> 
<<<<<<< HEAD

=======
          {/* <Route path="pages" element={<Filter />} />  */}
>>>>>>> 984bf501537266e25ebe63dc141987b9d9cb3afc
           
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
