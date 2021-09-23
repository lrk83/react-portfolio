import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer'

function App() {
  const [categories] = useState([
    {name: 'About', description: 'A short about me'},
    {name: 'Portfolio', description: 'links to my past work'},
    {name: 'Contact', description:'a contact me form'},
    {name: 'Resume', description:'a link to download my resume'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return(
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Content currentCategory={currentCategory}></Content>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
