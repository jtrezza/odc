
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

export function email(str) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(str)) {
    return 'El valor ingresado no es un e-mail válido';
  }
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
