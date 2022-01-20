const INF = Number.POSITIVE_INFINITY; // 양의 무한대
const graph = [
  [0, 2, 5, 1, INF, INF],
  [2, 0, 3, 2, INF, INF],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, INF],
  [INF, INF, 1, 1, 0, 2],
  [INF, INF, 5, INF, 2, 0]
];

let visited = [];
let shortestDistance = [];

// 최소비용을 가진 정점을 찾는다
function getSmallIndex() {
  let min = INF;
  let minValueIndex = 0;
  shortestDistance.forEach((value, index) => {
    if (!visited.includes(index)) {
      if (value < min) {
        min = value;
        minValueIndex = index;
      }
    }
  });

  return minValueIndex;
}

function dijkstra(start) {
  shortestDistance = [...graph[start]];
  console.log("초기상태:", shortestDistance, '\n');
  visited.push(start);

  for (let i = 0; i < shortestDistance.length; i++) {
    const current = getSmallIndex(); // 시작점에서 최소비용으로 연결된 정점을 찾는다
    visited.push(current); // 해당 정점으로 이동(현재 위치가 됨)

    // 현재 정점에서 다른 정점으로 가는 최소비용 갱신
    console.log("갱신전:", shortestDistance);
    shortestDistance.forEach((value, index) => {
      if (!visited.includes(index)) {
        if ((shortestDistance[current] + graph[current][index]) < value) {
          shortestDistance[index] = shortestDistance[current] + graph[current][index];
        }
      }
    });
    console.log("갱신후:", shortestDistance, '\n');
  }

  return shortestDistance;
}

console.log("갱신후:", dijkstra(0));