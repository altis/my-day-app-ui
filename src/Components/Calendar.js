import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

function MonthlyCalendar() {
  const [dateState, setDateState] = useState(new Date());
  const [toDolistState, setToDolistState] = useState(['EMPTY']);
  async function postJSON(data) {
    try {
      const response = await fetch("http://localhost:9999/getToDoList", {
        method: "POST", 
       
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"day": data}),
      });
      
      const result = await response.json();
      setToDolistState(result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const changeDate = (e) => {
    setDateState(e);
    postJSON(moment(e).format('D'));
  }
  return (
    <>
      <Calendar
      value={dateState}
      onChange={changeDate}
      />
    <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
    <p>ToDoList</p>
    <p>{JSON.stringify(toDolistState.list)}</p>
    </>
  )
}



export default MonthlyCalendar;
