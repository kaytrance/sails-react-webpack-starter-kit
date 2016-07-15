# Sails-React-Webpack Starter Kit

Apart from [this Sails-React starter kit](https://github.com/mixxen/sails-react-example) this one fully uses [Webpack](http://webpack.github.io) as a separate grunt build task. Also I have stepped out from using [Bower](https://bower.io) as front-end package manager and left all to `npm` so if you need any additional package that you want to `import` to your React app, use `npm`.

Upon navigating to `/` an `index.jade` view will be shown that starts React application. All React application code is located at `assets/app`.

In order to modify grunt task that bundles React code look at `tasks/config/webpack.js`.




### Installation

- Clone this repo.
- run `npm install`
- run `npm run dev` to start sails server.




### Licence

MIT
