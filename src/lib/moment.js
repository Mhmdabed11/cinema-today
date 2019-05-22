var moment = require("moment/core");

// add plugins for all the stuff you need, if you ever want ALL of them you
// just include the directory instead (node/browserify/webpack will pick up
// a index.js inside it that would have all the things)
moment.plugin([
  // if you know this is all the parsers you need this is all you add
  require("moment/plugins/parser/yyyy-mm-dd-time")
]);

// lock in the configuration so that calling plugin method throw and exception
// this would be irreversible but you can get a unlocked version by calling copy
// this will force people to get a "copy" of the configuration before doing
// anything stupid -- or help them find the mistake if they add it later
moment.lock();

// you now just include this file where you need it
module.exports = moment;
