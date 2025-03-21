const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans=[]
	
	for(let i=0;i<arr.length;i++){
		let sum=0
		for(let j=i;j<arr.length;j++){
			sum+=arr[j]
			if(sum<=n) ans.push(arr.slice(i,j+1))
		}
	}
	return ans
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
