Todo

Repetition
* [x] Simple express app
* [x] Static pages
* [x] basic react application


Fix Quiz
* [ ] Split program into server / local using express
* [ ] Add login functionality (with cookies)
* [ ] Add tests (both simple and function tests)
* [ ] Add gitHub action functionality
* [ ] Deployment to Azure (Through gitHub student)

* [ ] Move questions to server, to feed into client
* [ ] Make the quiz game store scores in cookies? 
* [ ] Allow adding questions to quiz

Folders should have their own package.jsons for internal settings.

**Important Dependencies:**
"devDependencies": {
"@babel/preset-env": "^7.19.0",
"@babel/preset-react": "^7.18.6",
"assert": "^2.0.0",
"babel-jest": "^29.0.3",
"console-browserify": "^1.2.0",
"jest": "^29.0.3",
"jest-environment-jsdom": "^29.0.3",
"jsdom": "^20.0.0",
"parcel": "^2.7.0",
"process": "^0.11.10",
"rimraf": "^3.0.2",
"util": "^0.12.4"
},
"dependencies": {
"is-odd": "^3.0.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.4.1"
},
"babel": {
"presets": [
"@babel/preset-env",
"@babel/preset-react"
]
},
"jest": {
"testEnvironment": "jsdom"
}