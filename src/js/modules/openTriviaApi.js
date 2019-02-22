const mainUrl = 'https://opentdb.com/api.php?'
// amount=10&difficulty=easy&type=multiple
const getData = (amount) => {
  let url = mainUrl + 'amount=' + amount + '&difficulty=easy&type=multiple'
  console.log(url)

  return fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (myJson) {
      // console.log(JSON.stringify(myJson));
      // console.log(myJson)
      return myJson.results
    })
}

export default getData
