const graph = [
  [],
  [{ node: 2, cost: 2 }, { node: 3, cost: 5 }, { node: 4, cost: 1 }],
  [{ node: 1, cost: 2 }, { node: 3, cost: 3 }, { node: 4, cost: 2 }],
  [{ node: 1, cost: 5 }, { node: 2, cost: 3 }, { node: 4, cost: 3 }, { node: 5, cost: 1 }, { node: 6, cost: 5 }],
  [{ node: 1, cost: 1 }, { node: 2, cost: 2 }, { node: 3, cost: 3 }, { node: 5, cost: 1 }],
  [{ node: 3, cost: 1 }, { node: 4, cost: 1 }, { node: 6, cost: 2 }],
  [{ node: 3, cost: 5 }, { node: 5, cost: 2 }]
];

function compare(a, b) {
  return a['cost'] - b['cost'];
}

function dijkstra(start) {
  let distance = Array(graph.length).fill(Number.POSITIVE_INFINITY);
  let queue = [];

  distance[start] = 0;
  queue.push({ node: start, cost: 0 });
  queue.sort(compare);

  while (queue.length > 0) {
    const { node: curNode, cost } = queue.shift();

    if (distance[curNode] < cost) continue;

    graph[curNode].forEach((value) => {
      const { node: nextNode, cost: nextCost } = value;
      if (distance[curNode] + nextCost < distance[nextNode]) {
        distance[nextNode] = distance[curNode] + nextCost;
        queue.push({ node: nextNode, cost: distance[nextNode] });
      }
    });
    queue.sort(compare);
  }

  return distance;
};

console.log("최단경로:", dijkstra(1));
// https://devfunny.tistory.com/641