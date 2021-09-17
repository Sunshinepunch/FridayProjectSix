# _{Friday Week 6 - Currency Converter}

## Description _This project allows a user to input a number of US dollars and then select one of 5 possible currencies to convert that value into_

### By _{Becket Harvey}_


#### Technologies Used

* _HTML_
* _CSS_
* _VSCode_
* _Javascript_
* _jQuery_
* _Git Bash_
* _Bootstrap_
* _Node.js_
* _Postman_

#### Dependencies & Versions Used
* "devDependencies":
    _"@babel/core": "^7.6.4",_
    _"@babel/plugin-transform-modules-commonjs": "^7.6.0",_
    _"clean-webpack-plugin": "^3.0.0",_
    _"css-loader": "^3.2.0",_
    _"dotenv-webpack": "^7.0.3",_
    _"eslint": "^6.3.0",_
    _"eslint-loader": "^3.0.0",_
    _"html-webpack-plugin": "^3.2.0",_
    _"style-loader": "^1.0.0",_
    _"webpack": "4.39.3",_
    _"webpack-cli": "^3.3.8",_
    _"webpack-dev-server": "^3.8.0"_
  },
  "dependencies": {
    _"bootstrap": "^4.5.0",_
    _"jquery": "^3.5.1",_
    _"popper.js": "^1.16.1"_




## Setup/Installation Requirements
# _It is HEAVILY encouraged to clone the repo or copy/paste the values in the package.json and webpack.config files in order to ensure compatibility - the following instructions assume this has not been done"_

* After installing the above technologies, begin by using Git Bash (or another terminal program) to run $ npm install at the root directory of your project file
* If you are a Mac user, replace the _&_ in package.json  with a _;_ "start": "npm run build _&_ webpack-dev-server --open --mode=development",
* Create an account with ExchangeRate (https://www.exchangerate-api.com/docs/overview) to obtain an API Key by clicking the appropriate button in the navigation bar at the top of the page
* creat a .gitignore file and write in the following:

node_modules/
.DS_Store
dist/
coverage/
.env

* Make a .env file (and BE SURE it is added to gitignore below coverage/) and enter API_KEY = {YOUR API KEY HERE} - NOTE: It is crucial to complete this step and be sure your API key is never directly referenced in your javascript file
* IMPORTANT - Your API requests are limited if you are using the free version. Please be sure to read the documentation at https://www.exchangerate-api.com/docs/overview
* Install Postman and double check your ExchangeRate API returns results - https://v6.exchangerate-api.com/v6/{YOUR-API-KEY-HERE}/latest/USD
* Make a webpack.config.js file and ensure it contains the following modules:

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
      devtool: 'eval-source-map',
      devServer: {
        contentBase: './dist'
      },
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'FridayProjectSix',
          template: './src/index.html',
          inject: 'body'
        }),
        new Dotenv()
      ],
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
          }
        ]
      }
    };
* update your package.json by running $ npm run build in your terminal of choice and verifying there are no errors
* run $ npm run start to bring up a live server in your browser (Google Chrome preferred)


## Known Bugs
* _Errors sometimes do not return in the DOM, but will display in the console log (ctrl-shift-I to access on Chrome)_

## License
_{MIT}_ This is open source for anyone to use and I am not responsible for any problems resulting from its use or implementation

## Contact Information
* Find me on Github under SunshinePunch!