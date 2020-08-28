// Iteration 1: All directors? - Get the array of all directors.
/*
const movies = [
    {
      title: 'Paths of Glory',
      year: 1957,
      director: 'Stanley Kubrick',
      duration: '1h 28min',
      genre: ['Drama', 'War'],
      rate: 8.4
    },
 {
        title: 'Django Unchained',
        year: 2012,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        rate: 8.4
      }]
*/

  function getAllDirectors(array) {
    return array.map( film => film.director);
}
//const map1 = array1.map(x => x * 2);

//console.log(getAllDirectors(movies))

  // racines vaut désormais [1, 2, 3]
  // nombres vaut toujours [1, 4, 9]

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array2) {
 var spielbergDramaMovies = array2.filter(film2 => film2.director==="Steven Spielberg" && film2.genre.includes("Drama"));
  return spielbergDramaMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

/*
const movies = [
    {
      title: 'Paths of Glory',
      year: 1957,
      director: 'Stanley Kubrick',
      duration: '1h 28min',
      genre: ['Drama', 'War'],
      rate: 7
    },
    {
        title: 'Django Unchained',
        year: 2012,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        rate: 9
      },
      {
        title: 'Django Unchained',
        year: 2012,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        rate: 9
      }
    ]
*/

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

 //console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
