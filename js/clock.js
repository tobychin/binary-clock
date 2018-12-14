const BinaryClock = {
  _utilities: {
    toArray: (str) => str.split(''),
    padWithZeros: function (y = 2) { return function (x) { return (`0000${x}`).slice(- y); }; },
    convertToBinary: (x) => parseInt(x).toString(2),
    pipe: (first, ...more) => more.reduce((acc, curr) => (...agrs) => curr(acc(...agrs)), first)
  },

  buildTime: function() {
    f = BinaryClock._utilities;
    const now = new Date();
    return {
      hours: f.pipe(f.padWithZeros(), f.toArray)(now.getHours()),
      minutes: f.pipe(f.padWithZeros(), f.toArray)(now.getMinutes()),
      seconds: f.pipe(f.padWithZeros(), f.toArray)(now.getSeconds())
    };
  },

  clockTime: function () {
    var f = BinaryClock._utilities;
    var timeObj = BinaryClock.buildTime();
    var convert = f.pipe(f.convertToBinary, f.padWithZeros(4), f.toArray);
    var mediumConvert = f.pipe(f.convertToBinary, f.padWithZeros(3), f.toArray);
    var shortConvert = f.pipe(f.convertToBinary, f.padWithZeros(2), f.toArray);
    return {
      hours: {
        first: shortConvert(timeObj.hours[0]),
        second: convert(timeObj.hours[1])
      },
      minutes: {
        first: mediumConvert(timeObj.minutes[0]),
        second: convert(timeObj.minutes[1])
      },
      seconds: {
        first: mediumConvert(timeObj.seconds[0]),
        second: convert(timeObj.seconds[1])
      }
    };
  }
};

var clock = new Vue({
  el: '#app',
  data: {
    time: BinaryClock.clockTime()
  },
  methods: {
    isOff: (int) => int == 0
  }
});

function updateTime() {
  clock.time = BinaryClock.clockTime();
}
updateTime();
setInterval(updateTime, 5);
