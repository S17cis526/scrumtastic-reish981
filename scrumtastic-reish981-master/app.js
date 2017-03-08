"use strict";
var splite3 = require('splite3');
var db = new splite3.Database('scrumtastic.splite3');
var migrate = require('./src/migrations');
migrate(db);

db.run("INSERT INTO projects (name) values ('title')");
console.log(db.run("SELECT + FROM projects"));
