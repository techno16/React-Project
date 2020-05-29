import React from 'react';
import './Main.css';


function Main() {
  return (
    <div className="site-wrapper">

    <div className="site-wrapper-inner">

      <div className="container">
        <div className="masthead clearfix">
          <div className="container inner">
            <h3 className="masthead-brand"> Korean Palace</h3>
            <nav>
              <ul className="nav masthead-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#Explain">Why Korean Palace?</a></li>
                <li><a href="#PalaceList">Palace for Tour List</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="inner cover">
          <h1 className="cover-heading">Have you ever tried Korean Palce Tour?</h1>
          <p className="lead">
              If you have never tried that before, We recommand you to experience this.
              <br/>
              We garuntee you will not regret for this.
          </p>
          <p className="lead1">
            <a href="#" className="btn btn-lg btn-default" id="main-button">Learn more</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  



  )
}

export default Main;
