// create container components

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from "../pages/About";
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Pseudocode from '../pages/Pseudocode';
import Pseudocodes from '../pages/Pseudocodes';
import Resume from '../pages/Resume';
import Auth from '../utils/auth';


export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

    const user = Auth.getProfile()?.data;
    const username = user?.name;
    const userEmail = user?.email;
    const hasAccess = Auth.hasAccess(userEmail);
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === "Resume") {
        return <Resume />
      }
      if (currentPage === "Home") {
        return <Home username={username} />;
      }
      if (currentPage === "Pseudocodes") {
        return <Pseudocodes />
      }
      if (currentPage === "Pseudocode") {
        return <Pseudocode />
      }
      if (currentPage === "Dashboard") {
        if(!hasAccess){
          setCurrentPage('Home');
          return <Home message='access_denied' />
        }
        return <Dashboard username={username} userEmail={userEmail}/>
      }
      
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>

        <Header currentPage={currentPage} handlePageChange={handlePageChange} username={username} userEmail={userEmail} />

        <main className='container'>
          <div className="row">
            <div className="col-xl-10 col-12">{renderPage()}</div>
          </div>
          
        </main>

        <Footer />
      </div>
    );
  }
  