"use strict";

// Print all entries, across all of the sources, in chronological order.

const { sortLogs } = require("./utils");

const getDrainedLog = (log) => {
  let { drained } = log;
  while (!drained) {
    drained = !log.pop();
  }
  return log;
};

module.exports = (logSources, printer) => {
  const drainedLogs = logSources.map(getDrainedLog);
  sortLogs(drainedLogs, printer);
  printer.done();

  return console.log("Sync sort complete.");
};
