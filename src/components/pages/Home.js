import React from 'react';
import Footer from '../Footer';

function Home() {
  return (
    <main id="content" className="d-flex">
      <div className="align-self-center mr-lg-5 contentArea">
        <h1 className="h1">
          <p>Hi! I am Sandy...</p>
          <p>A full stack developer.</p>
        </h1>
        <hr className="hr mb-0" />
        <span className="h6">
          Front End Developer | Java Developer | Test Automation
        </span>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
