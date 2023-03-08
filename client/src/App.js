
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar.js';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {

  return (
    <ApolloProvider client={client}>
      
      <Router>
        <div>

          <Navbar placeholder='search uforumit'/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            
            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<Signup />} />
          </Routes>

        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
