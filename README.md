This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## create project
````
npx create-app-react extension
````

## config init  
- edit manifest.json
````
{
  "short_name": "Extension",
  "name": "Demo Extension",
  "version": "1.0.0",
  "manifest_version": 2,
  "browser_action": {
    "default_popup": "index.html"
  },
  "content_scripts" : [
    {
      "matches": [ "<all_urls>" ],
      "css": ["/static/css/content.css"],
      "js": ["/static/js/content.js"]
    }
 ]
}
````

## run eject
````
yarn run eject
yarn install
````

## edit webpack
- in folder config -> webpack.config.js
````
entry:{
    app: [paths.appIndexJs],
    content: ['./src/content.js']
}


filename: 'static/js/[name].js',
chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',


runtimeChunk: false,


filename: 'static/css/[name].css',
chunkFilename: 'static/css/[name].chunk.css',

````


## Edit index App
- in folder src -> index.js 
- comment
````
// ReactDOM.render(<App />, document.getElementById('root'));
````

## create files
- src -> content.js
````
add code
````

- src -> contente.css
````
add code
````


### build
````
yarn build
````


## add extension in browser
-> open chrome -> open extensions -> developer mode -> open folder build