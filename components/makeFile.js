import axios from "axios";
import fs from "fs";

const makeFile = (url, filename) => {
  axios
    .get(url)
    .then((result) => {
      fs.writeFile(
        `../data/${filename}`,
        JSON.stringify(result.data),
        (err) => {
          console.error(err);
        }
      );
    })
    .catch((err) => {
      console.error(err);
    });
};

makeFile(
  "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json",
  "leagueData.json"
);

makeFile("https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.clubs.json", "teamData.json")
