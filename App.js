import React from 'react';
// Importing the Context Provider & Home Component
import MyMainProvider from './Main/MyMain';
import Home from './components/Home'

function App() {
  return (
    <MyMainProvider>
        <Home/>
    </MyMainProvider>
  );
}

export default App;