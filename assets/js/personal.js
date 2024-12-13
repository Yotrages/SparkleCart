// Sample product data (replace with your actual product data)
const products = [
    { name: 'Kid wears', imageUrl: 'assets/images/kid-01.jpg' },
    { name: 'kid wears', imageUrl: 'assets/images/kid-02.jpg' },
    { name: 'kid wears', imageUrl: 'assets/images/kid-03.jpg' },
    { name: 'Dell Laptop', imageUrl: 'laptop.jpg' },
    { name: 'Apple MacBook Pro', imageUrl: 'macbook.jpg' },
    { name: 'Nike Running Shoes', imageUrl: 'shoes.jpg' },
    // Add more products here
];

// Function to show suggestions while typing
function showSuggestions() {
	const query = document.getElementById('searchBar').value.toLowerCase();
	const suggestionsList = document.getElementById('suggestionsList');
	suggestionsList.innerHTML = '';  // Clear previous suggestions

	if (query.length > 0) {
		const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

		if (filteredProducts.length === 0) {
			const li = document.createElement('li');
			li.textContent = 'No results found';
			li.classList.add('no-result');
			suggestionsList.appendChild(li);
		}

		filteredProducts.forEach(product => {
			const li = document.createElement('li');
			li.textContent = product.name;
			li.addEventListener('click', () => selectSuggestion(product));
			suggestionsList.appendChild(li);
		});
	}
}

function selectSuggestion(product) {
	const searchBar = document.getElementById('searchBar');
	searchBar.value = product.name;  // Fill the search bar with the selected product name
	const suggestionsList = document.getElementById('suggestionsList');
	suggestionsList.innerHTML = '';  // Clear suggestions

	console.log('Selected product:', product);
}