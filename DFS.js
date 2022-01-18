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

const bfs = (graph, startNode) => {
  let visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

// 재귀
let visited = [];
const recursiveDFS = (graph, startNode) => {
  const currentNode = startNode;
  if (visited.includes(currentNode)) return;
  else {
    visited.push(currentNode);
    for (nextNode of graph[currentNode]) {
      // console.log(nextNode);
      recursiveDFS(graph, nextNode);
    }
  }

  return visited;
}

console.log(dfs(graph, 'A'));
console.log(bfs(graph, 'A'));
console.log(recursiveDFS(graph, 'A'));