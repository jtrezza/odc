export function compose(...args) {
	return function(x) {
    if(args.length === 0) {
      return x;
    }
  	return args.reverse().reduce((prev, current) => {
      return current(prev);
    }, x);
  };
}
