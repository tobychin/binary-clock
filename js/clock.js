var start, end;

function binaryClock() {
  start = window.performance.now();
  var timeArr, value, intArray;

  timeArr = buildTimeArray();
  buildClock(timeArr);

  end = window.performance.now();
  console.log('time elapsed: ' + (end - start) + ' ms');
}

function buildClock(timeArray) {
  // Loop over the columns, (hours, minutes, seconds)
  for (var i = 0; i < timeArray.length; i++) {
    value = converToBinary(timeArray[i]);
    // console.log("index: " + i + ", " + value);
    intArray = value.split('');
    // Loop over the values of hours and minutes, and seconds
    for(var si = 0; si < intArray.length; si++) {
      // console.log("subindex: " + si + ", " + intArray[si]);
      renderDots(i, si, intArray[si]);
    }
  };
}

function buildTimeArray() {
  var now, h, m, s, timeArr, value, intArray;
  now = new Date();
  h = pad(now.getHours().toString()).split('');
  m = pad(now.getMinutes().toString()).split('');
  s = pad(now.getSeconds().toString()).split('');
  console.log('now: ' + now);
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
  console.log('value: ' + value + '\n index: ' + index + ', subindex: ' + subindex);
  if (parseInt(value) === 1) {
    $('[data-index="' + index + '"] [data-subindex="' + subindex + '"]').addClass('off');
  } else {
    $('[data-index="' + index + '"] [data-subindex="' + subindex + '"]').removeClass('off');
  }
}
