function throttle(f, ms) {
  let isThrottled = false;
  let currentArgs, context;
  return function wrapper() {
    if (isThrottled) {
      currentArgs = arguments;
      context = this;
      return;
    }
    f.apply(this, arguments);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
      if (currentArgs) {
        wrapper.apply(context, currentArgs);
        currentArgs = context = null;
      }
    }, ms);
  };
}
