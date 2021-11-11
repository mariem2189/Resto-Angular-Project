// app.post('/', (req,res) => {
//     const country = req.body.country;
//     const apiKey= '62ee756a34835483299877a61961cafb';
//     const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ country +'&appid='+ apiKey;
//     https.get(apiUrl, (request,response) => {
//         console.log('response', response);
//         response.on('data', data => {
//             const weather = JSON.parse(data);
//             console.log('weather', weather);
//             const tempMin = weather.main.temp_min;
//             console.log('tempMin',tempMin);
//             const tempMax = weather.main.temp_max;
//             const gettedCountry = weather.sys.country;
//             console.log('gettedCountry',gettedCountry);
//             const wind = weather.wind.speed;
//             console.log('wind',wind);
//             const icon = weather.weather[0].icon;
//             const iconUrl = "https://openweathermap.org/img/w/" + icon + ".png";
//             res.send('gettedCountry ' + gettedCountry + ' Temp ' + tempMax + 'wind ' + wind  );
//         });
//     });
// });

const express = require("express");
const https = require("https");
const axios = require("axios");
const router = express.Router();
router.post("/search", (req, res) => {
  const country = req.body.country;
  const apiKey = "62ee756a34835483299877a61961cafb";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    country +
    "&appid=" +
    apiKey + "&units=metric";

  axios
    .get(apiUrl)
    .then((response) => {
      console.log('Here response', response);
      const weather = response.data.main;
      console.log('Here weather  main', weather);
      const result = {
          temp: weather.temp,
          pressure: weather.pressure,
          humidity:weather.humidity
      }

      res.status(200).json({
          result:result
      })
    });
});

module.exports = router;
