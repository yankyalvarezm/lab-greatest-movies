// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const movieCounter = moviesArray.reduce((acc, movie) => {
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
      return acc + 1
    }
    return acc
  }, 0)

  return movieCounter
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const totalScore = moviesArray.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);

  const average = totalScore / moviesArray.length;

  return parseFloat(average.toFixed(2));
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  const isDrama = moviesArray.filter(movie => movie.genre.includes('Drama'));

  if (isDrama.length === 0) {
    return 0
  }

  const scoreCounter = isDrama.reduce((acc, movie) => {
    return acc + (movie.score)
  }, 0)

  const average = scoreCounter / isDrama.length

  return parseFloat(average.toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Make a copy of the original array to avoid modifying it
  let ascending = [...moviesArray];

  ascending.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  return ascending;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titleString = [...moviesArray]
  let title = titleString.map(movie => movie.title).sort()

  return title.slice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    let duration = movie.duration;
    let hours = 0, minutes = 0;

    if (duration.includes('h')) {
      hours = parseInt(duration.split('h')[0], 10) * 60;
    }
    if (duration.includes('min')) {
      minutes = parseInt(duration.split('min')[0].split(' ').pop(), 10);
    }

    return {
      ...movie,
      duration: hours + minutes
    };
  });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
