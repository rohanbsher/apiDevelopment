import fs from 'fs';

// We can read any file with read file sync
// we expect text content encoded in utf-8 which means 
// give us a string back or else it will return a buffer
// matched contains all the data from the csv file
const matches = fs.readFileSync('football.csv', {
	  encoding: 'utf-8'
}).split('\n').map((row: string): string[] => {
	return row.split(',')
})

// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';

// enum - enumeration
// a collection of closely related values
enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D'
};

let manUnitedWins = 0;

for(let match of matches) {
	if(match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	}
	else if(match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
}

console.log(`Man United won ${manUnitedWins} games`);

// console.log(matches);

// const dataArr = matches.split(',');

// interface SoccerDate {
// 	date: string;
// 	homeTeam: string;
// 	awayTeam: string;
// 	homeScore: number;
// 	awayScore: number;
// 	winner: string;
// 	referee: string;
// 	homeTeamGoals: string;
// 	awayTeamGoals: string;
// }


// console.log(dataArr);

