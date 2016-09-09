# Sails.js + React.js  + Webpack Starter Kit

This is a good starting point if you want to use [Sails](http://sailsjs.org) as back-end and [React](https://facebook.github.io/react/) in front-end.
Apart from [this Sails-React starter kit](https://github.com/mixxen/sails-react-example) this one fully uses [Webpack](http://webpack.github.io) as an integrated into pipeline grunt build task. Also I have stepped out from using [Bower](https://bower.io) as front-end package manager and left all to `npm` so if you need any additional package that you want to `import` to your **React** app, use `npm`.

Upon navigating to `/` an `index.jade` view will be shown that starts **React** application. All **React** application code is located at `assets/app`.

In order to modify grunt task that bundles **React** code look at `tasks/config/webpack.js`.




### Installation

- clone by `git clone https://github.com/kaytrance/sails-react-webpack-starter-kit.git`
- cd to cloned folder by `cd sails-react-webpack-starter-kit`
- run `npm install` to scaffold up dependencies
- run `npm run dev` to start Sails server in `development` mode
- run `npm run prod` to start Sails server in `production` mode




### Licence

MIT