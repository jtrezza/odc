
function empty(v) {
  return typeof(v) === 'undefined' || v === null || v === '';
}

export function required(v) {
  if (empty(v)) {
    return 'Campo requerido';
  }
}

export function minLength(l) {
  return function(v) {
    if(!empty(v) && v.length < l) {
      return `La longitud mínima es ${l}`;
    }
  };
}

const bindValidator = f => {
  return function(tupla) {
    var v = tupla[0],
        e = tupla[1],
        fv = f(v),
        newE = e || fv;
    return [v, newE];
  };
};

const unitValidator = v => {
  var error;
  return [v, error];
};
