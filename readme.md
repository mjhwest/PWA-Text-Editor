# 18 PWA : Text-Editor

![License](https://img.shields.io/badge/license-MIT-blue)

## Description 

We were tasked to build a single page text editor that runs in the browser as well as offline. It was required the text-editior featured a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser.

The accepetance crtieria for the task was as follows: 

```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contribute](#contribute)
- [License](#license)

## Installation
This application does not require installation. Simply [click here and the deployed application will begin](https://mwest-text-editor.herokuapp.com/) 

## Usage

This application can be used two different ways; online or offline. 

![browser](assets/browser.png)

If the user would like to use the application offline they can simply click on the download icon (seen in the url browswer) and the application will download to their desktop.

Select this icon in your web browswer ![download](assets/download.png) 

and the applicationw will automatically download to your desktop ![icon](assets/icon.png)


 Alternatively, the user can use the web application in the web browser. 

 The following image shows the applications manifest.json file. 

![manifest](assets/manifest.png)

The following image shows the applications service-worker file. 

![sw](assets/sw.png)

The following image shows the applications IndexedDB storage. 

![store](assets/store.png)

## Features 
This appplication has the following features used in it
- Nodemon
- Express
- Concurrently 
- idb
- babel-loader
- workbox-window
- service-worker 
- InjectManifest
- WebpackPwaManifest
- HtmlWebpackPlugin

## Contribute
If you would like to contribute to this project please contact me via email at mjhwest89@gmail.com

## License
This project is released under the [MIT LICENSE](https://github.com/mjhwest/PWA-Text-Editor/blob/main/LICENSE)