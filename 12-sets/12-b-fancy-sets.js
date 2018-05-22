const holidays = new Set();

holidays.add(new Date("January 1, 2018"));
holidays.add(new Date("July 4, 2018"));
holidays.add(new Date("December 31, 2018"));
holidays.add(new Date("December 31, 2018"));

holidays.forEach(holiday => console.log(holiday.getMonth()));
