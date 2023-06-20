const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');
const countries = ['USA', 'Canada', 'France', 'Germany', 'Japan', 'Australia'];

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().startsWith(searchTerm)
  );

  suggestionsList.innerHTML = '';

  filteredCountries.forEach((country) => {
    const li = document.createElement('li');
    li.textContent = country;
    suggestionsList.appendChild(li);
  });
});
