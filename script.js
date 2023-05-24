let mapping = {
	"0" : "0",
	"1" : "1",
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
function helper(idx,ans,sstr){
  // 	console.log(idx)
  	if(idx >= sstr.length){
		res.push(ans);
		// console.log(res)
		return;
	}
	let currstr = mapping[sstr[idx]]
// 	console.log(currstr)
	for(let i = 0; i < currstr.length;i++){
		helper(idx + 1, ans + currstr[i],sstr);
	}
	return res.sort();
}
function letterCombinations(input_digit) {
  //Complete the function
  return helper(0,"",input_digit);
  

}
module.exports = letterCombinations;