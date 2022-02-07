
# Valorant Database

A website for viewing Valorant game assets, items, and esports matches.  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo

https://valorant-db.netlify.app 

Issue with Esports page, CORS error:
        
       Access to XMLHttpRequest at 
       'https://api.pandascore.co/valorant/matches?sort=begin_at&page=1&per_page=50' 
       from origin 'https://valorant-db.netlify.app' 
       has been blocked by CORS policy: Response to preflight request doesn't pass 
       access control check: No 'Access-Control-Allow-Origin' header 
       is present on the requested resource.)


## Features
- Collection of Valorant assets and items such as agents, weapons and their skins, maps, and player cards.
- Hoverable items reveal more when clicked.
- Esports match information with tournament and team names, date scheduled, and links to watch on Twitch.


## Documentation

API's used for data:
- [Valorant-API](https://dash.valorant-api.com/)
- [PandaScore](https://pandascore.co/stats)

NPM Packages used:
- [react](https://www.npmjs.com/package/react)
- [axios](https://www.npmjs.com/package/axios)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [framer-motion](https://www.npmjs.com/package/framer-motion)
- [react-scroll](https://www.npmjs.com/package/react-scroll)


## Run Locally

Clone or download repository

```bash
  git clone https://github.com/ohersi/Valorant-DB.git
```

Go to the app directory

```bash
  cd valorant-db
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Lessons Learned

- Working with APIs
- Adding custom data to API json data
- Creating pages that link to one another using React Router
- Animating using Framer Motion
- Better understanding of CSS styling and media query for responsive page
## Acknowledgements

 - [Framer Motion](https://www.framer.com/motion/)
 - [Valorant](https://playvalorant.com/en-us/)
 
