fetch('https://docs.google.com/spreadsheets/d/1Fh8ZQxgz1HPUmxfXEx7VKjnDkYrAX7tEAWMW4HI2ZrY/edit?usp=sharing')
   .then(function (response) {
      return response.text();
   })
   .then(function (text) {
	csvToSeries(text);
   })
   .catch(function (error) {
      //Something went wrong
      console.log(error);
   });

function csvToSeries(text) {
   console.log(text);
}