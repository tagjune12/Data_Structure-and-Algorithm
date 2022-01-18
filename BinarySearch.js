function compare(a, b) {
  return a - b;
}

function BinarySearch(arr, target) {
  arr.sort(compare);
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return arr[mid];

    else {
      if (target < arr[mid]) end = mid - 1;
      else start = mid + 1;
    }
  }
  return -1;
}

const arr = [9, 9, 7, 2, 7, 2, 36, 81];
const target = 3;
console.log(BinarySearch(arr, 2));