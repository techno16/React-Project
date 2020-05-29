import React from 'react';
import './Explain.css';
import chart from './img/chart.jpg';

function Explain() {
  return (
    <div className="wrapper style2"  >
        <div className="container">
            <header className="major" id="Explain">
                <h2>Why Korean Palace Tour?</h2>
                <p>Korean palace is on top 5 places for famous sight in Korea.</p>
            </header>
            <div className="chart">
              <img src={chart} alt={chart} className="chart-img"></img>
              <p>
                As you see the chart above, Myungdong takes first place. But Myungdong is most famous place for shopping.<br/>
                It means Korean palacs is most visited palace with Namsan for sight.
              </p>
            </div>
        </div>
    </div>

  )
}

export default Explain;