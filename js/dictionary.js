var re = /(,[a-z]+)\+/g;
var re0 = /(,[a-z])([a-z]*)0/g;
var re1 = /(,[a-z]{2})([a-z]*)1/g;
var re2 = /(,[a-z]{3})([a-z]*)2/g;
var re3 = /(,[a-z]{4})([a-z]*)3/g;
var re4 = /(,[a-z]{5})([a-z]*)4/g;
var re5 = /(,[a-z]{6})([a-z]*)5/g;
var re6 = /(,[a-z]{7})([a-z]*)6/g;
var re7 = /(,[a-z]{8})([a-z]*)7/g;
var re8 = /(,[a-z]{9})([a-z]*)8/g;
var re9 = /(,[a-z]{10})([a-z]*)9/g;

var tileScore = new Array(); // Array of scores for letters
tileScore["A"] = 1;
tileScore["B"] = 3;
tileScore["C"] = 3;
tileScore["D"] = 2;
tileScore["E"] = 1;
tileScore["F"] = 4;
tileScore["G"] = 2;
tileScore["H"] = 4;
tileScore["I"] = 1;
tileScore["J"] = 8;
tileScore["K"] = 5;
tileScore["L"] = 1;
tileScore["M"] = 3;
tileScore["N"] = 1;
tileScore["O"] = 1;
tileScore["P"] = 3;
tileScore["Q"] = 10;
tileScore["R"] = 1;
tileScore["S"] = 1;
tileScore["T"] = 1;
tileScore["U"] = 1;
tileScore["V"] = 4;
tileScore["W"] = 4;
tileScore["X"] = 8;
tileScore["Y"] = 4;
tileScore["Z"] = 10;
// Now all the zero scores for blank tiles
tileScore[" "] = 0;
tileScore["a"] = 0;
tileScore["b"] = 0;
tileScore["c"] = 0;
tileScore["d"] = 0;
tileScore["e"] = 0;
tileScore["f"] = 0;
tileScore["g"] = 0;
tileScore["h"] = 0;
tileScore["i"] = 0;
tileScore["j"] = 0;
tileScore["k"] = 0;
tileScore["l"] = 0;
tileScore["m"] = 0;
tileScore["n"] = 0;
tileScore["o"] = 0;
tileScore["p"] = 0;
tileScore["q"] = 0;
tileScore["r"] = 0;
tileScore["s"] = 0;
tileScore["t"] = 0;
tileScore["u"] = 0;
tileScore["v"] = 0;
tileScore["w"] = 0;
tileScore["x"] = 0;
tileScore["y"] = 0;
tileScore["z"] = 0;

//-----------------------------------------------------------------------------
// 
//-----------------------------------------------------------------------------
function checkDictionary(theWord)
{
	theWord = theWord.toLowerCase();
	if (theWord.length == 2) return (D2.indexOf(theWord) != -1);
	first3 = theWord.replace(/^(...).*/, "$1");
	if (typeof(D[first3]) == "undefined") return false;
	var theEntry = D[first3];
	if (!theEntry.match(/,$/)) 
	{
		// We've not looked at this entry before - uncompress it, etc.
		theEntry = theEntry.replace(/W/g, "le");
		theEntry = theEntry.replace(/K/g, "al");
		theEntry = theEntry.replace(/F/g, "man");
		theEntry = theEntry.replace(/U/g, "ous");
		theEntry = theEntry.replace(/M/g, "ment");
		theEntry = theEntry.replace(/B/g, "able");
		theEntry = theEntry.replace(/C/g, "ic");
		theEntry = theEntry.replace(/X/g, "on");
		theEntry = theEntry.replace(/Q/g, "ng");
		theEntry = theEntry.replace(/R/g, "ier");
		theEntry = theEntry.replace(/S/g, "st");
		theEntry = theEntry.replace(/Y/g, "ly");
		theEntry = theEntry.replace(/J/g, "ally");
		theEntry = theEntry.replace(/E/g, "es");
		theEntry = theEntry.replace(/L/g, "less");
		theEntry = theEntry.replace(/Z/g, "ies");
		theEntry = theEntry.replace(/P/g, "tic");
		theEntry = theEntry.replace(/I/g, "iti");
		theEntry = theEntry.replace(/V/g, "tion");
		theEntry = theEntry.replace(/H/g, "zation");
		theEntry = theEntry.replace(/A/g, "abiliti");
		theEntry = theEntry.replace(/O/g, "ologi");
		theEntry = theEntry.replace(/T/g, "est");
		theEntry = theEntry.replace(/D/g, "ed");
		theEntry = theEntry.replace(/N/g, "ness");
		theEntry = theEntry.replace(/G/g, "ing");
		theEntry = "," + theEntry + ",";
		// May have prefixes on prefixes, so need to repeat the replace.
		var more = true;
		while (more) 
		{
			var theLength = theEntry.length;
			theEntry = theEntry.replace(re, "$1$1");
			theEntry = theEntry.replace(re0, "$1$2$1");
			theEntry = theEntry.replace(re1, "$1$2$1");
			theEntry = theEntry.replace(re2, "$1$2$1");
			theEntry = theEntry.replace(re3, "$1$2$1");
			theEntry = theEntry.replace(re4, "$1$2$1");
			theEntry = theEntry.replace(re5, "$1$2$1");
			theEntry = theEntry.replace(re6, "$1$2$1");
			theEntry = theEntry.replace(re7, "$1$2$1");
			theEntry = theEntry.replace(re8, "$1$2$1");
			theEntry = theEntry.replace(re9, "$1$2$1");
			more = (theLength != theEntry.length);
		}
		if (theEntry.match(/[0-@+]/)) 
		{
			alert("decompression oops!");
		}
		D[first3] = theEntry;
	}
	rest = theWord.replace(/^...?/, "");
	return (D[first3].indexOf("," + rest + ",") != -1);
}

function getScore(theWord)
{
	theWord = theWord.toUpperCase();
	var score = 0;
	for (var i = 0; i < theWord.length; ++i)
		score += tileScore[theWord.charAt(i)];
	return score;
}
