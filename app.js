
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
  searchresult = document.getElementById("search-result");
  mobiles.forEach(mobile => {
    console.log(mobile);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
          <div class="card">
            <img src="${mobile.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${mobile.brand}</h5>
              <h5 class="card-text">${mobile.phone_name}</h5>
              <a href="#" class="btn btn-primary">details</a>
            </div>
          </div>
    `
    searchresult.appendChild(div);
  })
}