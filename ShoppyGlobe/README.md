- Github link https://github.com/190032016-srinivas/FSWD_IS/tree/main/ShoppyGlobe
- IF YOU ALREADY HAVE NODE MODULES PLEASE DELETE IT AND INSTALL AGAIN
- make sure you are in the correct directory before proceeding !!!
- make sure you have mongo db installed properly in your system before proceeding !!!

- DONT FORGET TO RUN \*\* NPM INSTALL in the main shoppyglobe directory

- TO RUN THE APP :
- - open the terminal
- - go to the main root folder ie shoppyglobe
- - run (npm run dev) command to start the front end app
- - create a new terminal from the top right plus icon in the terminal
- - do cd and go into the Backend folder (cd .\BackEnd\)
- - run (node server.js) command to start the backend

- you can search by name of the product
- components are using LAZY LOADING
- thank you

$body = Get-Content -Path "./src/preMadeProducts.json" -Raw

> > Invoke-WebRequest -Uri "http://localhost:3000/products/add" `    -Method POST`
> > -Headers @{"Content-Type"="application/json"} `
> > -Body $body
