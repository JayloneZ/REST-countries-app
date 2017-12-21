const CountryInfo = function () {
  this.ul = document.querySelector('#country-info');
}

CountryInfo.prototype.render = function (country) {
	console.log(country);
  // TODO: Render country info
	this.ul.innerText = '';
	const countryName = this.createListItem('Name', country.name);
	const countryRegion = this.createListItem('Region', country.region);
	const countrySubregion = this.createListItem('Subregion', country.subregion);
	const countryCapital = this.createListItem('Capital', country.capital);
	this.ul.appendChild(countryName);
	this.ul.appendChild(countryRegion);
	this.ul.appendChild(countrySubregion);
	this.ul.appendChild(countryCapital);
}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  return li;
}

module.exports = CountryInfo;
