const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	return fruit.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));//create return filter path with lowercase values to match input
}

function searchHandler(e) {
	const inputValue = e.target.value.toLowerCase();//lowercase to match fruit stated above

	if (inputValue.length) {//make sure there is some value
		let results = search(inputValue);
		if (results.length === 0) {//this will return the input if no results were found
			inputFruit.value = "";
			listSuggestions.innerHTML = "";
		}
		else {
			showSuggestions(results, inputValue);//this should return fruit suggestions that match
		}
	}
}


function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

	const limitedResults = results.slice(0, 10);//limit the results available to 10
	limitedResults.forEach(results => {
		const suggestionItem = document.createElement('LI');//create a line for available suggestion
		suggestionItem.textContent = results;//place results in the new li created
		suggestionItem.classList.add('suggestion');//give class of suggestion to each available fruit
		suggestions.appendChild(suggestionItem);//this will add the next suggestion to the bottom of UL
	});



}

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {//create event on new suggestion list
		input.value = e.target.textContent;//create if input matches any on the search
		suggestions.style.display = 'none';
	}
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);