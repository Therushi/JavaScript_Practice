fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return console.log(response.json);
  })
  .then((data) => {
    let joke = data.id;
    console.log(data);
  })
  .catch();
