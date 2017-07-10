const BinaryClock = {
  initialize: function() {
    let timeArr;
    setInterval(() => {
        timeArr = this.buildTimeArray();
        this.buildClock(timeArr);
      }, 5);
  },

  buildClock: function(timeArray) {
    let intArray, value;
    // Loop over the columns, (hours, minutes, seconds)
    for (let i = 0; i < timeArray.length; i++) {
      value = this.convertToBinary(timeArray[i]);
      intArray = value.split('').reverse();
      // Loop over the values of hours and minutes, and seconds
      for(let si = 0; si < 4; si++) {
        this.renderDots(i, si, intArray[si]);
      }
    }
  },

  buildTimeArray: function() {
    const now = new Date();
    let h = this.pad(now.getHours().toString()).split(''),
        m = this.pad(now.getMinutes().toString()).split(''),
        s = this.pad(now.getSeconds().toString()).split(''),
        timeArr = [];
    console.log('now: ' + now);
    return timeArr.concat(h).concat(m).concat(s);
  },

  convertToBinary: (value) => parseInt(value).toString(2),

  pad: (number) => (`0000${number}`).slice(-2),

  renderDots: function (index, subindex, value) {
    let el = document.querySelector(`[data-index="${index}"] [data-subindex="${subindex}"`);
    if (value === '1') {
      el.classList.remove('off');
    } else if (!!el) {
      el.classList.add('off');
    }
  }
};

console.log(BinaryClock.convertToBinary('56'));
console.log(BinaryClock.pad('34'));
console.log(BinaryClock.buildTimeArray());

if (document != undefined) { BinaryClock.initialize(); }
