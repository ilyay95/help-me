module.exports = function count(s, pairs) {
  // your implementation
   let N = 1;
  let arr = [];
  let count = 0;
  let sum = 1;

  for (let i = 0; i < pairs.length; i++) {
    N *= pairs[i][0];
    if (pairs[i][1] !== 1) {
      sum = pairs[i][0] ** (pairs[i][1] - 1);
    }
  }
	if(N > 100000000) {
    return count;
  
}
	for(let k = 1; k <= N; k++) {
		for(let j = 0; j < s.length; j++) {

      if(s[j] === '1') {
        if(evklid(k + j, N) === 1){
           arr.push(true) }
        else{ arr.push(false);}
      }
      	else if(s[j] === '0') {
          if(evklid(k + j, N) !== 1){ 
             arr.push(true);}
          else{ 
               arr.push(false);}}
		}
		if(logic(arr) === true) {
      count++;
    }

		arr.length = 0;
	}
	return count * sum;
}

let logic = function(arr) {
  let b00l = true;

	for(let i = 0; i < arr.length; i++) {
		b00l = b00l && arr[i];
	}
	return b00l;
}

let evklid = function(a, b) {
  
  while (true) {
    if (b === 0) return a;
    a %= b;
    if (a === 0) return b;
    b %= a;
  }
}
}
