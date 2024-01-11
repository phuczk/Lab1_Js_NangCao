const game = {
    tem1: 'Bayern Munich',
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
// yeu cau 1
const player1 = game.players[0];
const player2 = game.players[1];
console.log(player1, player2);

// yeu cau 2
// const gkTeam1 = player1[0];
// const gkTeam2 = player2[0];
// const fieldPlayersTeam1 = player1.slice(player1.shift());
// const fieldPlayersTeam2 = player2.slice(player2.shift());
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//yeu cau 3
const allPlayers = player1.concat(player2);
console.log(allPlayers);

// yeu cau 4
const players1Final = [...player1, "Thiago", 'Coutinho', 'Periscic'];

// yeu cau 5
const {odds: {team1, x: draw, team2},} = game;
console.log(team1, draw, team2);

//yeu cau 6
const printGoals = (...players) => {
    console.log(players);
    console.log(`${players.length} goals were scored`);
}
printGoals(...game.scored);

//yeu cau 7
team1 < team2 && console.log("team 1 is more likely to win");
team2 < team1 && console.log("team 2 is more likely to win");