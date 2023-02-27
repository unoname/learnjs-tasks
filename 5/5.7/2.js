function aclean(arr) {
  let map = new Map();
  arr.forEach(word => {
    map.set(word.split('').sort().join('').toLowerCase(), word);
  });
  return Array.from(map.values());
}
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
console.log(aclean(arr));
