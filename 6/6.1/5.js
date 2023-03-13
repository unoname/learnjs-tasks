// 1.
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}

// 2.
function printReverseList(list) {
  let node = list;
  let arr = [];
  while (node) {
    arr.push(node.value);
    node = node.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
