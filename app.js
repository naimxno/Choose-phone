document.getElementById('button-addon2').addEventListener('click', () => {
  searchBox = document.getElementById('search-box');
  searchText = searchBox.value;
  searchBox.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
})

const displaySearchResult = mobiles => {
  const searchresult = document.getElementById("search-result");
  mobiles.forEach(mobile => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
          <div class="card shadow-sm">
            <img src="${mobile.image}" class="card-img-top w-75 m-auto p-3" alt="...">
            <div class="card-body">
              <h5 class="card-title">${mobile.brand}</h5>
              <h5 class="card-text">${mobile.phone_name}</h5>
              <a href="#" onclick="showDetails('${mobile.slug}')" class="btn btn-primary">details</a>
            </div>
          </div>
    `
    searchresult.appendChild(div);
  })
}

const showDetails = phoneId => {
  const idUrl = `https://openapi.programming-hero.com/api/phone/${phoneId}`
  fetch(idUrl)
    .then(res => res.json())
    .then(data => detailsResult(data.data));
}

const detailsResult = details => {
  console.log(details);
  const section = document.getElementById("showFullDetails");
  section.innerHTML = `
      <div class="card shadow-sm my-3 mx-auto text-start  container-sm">
          <img src="${details.image}" class="card-img-top w-50 m-auto p-2" alt="...">
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
          <p> <strong>Bluetooth : </strong>${details.others.Bluetooth}</p>
          <p> <strong>GPS : </strong>${details.others.GPS}</p>
          <p> <strong>NFC : </strong>${details.others.NFC}</p>
          <p> <strong>Radio : </strong>${details.others.Radio}</p>
          <p> <strong>USB : </strong>${details.others.USB}</p>
          <p> <strong>WLAN : </strong>${details.others.WLAN}</p>
          </div>
      </div>
    `
}




// const detailsResult = details => {
//   // console.log(details);
//   const sectionInnerDiv = document.getElementById("showPhoneDetails");
//   const section = document.getElementById("showFullDetails");
//   const x = section.querySelector('div')
//   if (x.children.length > 0) {
//     section.removeChild(x);
//   }
//   // console.log(x.children.length);
//   const div = document.createElement('div');
//   div.setAttribute('class', 'card shadow-sm my-3');
//   div.innerHTML = `
//         <div>
//           <img src="${details.image}" class="card-img-top w-25 m-auto p-3" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">${details.brand}</h5>
//             <h5 class="card-text">${details.name}</h5>
//           </div>
//         </div>
//         <div>

//         </div>
//     `
//   sectionInnerDiv.appendChild(div);
// }