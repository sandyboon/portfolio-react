import React from 'react';

function Contact() {
  return (
    <main id="content" className="container">
      <div className="row justify-content-center">
        <div className="col-9 mt-5">
          <div className="card cardoutline">
            <div className="card-header contactCardHeader">Contact</div>
            <div className="card-body contactCardBody">
              <h5 className="card-title">
                Contact me for colloborating on interesting projects :
              </h5>
              <p className="card-text">
                I am interested in colloborating on interesting and challenging
                projects on Front-end, Java, and test-automation.
              </p>
              <p className="card-text">
                If you would like to work with me, please drop me a message at
                my email: <u className="redText">sandy.boon@gmail.com</u>. I
                will get back you to as soon as possible!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
