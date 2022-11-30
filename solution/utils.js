// Linear sort
// const sortLogs = (logs) => logs.sort((a, b) => a.last.date - b.last.date);

// Quicksort
const sortLogs = (logs = [], printer) => {
  if (logs.length <= 1) {
    logs.forEach((log) => printer.print(log.last));
    return logs;
  }

  const [pivot] = logs;
  const left = [];
  const right = [];

  for (let i = 1, total = logs.length; i < total; i += 1) {
    const log = logs[i];

    if (log.last.date < pivot.last.date) {
      left.push(log);
    } else {
      right.push(log);
    }
  }

  const leftLogs = sortLogs(left, printer);
  printer.print(pivot.last);
  const rightLogs = sortLogs(right, printer);

  return [...leftLogs, pivot, ...rightLogs];
};

module.exports = {
  sortLogs,
};
