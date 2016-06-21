function binaryClock() {
  var timeArr;
  setInterval(
    function() {
      timeArr = buildTimeArray();
      buildClock(timeArr);
    }, 1000);
}

function buildClock(timeArray) {
  var intArray, value;
  // Loop over the columns, (hours, minutes, seconds)
  for (var i = 0; i < timeArray.length; i++) {
    value = converToBinary(timeArray[i]);
    intArray = value.split('').reverse();
    // Loop over the values of hours and minutes, and seconds
    for(var si = 0; si < 4; si++) {
      renderDots(i, si, intArray[si]);
    }
  }
}

function buildTimeArray() {
  var now, h, m, s, timeArr;
  now = new Date();
  h = pad(now.getHours().toString()).split('');
  m = pad(now.getMinutes().toString()).split('');
  s = pad(now.getSeconds().toString()).split('');
  timeArr = [];
  console.log('now: ' + now);
  return timeArr.concat(h).concat(m).concat(s);
}

function converToBinary(value) {
  return parseInt(value).toString(2);
}

function pad(num){
  return ('0000' + num).slice(-2);
}

function renderDots (index, subindex, value) {
  var el;
  el = document.querySelector('[data-index="' + index + '"] [data-subindex="' + subindex + '"');
  if (value === '1') {
    el.classList.remove('off');
  } else if (!!el) {
    el.classList.add('off');
  }
}
