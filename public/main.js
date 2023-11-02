(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(n){t(1,arguments);var r=Object.prototype.toString.call(n);return n instanceof Date||"object"===e(n)&&"[object Date]"===r?new Date(n.getTime()):"number"==typeof n||"[object Number]"===r?new Date(n):("string"!=typeof n&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function a(e){t(1,arguments);var r=n(e),a=r.getUTCDay(),o=(a<1?7:0)+a-1;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function o(e){t(1,arguments);var r=n(e),o=r.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(o+1,0,4),i.setUTCHours(0,0,0,0);var c=a(i),u=new Date(0);u.setUTCFullYear(o,0,4),u.setUTCHours(0,0,0,0);var s=a(u);return r.getTime()>=c.getTime()?o+1:r.getTime()>=s.getTime()?o:o-1}(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})({});var i={};function c(){return i}function u(e,a){var o,i,u,s,d,l,m,h;t(1,arguments);var f=c(),g=r(null!==(o=null!==(i=null!==(u=null!==(s=null==a?void 0:a.weekStartsOn)&&void 0!==s?s:null==a||null===(d=a.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==u?u:f.weekStartsOn)&&void 0!==i?i:null===(m=f.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==o?o:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=n(e),y=w.getUTCDay(),v=(y<g?7:0)+y-g;return w.setUTCDate(w.getUTCDate()-v),w.setUTCHours(0,0,0,0),w}function s(e,a){var o,i,s,d,l,m,h,f;t(1,arguments);var g=n(e),w=g.getUTCFullYear(),y=c(),v=r(null!==(o=null!==(i=null!==(s=null!==(d=null==a?void 0:a.firstWeekContainsDate)&&void 0!==d?d:null==a||null===(l=a.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==s?s:y.firstWeekContainsDate)&&void 0!==i?i:null===(h=y.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(w+1,0,v),p.setUTCHours(0,0,0,0);var b=u(p,a),C=new Date(0);C.setUTCFullYear(w,0,v),C.setUTCHours(0,0,0,0);var T=u(C,a);return g.getTime()>=b.getTime()?w+1:g.getTime()>=T.getTime()?w:w-1}function d(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const l=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return d("yy"===t?r%100:r,t.length)},m=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):d(n+1,2)},h=function(e,t){return d(e.getUTCDate(),t.length)},f=function(e,t){return d(e.getUTCHours()%12||12,t.length)},g=function(e,t){return d(e.getUTCHours(),t.length)},w=function(e,t){return d(e.getUTCMinutes(),t.length)},y=function(e,t){return d(e.getUTCSeconds(),t.length)},v=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return d(Math.floor(r*Math.pow(10,n-3)),t.length)};var p={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return l(e,t)},Y:function(e,t,n,r){var a=s(e,r),o=a>0?a:1-a;return"YY"===t?d(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):d(o,t.length)},R:function(e,t){return d(o(e),t.length)},u:function(e,t){return d(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return d(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return d(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return m(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return d(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,a,o,i){var l=function(e,a){t(1,arguments);var o=n(e),i=u(o,a).getTime()-function(e,n){var a,o,i,d,l,m,h,f;t(1,arguments);var g=c(),w=r(null!==(a=null!==(o=null!==(i=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(l=n.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==o?o:null===(h=g.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==a?a:1),y=s(e,n),v=new Date(0);return v.setUTCFullYear(y,0,w),v.setUTCHours(0,0,0,0),u(v,n)}(o,a).getTime();return Math.round(i/6048e5)+1}(e,i);return"wo"===a?o.ordinalNumber(l,{unit:"week"}):d(l,a.length)},I:function(e,r,i){var c=function(e){t(1,arguments);var r=n(e),i=a(r).getTime()-function(e){t(1,arguments);var n=o(e),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),a(r)}(r).getTime();return Math.round(i/6048e5)+1}(e);return"Io"===r?i.ordinalNumber(c,{unit:"week"}):d(c,r.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):h(e,t)},D:function(e,r,a){var o=function(e){t(1,arguments);var r=n(e),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var o=a-r.getTime();return Math.floor(o/864e5)+1}(e);return"Do"===r?a.ordinalNumber(o,{unit:"dayOfYear"}):d(o,r.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return d(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return d(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return d(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return f(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):g(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):d(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):d(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):w(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):y(e,t)},S:function(e,t){return v(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return C(a);case"XXXX":case"XX":return T(a);default:return T(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return C(a);case"xxxx":case"xx":return T(a);default:return T(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+b(a,":");default:return"GMT"+T(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+b(a,":");default:return"GMT"+T(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return d(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return d((r._originalDate||e).getTime(),t.length)}};function b(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+d(o,2)}function C(e,t){return e%60==0?(e>0?"-":"+")+d(Math.abs(e)/60,2):T(e,t)}function T(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+d(Math.floor(a/60),2)+n+d(a%60,2)}const S=p;var x=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},M=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},_={p:M,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return x(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",x(a,t)).replace("{{time}}",M(o,t))}};const k=_;var L=["D","DD"],D=["YY","YYYY"];function P(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function U(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var E,W={date:U({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:U({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:U({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Y={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function F(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,c=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[c]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function O(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,c=o[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(c))return n}(u):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(c))return n}(u);return i=e.valueCallback?e.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(c.length)}}}const N={code:"en-US",formatDistance:function(e,t,n){var r,a=q[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:W,formatRelative:function(e,t,n,r){return Y[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:F({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:F({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:F({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:F({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:F({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(E={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(E.matchPattern);if(!n)return null;var r=n[0],a=e.match(E.parsePattern);if(!a)return null;var o=E.valueCallback?E.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:O({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:O({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:O({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:O({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:O({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var H=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,j=/^'([^]*?)'?$/,A=/''/g,B=/[a-zA-Z]/;function Q(a,o,i){var u,s,d,l,m,h,f,g,w,y,v,p,b,C,T,x,M,_;t(2,arguments);var q=String(o),U=c(),E=null!==(u=null!==(s=null==i?void 0:i.locale)&&void 0!==s?s:U.locale)&&void 0!==u?u:N,W=r(null!==(d=null!==(l=null!==(m=null!==(h=null==i?void 0:i.firstWeekContainsDate)&&void 0!==h?h:null==i||null===(f=i.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:U.firstWeekContainsDate)&&void 0!==l?l:null===(w=U.locale)||void 0===w||null===(y=w.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==d?d:1);if(!(W>=1&&W<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Y=r(null!==(v=null!==(p=null!==(b=null!==(C=null==i?void 0:i.weekStartsOn)&&void 0!==C?C:null==i||null===(T=i.locale)||void 0===T||null===(x=T.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==b?b:U.weekStartsOn)&&void 0!==p?p:null===(M=U.locale)||void 0===M||null===(_=M.options)||void 0===_?void 0:_.weekStartsOn)&&void 0!==v?v:0);if(!(Y>=0&&Y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var F=n(a);if(!function(r){if(t(1,arguments),!function(n){return t(1,arguments),n instanceof Date||"object"===e(n)&&"[object Date]"===Object.prototype.toString.call(n)}(r)&&"number"!=typeof r)return!1;var a=n(r);return!isNaN(Number(a))}(F))throw new RangeError("Invalid time value");var O=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(F),Q=function(e,a){return t(2,arguments),function(e,a){t(2,arguments);var o=n(e).getTime(),i=r(a);return new Date(o+i)}(e,-r(a))}(F,O),G={firstWeekContainsDate:W,weekStartsOn:Y,locale:E,_originalDate:F};return q.match(z).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,k[t])(e,E.formatLong):e})).join("").match(H).map((function(e){if("''"===e)return"'";var t,n,r=e[0];if("'"===r)return(n=(t=e).match(j))?n[1].replace(A,"'"):t;var c,u=S[r];if(u)return null!=i&&i.useAdditionalWeekYearTokens||(c=e,-1===D.indexOf(c))||P(e,o,String(a)),null!=i&&i.useAdditionalDayOfYearTokens||!function(e){return-1!==L.indexOf(e)}(e)||P(e,o,String(a)),u(Q,e,E.localize,G);if(r.match(B))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return e})).join("")}function G(e){return t(1,arguments),n(1e3*r(e))}!function(){const e=function(e){const t=e.querySelector(".header__search-input"),n=e.querySelector(".header__error-popup"),r=e.querySelector(".day-card:nth-of-type(1)"),a=r.querySelector(".day-card__condition"),o=r.querySelector(".day-card__weekday"),i=r.querySelector(".day-card__date"),c=r.querySelector(".day-card__time"),u=r.querySelector(".day-card__city"),s=r.querySelector(".day-card__temp-color"),d=r.querySelector(".day-card__temp"),l=r.querySelector(".day-card__feel-temp"),m=r.querySelector(".day-card__icon-row"),h=e.querySelector(".day-card:nth-of-type(2)"),f=h.querySelector(".day-card__condition"),g=h.querySelector(".day-card__weekday"),w=h.querySelector(".day-card__date"),y=h.querySelector(".day-card__time"),v=h.querySelector(".day-card__city"),p=h.querySelector(".day-card__temp-color"),b=h.querySelector(".day-card__temp"),C=h.querySelector(".day-card__feel-temp"),T=h.querySelector(".day-card__icon-row"),S=e.querySelector(".day-card:nth-of-type(3)"),x=S.querySelector(".day-card__condition"),M=S.querySelector(".day-card__weekday"),_=S.querySelector(".day-card__date"),k=S.querySelector(".day-card__time"),L=S.querySelector(".day-card__city"),D=S.querySelector(".day-card__temp-color"),P=S.querySelector(".day-card__temp"),q=S.querySelector(".day-card__feel-temp"),U=S.querySelector(".day-card__icon-row"),E=e.querySelector(".loading"),W=e.querySelector(".content"),Y=" --freeze-weather",F=" --cold-weather",O=" --cool-weather",N=" --warm-weather",H=" --hot-weather",z=" --fire-weather",j={1e3:"clear",1003:"cloud",1006:"cloud",1009:"cloud",1030:"cloud",1063:"rain",1066:"snow",1069:"rain",1072:"rain",1087:"rain",1114:"snow",1117:"snow",1135:"cloud",1147:"cloud",1150:"rain",1153:"rain",1168:"rain",1171:"rain",1180:"rain",1183:"rain",1186:"rain",1189:"rain",1192:"rain",1195:"rain",1198:"rain",1201:"rain",1204:"rain",1207:"raint",1210:"snow",1213:"snow",1216:"snow",1219:"snow",1222:"snow",1225:"snow",1237:"snow",1240:"rain",1243:"rain",1246:"rain",1249:"rain",1252:"rain",1255:"snow",1258:"snow",1261:"snow",1264:"snow",1273:"rain",1276:"rain",1279:"snow",1282:"snow"},A={clear:'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    height="1em"\n    viewBox="0 0 512 512"\n    class="day-card__icon"\n  >\n  \x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/>\n  </svg>',cloud:'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    height="1em"\n    viewBox="0 0 640 512"\n    class="day-card__icon"\n  >\n    \x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e\n    <path\n      d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"\n    />\n  </svg>',rain:'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    height="1em"\n    viewBox="0 0 512 512"\n    class="day-card__icon"\n  >\n  \x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3z"/></svg>',snow:'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    height="1em"\n    viewBox="0 0 448 512"\n    class="day-card__icon"\n  >\n  \x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M224 0c13.3 0 24 10.7 24 24V70.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-57 57v76.5l66.2-38.2 20.9-77.8c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4L373 142.2l37.1-21.4c11.5-6.6 26.2-2.7 32.8 8.8s2.7 26.2-8.8 32.8L397 183.8l31.5 8.4c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-77.8-20.9L272 256l66.2 38.2 77.8-20.9c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4L397 328.2l37.1 21.4c11.5 6.6 15.4 21.3 8.8 32.8s-21.3 15.4-32.8 8.8L373 369.8l8.4 31.5c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-20.9-77.8L248 297.6v76.5l57 57c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V441.9l-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V297.6l-66.2 38.2-20.9 77.8c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4L75 369.8 37.9 391.2c-11.5 6.6-26.2 2.7-32.8-8.8s-2.7-26.2 8.8-32.8L51 328.2l-31.5-8.4c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l77.8 20.9L176 256l-66.2-38.2L31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4L51 183.8 13.9 162.4c-11.5-6.6-15.4-21.3-8.8-32.8s21.3-15.4 32.8-8.8L75 142.2l-8.4-31.5c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l20.9 77.8L200 214.4V137.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V24c0-13.3 10.7-24 24-24z"/></svg>'};let B;return{searchInput:t,ShowSearchError:function(e){n.textContent=e,n.classList.remove("hide-opacity"),B&&(clearTimeout(B),B=null),B=setTimeout((()=>{n.classList.add("hide-opacity")}),3e3)},fillCards:function(e){a.textContent=e[0].conditionText,o.textContent=Q(G(e[0].localtime),"EEEE"),i.textContent=Q(G(e[0].localtime),"PPP"),c.textContent=Q(G(e[0].localtime),"p"),u.textContent=e[0].city;let t=e[0].temp;t=t<=-25?Y:t<=-15?F:t<=0?O:t<=10?N:t<=25?H:z,s.style.background=`var(${t})`,d.innerHTML=`${e[0].temp} &#8451;`,l.innerHTML=`Feels like: ${e[0].feeltemp} &#8451;`,m.innerHTML=A[j[String(e[0].conditionCode)]],f.textContent=e[1].conditionText,g.textContent=Q(G(e[1].localtime),"EEEE"),w.textContent=Q(G(e[1].localtime),"PPP"),y.textContent=Q(G(e[1].localtime),"p"),v.textContent=e[1].city,t=(e[1].maxtemp+e[1].mintemp)/2,t=t<=-25?Y:t<=-15?F:t<=0?O:t<=10?N:t<=25?H:z,p.style.background=`var(${t})`,b.innerHTML=`${e[1].maxtemp} &#8451;`,C.innerHTML=`Min temp: ${e[1].mintemp} &#8451;`,T.innerHTML=A[j[String(e[1].conditionCode)]],x.textContent=e[2].conditionText,M.textContent=Q(G(e[2].localtime),"EEEE"),_.textContent=Q(G(e[2].localtime),"PPP"),k.textContent=Q(G(e[2].localtime),"p"),L.textContent=e[2].city,t=(e[2].maxtemp+e[2].mintemp)/2,t=t<=-25?Y:t<=-15?F:t<=0?O:t<=10?N:t<=25?H:z,D.style.background=`var(${t})`,P.innerHTML=`${e[2].maxtemp} &#8451;`,q.innerHTML=`Min temp: ${e[2].mintemp} &#8451;`,U.innerHTML=A[j[String(e[2].conditionCode)]]},showLoading:function(){E.classList.remove("hide-opacity"),W.classList.add("hide-opacity")},hideLoading:function(e=!1){E.classList.add("hide-opacity"),e||W.classList.remove("hide-opacity")}}}(document);async function t(t){e.showLoading();const n=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=43ba231c1eed48d5a9f195216232810&q=${t}&days=3&aqi=no&alerts=no`,{mode:"cors"});if(!n.ok){const t=await n.json();return e.ShowSearchError(t.error.message),void e.hideLoading(!0)}!function(t){const n=[];n.push({city:t.location.name,localtime:t.location.localtime_epoch,temp:t.current.temp_c,feeltemp:t.current.feelslike_c,conditionText:t.current.condition.text,conditionCode:t.current.condition.code}),n.push({city:t.location.name,localtime:t.forecast.forecastday[1].date_epoch,maxtemp:t.forecast.forecastday[1].day.maxtemp_c,mintemp:t.forecast.forecastday[1].day.mintemp_c,conditionText:t.forecast.forecastday[1].day.condition.text,conditionCode:t.forecast.forecastday[1].day.condition.code}),n.push({city:t.location.name,localtime:t.forecast.forecastday[2].date_epoch,maxtemp:t.forecast.forecastday[2].day.maxtemp_c,mintemp:t.forecast.forecastday[2].day.mintemp_c,conditionText:t.forecast.forecastday[2].day.condition.text,conditionCode:t.forecast.forecastday[2].day.condition.code}),e.fillCards(n)}(await n.json()),e.hideLoading(!1)}e.searchInput.addEventListener("keyup",(n=>{if("Enter"===n.key||13===n.keyCode){if(!n.target.value)return void e.ShowSearchError("Search field is empty");t(n.target.value).catch((()=>e.ShowSearchError("Internet connection error")))}})),t("London").catch((()=>e.ShowSearchError("Internet connection error")))}()})();