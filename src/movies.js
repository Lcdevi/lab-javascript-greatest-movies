// Iteration 1: All directors? - Get the array of all directors.

  function getAllDirectors(array) {
    return array.map( film => film.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array2) {
 var spielbergDramaMovies = array2.filter(film2 => film2.director==="Steven Spielberg" && film2.genre.includes("Drama"));
  return spielbergDramaMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array3){
  const copy3 = [...array3]
  var arrOfRates = copy3.map(a => a.rate);
  var arrOfNumRates = arrOfRates.filter(b => typeof b === "number")
  var sumOfRates = arrOfNumRates.reduce(function (a,b){
    return a +b
  },0 )
  if (copy3.length === 0)
  return 0;
  else return Number((sumOfRates/arrOfRates.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array4){
    var dramaMovies = array4.filter(film4 => film4.genre.includes("Drama"))
        
            var rates = dramaMovies.map(film42 => film42.rate); 
        if(rates.length > 0) {
            const reducer = (acc, p) => acc + p;
            var average = rates.reduce(reducer, 0)/rates.length;
            console.log(dramaMovies);
            console.log(rates);
            console.log(average)
            } else { average = 0;}
            return Number(average.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

/*
const movies = [
    {
      title: 'Paths of Glory',
      year: 3333,
      director: 'Stanley Kubrick',
      duration: '1h 28min',
      genre: ['Drama', 'War'],
      rate: 7
    },
    {
        title: 'Django Unchained',
        year: 0,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        rate: 9
      },
      {
        title: 'Django Unchained',
        year: 1,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        rate: 9
      }
    ]
*/


function orderByYear(array5){
  const copy5 = [...array5];
  var sortYears = copy5.sort(function(a,b){
    if(a.year < b.year){
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else if (a.year === b.year) {
      if(a.title < b.title){
        return -1
      } else if (a.title > b.title) {
        return 1;
      } else {return 0;}
    }
  })

 return sortYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

//const movies = [{ title: 'zert' }, {title: 'azer'}, {title: 'fer'}]

function orderAlphabetically(array6){
  const copy6 = [...array6];
  var getOnlyTitles = copy6.map(str => str.title)
  console.log(getOnlyTitles)
  var sortTitles = getOnlyTitles.sort(function(a,b){
    if(a < b){
      return -1;
    } else if (a > b) {
      return 1;
    } return 0;  
  });
  var sort20Only = sortTitles.slice(0,20);

  return sort20Only;

}

//console.log(orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
