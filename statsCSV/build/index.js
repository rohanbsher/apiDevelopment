"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// We can read any file with read file sync
// we expect text content encoded in utf-8 which means 
// give us a string back or else it will return a buffer
// matched contains all the data from the csv file
const matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n').map((row) => {
    return row.split(',');
});
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === "Man United" && match[5] === "H") {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === "A") {
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
