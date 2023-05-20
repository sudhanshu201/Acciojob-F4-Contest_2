window.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(response => response.json())
    .then(data => renderTable(data))
    .catch(error => console.log('Error fetching data:', error));
}

function renderTable(data) {
  const tableBody = document.querySelector('#cryptoTable tbody');

  data.forEach(item => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const idCell = document.createElement('td');
    idCell.textContent = item.id;
    row.appendChild(idCell);

    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;
    image.width = 25;
    image.height = 25;
    imageCell.appendChild(image);
    row.appendChild(imageCell);

    const symbolCell = document.createElement('td');
    symbolCell.textContent = item.symbol;
    row.appendChild(symbolCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = item.current_price;
    row.appendChild(priceCell);

    const volumeCell = document.createElement('td');
    volumeCell.textContent = item.total_volume;
    row.appendChild(volumeCell);

    tableBody.appendChild(row);
  });
}
