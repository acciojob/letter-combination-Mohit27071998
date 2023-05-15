let mapping = {
	"2":"abc",
	"3":"def",
	"4":"ghi",
	"5":"jkl",
	"6":"mno",
	"7":"pqrs",
	"8":"tuv",
	"9":"wxyz"
}
let res = [];
let sstr = "23";


function letterCombinations(input_digit,ans) {
  //Complete the function
	if(input_digit > sstr.length){
		res.push(ans);
		return;
	}
	let currstr = mapping[sstr[input_digit]]
	for(let i = 0; i < currstr.length;i++){
		solve(input_digit + 1, ans + currstr[i]);
	}
}

module.exports = letterCombinations;
