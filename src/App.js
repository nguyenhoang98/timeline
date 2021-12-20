import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className='container'>
      <div className='timeline-title d-flex'>
        <div className='timeline-title-left'>ROAD TO SUMMIT</div>
        <div className='timeline-title-right'>METAVERSE SUMMIT</div>
      </div>
      <div className='timeline-one-top d-flex'>
        <div className='timeline-one-top-content_one'>EVENTS</div>
        <div className='timeline-one-top-content_two'>
          <ul>
            <li>FAM version v2</li>
            <li> Tech test </li>
          </ul>
        </div>
        <div className='timeline-one-top-content_three'>
          <ul>
            <li>FAM version v2</li>
            <li> Tech test </li>
          </ul>
        </div>
        <div className='timeline-one-top-content_four'>
          <ul>
            <li>FAM version v2</li>
            <li> Tech test </li>
          </ul>
        </div>
        <div className='timeline-one-top-content_five'>
          <ul>
            <li>FAM version v2</li>
            <li> Tech test </li>
          </ul>
        </div>
      </div>
      <div className='timeline d-flex'>
        <div className='timeline-one'>
          <span className='d-flex'>
            <div className='rec rec-black '></div>
            <div>TIMELINE</div>
          </span>
        </div>
        <div className='timeline-day-one'>
          <span className='timeline-day-one__content'>
            <div className='rec rec-gold i-block'></div>
            <div className='i-block'>Dec 2021</div>
          </span>
        </div>
        <div className='timeline-day-two'>
          <div className='timeline-day-two__content'>
            <div className='rec rec-gold i-block'></div>
            <div className='i-block'>Jan 2021</div>
          </div>
        </div>
        <div className='timeline-day-three'>
          <div className='timeline-day-three__content'>
            <div className='rec rec-gold i-block'></div>
            <div className='i-block'>Feb 2022</div>
          </div>
        </div>
        <div className='timeline-day-four'>
          <div className='timeline-day-four__content'>
            <div className='rec rec-gold i-block'></div>
            <div className='i-block'>Mar 2022</div>
          </div>
        </div>
      </div>
      <div className='timeline-one-bottom d-flex'>
        <div className='timeline-one-top-content_one'>EVENTS</div>
        <div className='timeline-one-top-content_two'>
          <ul>
            <li>FAM version v2</li>
            <li> Tech test </li>
          </ul>
        </div>
        <div className='timeline-one-top-content_three'>
          <ul>
            <li>FAM version v2</li>
            <li> Tech test </li>
          </ul>
        </div>
        <div className='timeline-one-top-content_four'>
          <ul>
            <li>FAM version v2</li>
            <li> Tech test </li>
          </ul>
        </div>
        <div className='timeline-one-top-content_five'>
          <ul>
            <li>FAM version v2</li>
            <li> Tech test </li>
          </ul>
        </div>
      </div>
      {/* <div className='timeline timeline-two'></div>
      <div className='timeline timeline-three'></div> */}
    </div>
  );
}

export default App;
