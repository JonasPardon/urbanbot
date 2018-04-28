const config = require('../config'),
    request = require('request'),
    Discord = require('discord.js'),
    DBL = require("dblapi.js"),
    dbl = new DBL(config.DBLAPI);

var exports = module.exports = {};

exports.findDefinition = (term) => {
    return new Promise((resolve, reject) => {
        let url = config.API;
        url = encodeURI(url.replace("{word}", term));

        request(url, (err, response, body) => {
            if (err || response.statusCode !== 200) return reject(`The API seems to be having some issues right now, try again later!`);

            const r = JSON.parse(body);

            if (r.result_type == "no_results") return reject(`Could not find any hits for '${term}', please try again!`);

            const definition = r.list[0].definition;
            const author = r.list[0].author;
            const date = r.list[0].written_on;
            const example = r.list[0].example;
            const link = r.list[0].permalink;

            resolve({
                definition: definition,
                author: author,
                date: date,
                example: example,
                link: link
            });

        });
    });
};

exports.log = (command, user, guild) => {
    const date = new Date();
    console.log(`[${date.toDateString()}] Command ${command} called by ${user} in ${guild}`);
}

exports.getRandom = () => {
    return new Promise((resolve, reject) => {
        request(config.random, (err, response, body) => {
            if (err || response.statusCode !== 200) return reject(`The API seems to be having some issues right now, try again later!`);

            const r = JSON.parse(body);

            if (r.result_type == "no_results") return reject(`Could not find any random words, please try again!`);

            const definition = r.list[0].definition;
            const author = r.list[0].author;
            const date = r.list[0].written_on;
            const example = r.list[0].example;
            const link = r.list[0].permalink;
            const term = r.list[0].word;

            resolve({
                definition: definition,
                author: author,
                date: date,
                example: example,
                link: link,
                term: term
            });
        });
    });
};

exports.getBotStats = (client) => {
    return new Promise((resolve, reject) => {
        let members = 0;
        client.guilds.forEach(g => {
            members += parseInt(g.memberCount);
        });

        const guilds = client.guilds.size;

        resolve({
            members: members,
            guilds: guilds
        });
    });
};

exports.postServerCount = (client) => {
        dbl.postStats(client.guilds.size);
};