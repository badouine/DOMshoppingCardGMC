let carts = document.querySelectorAll('.add-cart');

for(let i=0;i < carts.length; i++){
	carts[i].addEventListener('click', () => {
		cartNumbers();
	})
}

function onLoadCartNumbers(){
	let productNumbers =  localStorage.getItem('cartNumbers');
		if(productNumbers){
			document.querySelector('.cart span').textContent = productNumbers;
		}
	}
 
function cartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	if(productNumbers){
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
	}else{
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
	}
}

onLoadCartNumbers();


//  Write a function that replaces each integer with the next largest in the array.



/* 

function replaceNextLargest(arr) { 
	var max = Math.max(...arr);
	var tab = [];
  var max2 =  Math.max(...tab);
	const replace = -1;
	for(i=0 ; i < arr.length; i++){
		if(arr[i] < max || arr[i] === max) {
			tab.push(arr[i]);
			arr[i] = replace;
		}
		for(j=0 ; j < tab.length ; j++){
			if(tab[j] < max2){
				return tab.splice(tab[j], j , max2);
			}
		}
	}
	return tab;
} 

*/