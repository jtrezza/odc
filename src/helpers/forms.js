import React from 'react';

export function createOptionsFromSeed(array) {
  return array.map(o => {
    var value, label;
    value = label = o;
    if(typeof(o) === 'object') {
      value = o.value; label = o.label;
    }
    return <option key={value} value={value}>{label}</option>;
  });
}
