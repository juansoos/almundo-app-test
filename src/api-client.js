const url = 'https://api-rest-almundo.now.sh/api/v1';

function getHotels() {
  return fetch(`${url}/hotels`)
    .then(res =>  res.json())
    .then(hotels => hotels)
}

export { getHotels };
