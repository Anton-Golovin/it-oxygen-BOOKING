import React from 'react';

// Style
import { container } from './app.module.scss'
// Parts
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import Filter from "../../components/Filter/Filter";
import Hotel from "../../components/Hotel/Hotel";
function App() {
  return (
    <>
        <Header />
        <div className={container}>
            <Search />
            <div style={{ display: 'flex' }}>
                <Filter />
                <ul style={{ listStyle: 'none', width: '100%' }}>
                    <li><Hotel /></li>
                    <li><Hotel /></li>
                    <li><Hotel /></li>
                    <li><Hotel /></li>
                    <li><Hotel /></li>
                    <li><Hotel /></li>
                    <li><Hotel /></li>
                </ul>
            </div>
            <Footer />
        </div>
    </>
  );
}

export default App;
