function merge(arr, left, mid, right) {
  // i: 정렬된 왼쪽 리스트에 대한 인덱스
  // j: 정렬된 오른쪽 리스트에 대한 인덱스
  // k: 정렬될 리스트에 대한 인덱스
  let i = left;
  let j = mid + 1;
  let k = left;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      sortedArr[k++] = arr[i++];
    }
    else {
      sortedArr[k++] = arr[j++];
    }
  }
  // 원소가 남은경우
  if (i > mid) {
    for (let m = j; m <= right; m++) {
      sortedArr[k++] = arr[m];
    }
  }
  else { // (j > right)
    for (let m = i; m <= mid; m++) {
      sortedArr[k++] = arr[m];
    }
  }

  sortedArr.forEach((value, index) => {
    arr[index] = value;
  });
}

function mergeSort(arr, left, right) {
  if (left < right) { // 이걸 벗어나는경우는 나눴을때 배열의 길이가 1인 경우
    const mid = Math.floor(((left + right) / 2));
    // 배열을 나눔(절반나누는걸 길이가 1이 될때까지 계속 반복)
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    // 나눈 배열을 정렬
    merge(arr, left, mid, right);
  }
}

const arr = [0, 8, 7, 2, 9, 1, 23, 15, 7];
let sortedArr = Array(arr.length);

mergeSort(arr, 0, arr.length - 1);
console.log(arr);


// 참고: https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html