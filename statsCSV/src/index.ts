import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();



const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

// const summary = new Summary(
// 	new WinsAnalysis('Man United'),
// 	// new ConsoleReport(),
// 	new HtmlReport()
// );


