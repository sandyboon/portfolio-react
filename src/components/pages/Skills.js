import React from 'react';

function Skills() {
  return (
    <>
      <div className="d-flex justify-content-center mr-lg-5 skillcontentArea">
        <div className="align-self-center animated bounceInDown delay-1s">
          <div className="ml-md-1 ml-lg-5 animated bounce slow">
            <div className="skillsBall skillsBall1 shadow-sm">
              <p>Java</p>
            </div>
          </div>
        </div>

        <div className="align-self-center animated bounceInDown delay-2s">
          <div className="ml-md-1 ml-lg-5 bounce slow">
            <div className="skillsBall skillsBall2 shadow-sm py-2 animated wobble delay-2s slow">
              <p className="text-center">JavaScript</p>
            </div>
          </div>
        </div>

        <div className="align-self-center animated bounceInDown delay-3s">
          <div className="ml-md-1 ml-lg-5 bounce fast">
            <div className="skillsBall skillsBall3 shadow-sm animated wobble delay-3s slow">
              <p>Java Spring</p>
            </div>
          </div>
        </div>

        <div className="align-self-center animated bounceInDown delay-4s">
          <div className="ml-md-1 ml-lg-5 bounce slow">
            <div className="skillsBall skillsBall4 shadow-sm animated wobble delay-1s slow">
              <p>Selenium</p>
            </div>
          </div>
        </div>

        <div className="align-self-center animated bounceInDown delay-5s">
          <div className="ml-md-1 ml-lg-5 bounce slow">
            <div className="skillsBall skillsBall5 shadow-sm">
              <p>Junit</p>
            </div>
          </div>
        </div>

        <div className="align-self-center animated bounceInDown delay-6s">
          <div className="ml-md-1 ml-lg-5 bounce slow">
            <div className="skillsBall skillsBall6 shadow-sm">
              <p>SQL</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
