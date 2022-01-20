/**
 * @see https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html
 */
function quickSort(array) {
  // 정렬할 리스트의 길이가 1개 이하면 그대로 반환
  if (array.length < 2) return array;

  const pivot = array[0];

  let leftCursor = 1;
  let rightCursor = array.length - 1;
  while (leftCursor <= rightCursor) {

    // 왼쪽수가 기준보다 크고 오른쪽 수가 기준보다 작으면 위치를 바꿉니다 (swap)
    if (array[leftCursor] > pivot && array[rightCursor] < pivot) {
      [array[leftCursor], array[rightCursor]] = [array[rightCursor], array[leftCursor]];
      leftCursor++;
      rightCursor--;
    }

    // 왼쪽 수는 기준보다 작으면 다음으로 넘어가고, 크면 가만히 있습니다
    if (array[leftCursor] <= pivot) {
      leftCursor++;
    }

    // 오른쪽 수는 기준보다 크면 다음으로 넘어가고, 작으면 가만히
    if (array[rightCursor] >= pivot) {
      rightCursor--;
    }
  }
  console.log("pivot", pivot);
  console.log("array1:", array);

  [array[0], array[leftCursor - 1]] = [array[leftCursor - 1], array[0]];
  console.log("array2:", array);

  const left = array.splice(0, leftCursor - 1);
  const mid = array.splice(0, 1);
  const right = array;
  console.log("left", left);
  console.log("mid", mid);
  console.log("right", right, '\n');

  return [
    ...quickSort(left),
    ...mid,
    ...quickSort(right)
  ];
}
const arr1 = [5, 3, 8, 4, 9, 1, 6, 2, 7];
const arr2 = [5, 1, 1, 2, 0, 0];
console.log(quickSort(arr1));
// console.log(quickSort(arr2));


// 참고: https://velog.io/@sonaky47/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%80%B5%EC%A0%95%EB%A0%AC-quick-sort