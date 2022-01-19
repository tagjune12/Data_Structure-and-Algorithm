const arr2 = [1, 3, 5, 4, 2, 9, 8, 7, 6, 0];

function selectionSort(arr) {
  console.log("Selection Sort");
  // 바꿀 자리 선택
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    // 바꿀 원소 탐색
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
    console.log(arr);
  }
}
console.log("Original Array:", arr2);
selectionSort(arr2);