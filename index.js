let carts = document.querySelectorAll('.add-cart');
let products = [
	{
		name: 'Grey tshirt',
		tag: 'greyti',
		price: 15,
		inCart: 0
	},

	{
		name: 'nourog doll',
		tag: 'nrski',
		price: 43,
		inCart: 0
	},
	{
		name: 'jodo bida',
		tag: 'wala',
		price: 20,
		inCart: 0
	}
]

for(let i=0;i < carts.length; i++){
	carts[i].addEventListener('click', () => {
		cartNumbers(products[i]);
	})
}

function onLoadCartNumbers(){
	let productNumbers =  localStorage.getItem('cartNumbers');
		if(productNumbers){
			document.querySelector('.cart span').textContent = productNumbers;
		}
	}
 
function cartNumbers(product){
	console.log("the product clicked is", product);
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	if(productNumbers){
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
	}else{
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
	}

	setItems(product);
}

function setItems(product){
	let cartItems = localStorage.getItem('productsIncart');
	cartItems = JSON.parse(cartItems);
	if(cartItems != null){
		if (cartItems[product] != undefined) {
			cartItems = {
				...cartItems, 
				[product]: product
			}
		}
		cartItems[product]+= 1;
	}else{
	
		cartItems = {
			[product]: product
		}
	}	
	cartItems = {
		[product]: product
	}
	localStorage.setItem("productsIncart", JSON.stringify(cartItems));
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