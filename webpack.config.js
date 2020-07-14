// Import the Path package from node_modules folder
// We didn't need to NPM install path because it is part of the Node.js library
const path = require('path')

module.exports = {
    entry: './app/assets/scripts/App.js',
    
    // Set output file name and location
    output: {
        filename: 'bundled.js',

        // Get and set absolute path. Webpack requires an absolute path
        path: path.resolve(__dirname, 'app'),
    },
    // Set the output style of the bundled.js file
    // Make the file expanded and commented instead of single line, no white space and no comments
    mode: 'development',
    // Set Webpack to watch for App.js to be saved
    // When App.js is saved, Webpack will bundle up a new bundled.js file
    // To stop Webpack from watching App.js for save events, enter Control+C in Terminal
    watch: true
}