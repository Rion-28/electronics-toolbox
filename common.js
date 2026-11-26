'use strict';
const $=id=>document.getElementById(id);
const fmt=n=>n===0?'0':Math.abs(n)<1e-6||Math.abs(n)>=1e15?n.toExponential(7):n.toLocaleString('en-US',{maximumSignificantDigits:10});
