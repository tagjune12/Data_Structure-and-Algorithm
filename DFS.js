const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', 'H', 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I']
};

// 오른쪽 -> 왼쪽 탐색
const dfs = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들

  needVisitStack.push(startNode);

  // 탐색을 해야 할 노드가 남아 있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    // const node = needVisitStack.unshift();
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }

  return visitedQueue;
};

// 왼쪽->오른쪽 탐색
const dfs2 = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들

  needVisitStack.push(startNode);
  // console.log(needVisitStack);

  // 탐색을 해야 할 노드가 남아 있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    // const node = needVisitStack.unshift();
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      const children = graph[node].reverse();
      needVisitStack = [...needVisitStack, ...children];
      // console.log(needVisitStack);
    }
  }

  return visitedQueue;
};

// 재귀(오른쪽 -> 왼쪽)
let visited = [];
const recursiveDFS = (graph, startNode) => {
  const currentNode = startNode;
  if (visited.includes(currentNode)) return;
  else {
    visited.push(currentNode);
    // const children = graph[currentNode].reverse();
    for (nextNode of graph[currentNode]) {
      // console.log(nextNode);

      recursiveDFS(graph, nextNode);
    }
  }

  return visited;
}


// 재귀(왼쪽->오른쪽)
let visited2 = [];
const recursiveDFS2 = (graph, startNode) => {
  const currentNode = startNode;
  if (visited2.includes(currentNode)) return;
  else {
    visited2.push(currentNode);
    const children = graph[currentNode].reverse();
    for (nextNode of children) {
      // console.log(nextNode);

      recursiveDFS2(graph, nextNode);
    }
  }

  return visited2;
}

console.log(dfs(graph, 'A'));
console.log(dfs2(graph, 'A'));
console.log('\n');
console.log(recursiveDFS(graph, 'A'));
console.log(recursiveDFS2(graph, 'A'));