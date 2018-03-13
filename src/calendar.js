import React, {Component} from 'react';

class Calendar extends Component {
	constructor(props) {
		super(props);

		this.handleClick.bind(this)
	}

  	handleClick(e) {
    	console.log("Add a modal dog")
  	}

	render() {

	// Empty calendar
	let calendar = [];

	// Days of the week
	let day = ["Monday", "Tuesday", "Wednesday", 
		"Thursday", "Friday", "Saturday", "Sunday"]

	// Itterate the days using this function
	function nextDay(month){ 
		switch (monthStart[month].day) {
			case "Monday":
				monthStart[month].day = "Tuesday"
				break;
			case "Tuesday":
				monthStart[month].day = "Wednesday"
				break;
			case "Wednesday":
				monthStart[month].day = "Thursday"
				break;
			case "Thursday":
				monthStart[month].day = "Friday"
				break;
			case "Friday":
				monthStart[month].day = "Saturday"
				break;
			case "Saturday":
				monthStart[month].day = "Sunday"
				break;
			case "Sunday":
				monthStart[month].day = "Monday"
				break;
		}
	}

	// Month facts, include month, date(always one), the 1st day of the month and the month length
	let monthStart = [
		{month: "January", date: 1, day: day[0], length: 31},
		{month: "February", date: 1, day: day[3], length: 28},
		{month: "March", date: 1, day: day[3], length: 31},
		{month: "April", date: 1, day: day[6], length: 30},
		{month: "May", date: 1, day: day[1], length: 31},
		{month: "June", date: 1, day: day[4], length: 30},
		{month: "July", date: 1, day: day[6], length: 31},
		{month: "August", date: 1, day: day[2], length: 31},
		{month: "September", date: 1, day: day[5], length: 30},
		{month: "October", date: 1, day: day[0], length: 31},
		{month: "November", date: 1, day: day[3], length: 30},
		{month: "December", date: 1, day: day[5], length: 31}
	]

	// For loop to popluate the calendar
	for (var i = 0; i < monthStart.length; i++) {
		while (monthStart[i].date <= monthStart[i].length) {
			calendar.push({month: monthStart[i].month, date: monthStart[i].date, day: monthStart[i].day})
			monthStart[i].date++;
			nextDay(i);
		}
	}


	// Months of the year
	const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Create new date object
    const date = new Date();

    // Get current month
    const month = monthNames[date.getMonth()];

    // Abbreviated days
    const abbrDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    // Add abbrDays as HTML
    const logDays = abbrDays.map((day) => <th>{day}</th>);

	// Intention to insert html calendar element, could not find a way. Should probably rename 
	let calHTML = []
	for(var i = 0; i < calendar.length; i++) {
		if (calendar[i].month === month) {
			calHTML.push(calendar[i])
		}
	}

	// Insert empty tr's at beginning of calendar
	function addBeginning() {
		let w = 0;
		switch (calHTML[0].day) {
			case "Monday":
				while(w< 1) {
					calHTML.unshift(<tr>{}</tr>);
					w++;
				}
				break;
			case "Tuesday":
				while(w< 2) {
					calHTML.unshift(<tr>{}</tr>);
					w++;
				}		
				break;
			case "Wednesday":
				while(w< 3) {
					calHTML.unshift(<tr>{}</tr>);
					w++;
				}		
				break;
			case "Thursday":
				while(w< 4) {
					calHTML.unshift(<tr>{''}</tr>);
					w++;
				}		
				break;
			case "Friday":
				while(w< 5) {
					calHTML.unshift(<tr>{}</tr>);
					w++;
				}		
				break;
			case "Saturday":
				while(w< 6) {
					calHTML.unshift(<tr>{}</tr>);
					w++;
				}		
				break;
		}
	}

	// Call addBeginning and then map calHTML to mapDays
	addBeginning();
	let mapDays = calHTML.map((day) => {
		if (day.date === date.getDate()){
			return <td className="current-day" onClick={this.handleClick}>{day.date}</td>
		} else {
			return <td onClick={this.handleClick}>{day.date}</td>
		}
	});

	// Split days into weeks to add to calendar HTML, try to add to an array
	let week1 = mapDays.splice(0, 7);
	let week2 = mapDays.splice(0, 7);
	let week3 = mapDays.splice(0, 7);
	let week4 = mapDays.splice(0, 7);
	let week5 = mapDays.splice(0, 7);
	let week6 = mapDays.splice(0, 7);

		
		return (
			<div>
        <table className="table table-bordered">
          <tbody>
          <tr><th colSpan="7" className="month"><strong>{month} - {date.getFullYear()}</strong></th></tr>
          <tr>
            {logDays}
          </tr>
				<tr>
					{week1}
				</tr>
				<tr>
					{week2}
				</tr>
				<tr>
					{week3}
				</tr>
				<tr>
					{week4}
				</tr>
				<tr>
					{week5}
				</tr>
				{week6.length > 0 &&
					<tr>
						{week6}
					</tr>
				}
				</tbody>
			</table>
			</div>
		)
	}
}

export default Calendar;