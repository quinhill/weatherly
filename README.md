# Weatherly

### Description

Weatherly is a web app allowing for the search of weather reports for an array of cities around the United States.

![](https://media.giphy.com/media/EQecKfVenVxaTLsEGW/giphy.gif)

### Deployed Site

[Weatherly](https://weatherly-1803.herokuapp.com/)

### Goals

Weatherly is a pair project during the second module of Turing School of Software and Design's Front End Development program. Our goal was to become familiar with API fetch calls and learn React, by building a functional app with a intuitive design. We accomplished this in a two week time-frame.

### Installing

Before reading the instructions on how to install this, you must get an API key from [Weather Underground](https://www.wunderground.com/weather/api/). Without an API key, Weatherly will not be able to retrieve the real time weather data.

To run Weatherly on your local computer, run the following command to clone this repo:

`git clone git@github.com:quinhill/weatherly.git`

Once the repo has been cloned down, cd into it, and run:

`npm install`

That command will install the dependencies.

Then create a file named `apiKey.js` within the `src` folder with this command:

`touch src/apiKey.js`

Inside this file, copy and paste the following variable, replacing the string `YOUR_API_KEY` with the API key you received from Weather Underground inside the quotes.

`export const apiKey = 'YOUR_API_KEY'`

Finally, run this command, which should open the app in your browser:

`npm start`

### Tech Stack

* React
* Enzyme/Jest

### API

[Weather Underground](https://www.wunderground.com/weather/api/)

### Authors

- Spenser Leighton [GitHub](https://github.com/spenserleighton1)/[Turing profile](https://alumni.turing.io/alumni/spenser-leighton)
- Quinlan Hill [GitHub](https://github.com/quinhill)/[Turing profile](https://alumni.turing.io/alumni/quinlan-hill)
