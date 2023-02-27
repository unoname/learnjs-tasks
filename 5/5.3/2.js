function checkSpam(str) {
  return /(viagra|XXX)/gi.test(str);
}
checkSpam('buy ViAgRA now') == true;
checkSpam('free xxxxx') == true;
checkSpam('innocent rabbit') == false;
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
