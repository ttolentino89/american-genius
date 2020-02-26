import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <div className="vid">
  <iframe title="mainVid" frameborder="0" allowfullscreen height="100%" width="100%"
    src="https://youtube.com/embed/egGUqv8LTkw?autoplay=1&controls=0&rel=0&showinfo=0&autohide=1&mute=1">
  </iframe>
</div>
    </div>
  );
}

export default App;
