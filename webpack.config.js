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
    
    // Set Webpack to watch for saved files
    // e.g. When App.js is saved, Webpack will bundle up a new bundled.js file
    // To stop Webpack from watching App.js for save events, enter Control+C in Terminal
    watch: true,

    // Tell Webpack what to do with certain files when they are saved
    module: { 
        // Set an array
        // Will be used to tell Webpack to do something different depending on file type
        rules: [ 
            // CSS Files
            { 
                // Check files for '.css' extension
                test: /\.css$/i,
                // If a file has a '.css' extension, use the packages in the 'use' array to process them
                // style-loader injects css into the browser, css-loader enables Wepack to read and bundle css files
                use: ['style-loader', 'css-loader'],
            } 
        ]
    }
}