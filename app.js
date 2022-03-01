// phones result load
document.getElementById('button-addon2').addEventListener('click', () => {
  searchBox = document.getElementById('search-box');
  searchText = searchBox.value;
  searchBox.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
})
// display phone result
const displaySearchResult = mobiles => {
  const searchresult = document.getElementById("search-result");
  const detailSection = document.getElementById('showFullDetails');
  detailSection.innerHTML = '';
  searchresult.innerHTML = '';
  mobiles = mobiles.slice(0, 20);
  if (mobiles.length > 0) {
    mobiles.forEach(mobile => {
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
          <div class="card shadow-sm">
            <img src="${mobile.image}" class="card-img-top w-auto m-auto p-3" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">${mobile.brand}</h5>
              <h5 class="card-text">${mobile.phone_name}</h5>
              <a href="#" onclick="showDetails('${mobile.slug}')" class="btn btn-primary">details</a>
            </div>
          </div>
    `
      searchresult.appendChild(div);
    })
  }
  else {
    searchresult.innerHTML = `<h1 class="w-100 text-center">No Phone Found</h1>`
  }
}
// single phone data load
const showDetails = phoneId => {
  const idUrl = `https://openapi.programming-hero.com/api/phone/${phoneId}`
  fetch(idUrl)
    .then(res => res.json())
    .then(data => detailsResult(data.data));
}
// single phone details
const detailsResult = details => {
  const section = document.getElementById("showFullDetails");
  section.innerHTML = `
      <div class="card shadow-sm my-3 mx-auto text-start  container-sm">
          <img src="${details.image}" class="card-img-top w-auto m-auto p-2" alt="...">
          <div class="card-body">
            <h5 class="card-title">${details.brand}</h5>
            <h5 class="card-text">${details.name}</h5>
            <p>${details.releaseDate ? details.releaseDate : "no release found"}</p>
          <h5>Features</h5>
          <p> <strong>Chip Set : </strong>${details.mainFeatures.chipSet}</p>
          <p> <strong>Disply : </strong>${details.mainFeatures.displaySize}</p>
          <p> <strong>Memory : </strong>${details.mainFeatures.memory}</p>
          <p> <strong>Sensors : </strong>${details.mainFeatures.sensors}</p>
          <p> <strong>Storage : </strong>${details.mainFeatures.storage}</p>
          <h5>Others</h5>
          ${details.others ?
      `<p> <strong>Bluetooth : </strong>${details.others.Bluetooth}</p>
        <p> <strong>GPS : </strong>${details.others.GPS}</p>
        <p> <strong>NFC : </strong>${details.others.NFC}</p>
        <p> <strong>Radio : </strong>${details.others.Radio}</p>
        <p> <strong>USB : </strong>${details.others.USB}</p>
        <p> <strong>WLAN : </strong>${details.others.WLAN}</p>`
      :
      `<p>NO Other Details Found</p>`
    }
          </div>
      </div>
    `
}