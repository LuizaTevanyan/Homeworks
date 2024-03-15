//get object this for decorated function

function sum(a, b, c) {
  console.log("asd", this);
  return a + b + c;
}
function decoratedFn(fn) {
  return function (...a) {
    console.log("Decorated function", this);
    return fn.call(o, ...a);
  };
}
let res = decoratedFn(sum);

o = {
  asd: "aassdd",
  sum,
  res,
};
console.log(o.res(3, 4, 5));

//
function getTreeRoot(nodes) {
  const tree = {};
  const root = nodes.find((n) => !n.parentId);
  tree[root.id] = {};

  return tree;
}

function createTree(nodes, parentId, rootId, tree) {
  const rootChildren = nodes.filter((n) => n.parentId === rootId);
  rootChildren.forEach((rootChild) => {
    tree[rootId][rootChild.id] = {};
    createTree(nodes, rootChild.id, rootChild.id, tree[rootId]);
  });
}

const tree = getTreeRoot(nodes);
createTree(nodes, null, 1, tree);
console.log(tree);
