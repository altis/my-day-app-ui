
import MonthlyCalendar from './Calendar';
import 'react-calendar/dist/Calendar.css';
import React from 'react';
import HeaderBar from './HeaderBar';

class Container extends React.Component {
  
 render() {
    return (
      <div>
        <HeaderBar></HeaderBar>
        <div class="my-day-app--frame">
          <MonthlyCalendar></MonthlyCalendar>
        </div>
      </div>
    )
 }
}

export default Container;
