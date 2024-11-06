import React from 'react'
import Cards from './Cards'
import img1 from '../../assets/bg2.jpg'
import DaySelector from './DaySelector'
import { useState } from 'react';
function Event() {
    const [selectedDay, setSelectedDay] = useState(1);
    const eventsOfDay1=[
        {
            id:1,
            title:"Registration",
            time:"09:00 AM - 09:15 AM",
            location:"GJLT",
            src:img1
        },
        {
            id:2,
            title:"Inaugural Session",
            time:"09:15 AM - 10:30 AM",
            location:"GJLT",
            src:img1
        },
        {
            id:3,
            title:"Group Photo & High Tea Break",
            time:"10:30 AM - 11:00 AM",
            location:"RamDhani",
            // location:"Location 3",
            src:img1
        },
        {
            id:4,
            title:"Plenary Session - 1",
            time:"11:00 AM - 01:00 PM",
            location:"GJLT",
            src:img1
        },
        {
            id:5,
            title:"Lunch Break",
            time:"01:00 PM - 02:30 PM",
            location:"GJLT",
            src:img1
        },
        {
            id:6,
            title:"Plenary Session - 2",
            time:"02:30 PM - 04:30 PM",
            location:"New Lecture Auditorium",
            src:img1
        },
        {
            id:7,
            title:"Tea Break",
            time:"04:00 PM - 04:30 PM",
            location:"New Lecture Auditorium",
            src:img1
        },
        {
            id:8,
            title:"Plenary Session - 3",
            time:"04:30 PM - 05:30 PM",
            location:"New Lecture Auditorium",
            src:img1
        },
        {
            id:9,
            title:"Gala Dinner",
            time:"06:30 PM - 08:30 PM",
            location:"Scolomin Club",
            src:img1
        }
    ]
    const eventsOfDay2=[
        {
            id:1,
            title:"Concluding Session and Valedictory function",
            time:"09:00 AM - 11:00 AM",
            location:"GJLT",
            src:img1
        },
        {
            id:2,
            title:"Leisure Activity",
            time:"11:00 AM - 05:30 PM",
            location:"GJLT",
            src:img1
        }
    ]
  return (
    <div className='mt-16 flex flex-wrap justify-center flex-col align-middle items-center gap-7'>
       <div className='flex flex-wrap justify-center flex-col align-middle items-center gap-4'>
       <h1 className='text-xl font-Ubuntu font-bold text-blue-900'>Event Sechdule</h1>
       <h1 className='text-5xl font-Ubuntu font-bold text-black'>Follow the Event Schedule</h1>
       </div>
       <div>
        <DaySelector activeDay={selectedDay} setActiveDay={setSelectedDay} />
       </div>
        <div className='flex flex-wrap justify-center flex-col gap-10 align-middle items-center'>
        {selectedDay === 1 && eventsOfDay1.map((event) => <Cards key={event.id} src={event.src} title={event.title} location={event.location} time={event.time} />)}
        {selectedDay === 2 && eventsOfDay2.map((event) => <Cards key={event.id} src={event.src} title={event.title} location={event.location} time={event.time} />)}
    </div>
    </div>
  )
}

export default Event
