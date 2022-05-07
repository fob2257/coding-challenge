"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

const { sortLogs } = require("./utils");

const getDrainedLog = async (log) => {
  let { drained } = log;
  while (!drained) {
    drained = !(await log.popAsync());
  }
  return log;
};

module.exports = (logSources, printer) => {
  return new Promise(async (resolve, reject) => {
    const drainedLogs = await Promise.all(logSources.map(getDrainedLog));
    sortLogs(drainedLogs, printer);
    printer.done();

    resolve(console.log("Async sort complete."));
  });
};
