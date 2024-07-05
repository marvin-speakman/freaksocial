import React from 'react';
// import PropTypes from 'prop-types';


const Events = () => (
  <div>
    <div className="eventHolder">
      <iframe id="open-web-calendar" 
      src="https://open-web-calendar.hosted.quelltext.eu/calendar.html?controls=&amp;tab=agenda&amp;tabs=&amp;url=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fical%2F8fe288255a418ef4c336c7e0cc957978c0508047db9fc554868b6eef0fcd6701%2540group.calendar.google.com%2Fpublic%2Fbasic.ics"
      sandbox="allow-scripts allow-same-origin allow-top-navigation"
      allowTransparency="true" scrolling="no" 
      frameborder="0" height="600px" width="100%"></iframe>
    </div>
  </div>
);

Events.propTypes = {};

Events.defaultProps = {};

export default Events;
