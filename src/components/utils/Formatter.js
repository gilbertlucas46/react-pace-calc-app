const Formatter = {
  stringToSeconds: string => {
    var d = 0,
      h = 0,
      m = 0,
      s = 0,
      ms = 0,
      milisec = string.split(","),
      days = milisec[0].split("d "),
      time = [];

    if (days.length > 1) {
      d = Number(days[0]);
      time = days[1];
    } else {
      time = days[0];
    }

    time = time.split(":");

    if (milisec.length > 1) {
      if (1 === milisec[1].length) ms = Number(milisec[1]) / 10;
      else ms = Number(milisec[1]) / 100;
    }

    if (1 === time.length) s = Number(time[0]);
    else if (2 === time.length) {
      m = Number(time[0]);
      s = Number(time[1]);
    } else {
      h = Number(time[0]);
      m = Number(time[1]);
      s = Number(time[2]);
    }

    return d * 86400 + h * 3600 + m * 60 + s + ms / 100;
  },
  secondsToTimeString: (s, expanded) => {
    var date = new Date(null);
    var start = 0;

    s = Math.round(s);
    date.setSeconds(s - 60 * 60);

    if (!expanded) {
      if (s < 600) {
        start = 4;
      } else if (s < 3600) {
        start = 3;
      } else if (s < 36000) {
        start = 1;
      }
    }

    return date.toTimeString().substr(start, 8 - start);
  },
  formatUnit: (unit, v) => {
    v = unit.fromSecondsPerKm(v);
    return unit.timeBased ? Formatter.secondsToTimeString(v) : v.toFixed(2);
  }
};

export default Formatter;
