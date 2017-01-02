export function numberFormat(n,precision, dec, tnd) {
  var defaultPrecision = 2, thousand = 3;
  var c, d, t, s, i, j;
  c = isNaN(Math.abs(precision)) ? defaultPrecision : precision;
  d = dec === undefined ? '.' : dec;
  t = tnd === undefined ? ',' : tnd;
  s = n < 0 ? '-' : '';
  i = parseInt(Math.abs(+n || 0).toFixed(c), 10) + '';
  j = (j = i.length) > thousand ? j % thousand : 0;
  return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(defaultPrecision) : '');
 }
 export function capitalize(string) {
     return string.charAt(0).toUpperCase() + string.slice(1);
 }
