"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
// const summary = new Summary(
// 	new WinsAnalysis('Man United'),
// 	// new ConsoleReport(),
// 	new HtmlReport()
// );
