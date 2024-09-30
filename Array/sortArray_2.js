let arr = [90, 1, 20, 14, 3, 55];
var sortRes = [];
var copy = arr.slice();		//create duplicate array
var inc = 0;	//inc meant increment
copy.sort((a, b) => {
	sortRes[inc] = [ a, b, a-b ];
	inc += 1;
	return a - b;
});
var p = 0;
for (var i = 0; i < inc; i++) {
	copy = arr.slice();
	copy.sort((a, b) => {
		p += 1;
		if (p <= i ) {
			return a - b;
		}
		else{
			return false;
		}
	});
	p = 0;
	console.log(copy +' \t a: '+ sortRes[i][0] +' \tb: '+ sortRes[i][1] +'\tTotal: '+ sortRes[i][2]);
}