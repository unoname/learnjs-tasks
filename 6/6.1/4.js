// with while
function printList(list) {
  let node = list;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
}

// with recursive
function printList(list) {
  console.log(list.value);
  if (list.next) return printList(list.next);
}
