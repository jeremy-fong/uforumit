import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar.js';
import Profile from './pages/Profile';
import CreateThread from './pages/createThread';
import Footer from './components/Footer'
import SingleThread from './pages/SingleThread';
// import Auth from './utils/auth';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
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
            <Route exact path="createthread" element={<CreateThread />} />
            {/* <Route exact path="profile" element={<Profile />} /> */}
            <Route path="/me" element={<Profile />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/threads/:threadId" element={<SingleThread />} />
          </Routes>
          <Footer />
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
