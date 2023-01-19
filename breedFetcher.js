const request = require('request');

const fetchBreedDescription = (breed, callback) => {

  const page = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


  request(page, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      callback(error, null);
    }

    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback("No breed", null);
    }
  });
};






    // if (response.statusCode !== 200) {
    //   console.log('error:', error);
    //   console.log('statusCode:', response && response.statusCode);
    //   return;
    // }




    //console.log('body:', body);

    // console.log(data);
    // console.log(typeof data);
    // console.log(data[0].description);


module.exports = { fetchBreedDescription };