# Urbanbot
Just a little sideproject that I wanted to do when I had a 30 minutes downtime and didn't wanna do any actual work.

If you would like to request some features let me know on Discord (Stache#0001).

I have no intentions of keeping this a running project, as there's only so much you can do with Urban Dictionairy.

If you'd like to get this bot in your server, you can add it [here](https://discordbots.org/bot/439102015969296387).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install and how to install them

```
Node v10.0.0
npm 5.6
```

### Installing

Clone the repository

```
npm install
```

The config file is not included in this repo, for obvious reasons. To run the code as-is, you will have to create a `config.js` file in the root directory, and add your own tokens / API keys. Structure as follows:

```js
module.exports = {
  token: '<token>',
  prefix: '<prefix>',
  API: '<link to urbandictionary API>',
  random: '<link to urbandictionary API for random terms>',
  help: '<your help message to display when syntax is not correct>',
  statsprefix: '<different prefix for bot owner to display bot stats>',
  DBLAPI: 'API key for DiscordBotList so you can post server/shard count'
}
```

## Deployment

```
node .
```

## Authors

* **Jonas Pardon** - Stache#0001


## License

MIT

## Acknowledegments

* **Scott Evans** - Scotteh#0001: for getting me up to par on development in node.js. Thanks for teaching me loads buddy.
