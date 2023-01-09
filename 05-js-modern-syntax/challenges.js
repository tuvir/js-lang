'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// TASK 1
console.log(`TASK 1`);
const [players1, players2] = game.players;
console.log(players1, players2);
// TASK 2
console.log(`\nTASK 2`);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// TASK 3
console.log(`\nTASK 3`);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// TASK 4
console.log(`\nTASK 4`);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// TASK 5
console.log(`\nTASK 5`);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// TASK 6
console.log(`\nTASK 6`);
function printGoals(...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(game.scored[i]);
  }
  console.log(`Total goals scored: ${players.length}`);
}

printGoals(...game.scored);
// TASK 7
console.log(`\nTASK 7`);
team1 < team2 && console.log('Team 1 won!');
team1 > team2 && console.log('Team 2 won!');
