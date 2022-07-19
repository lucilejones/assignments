const axios = require("axios");
// imports axios
// require() is understood in node, but not in the browser
// To use Axios on the front-end vs with node, just use the cdn.<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

axios.get('https://swapi.dev/api/people/1').then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error)
});