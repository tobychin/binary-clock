function binaryClock() {
  var timeArr;
  timeArr = buildTimeArray();
  buildClock(timeArr);
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
  return timeArr.concat(h).concat(m).concat(s);
}

function converToBinary(value) {
  return parseInt(value).toString(2);
}

function pad(num, max){
  return ('0000' + num).slice(-2);
}

function renderDots (index, subindex, value) {
  if (parseInt(value) === 1) {
    $('[data-index="' + index + '"] [data-subindex="' + subindex + '"]').removeClass('off');
  } else {
    $('[data-index="' + index + '"] [data-subindex="' + subindex + '"]').addClass('off');
  }
}
