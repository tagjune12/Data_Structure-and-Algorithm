const arr1 = [1, 3, 5, 4, 2, 9, 8, 7, 6, 0];
const arr2 = [1, 3, 5, 4, 2, 9, 8, 7, 6, 0];
const arr3 = [1, 3, 5, 4, 2, 9, 8, 7, 6, 0];

function bubbleSort(arr) {
  console.log("Bubble Sort");
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j + 1];
        // arr[j + 1] = arr[j];
        // arr[j] = temp;
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
    console.log(arr);
  }
}

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

function insertionSort(arr) {
  console.log("Insertion Sort");
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i]; // key
    let left = i - 1;
    while (left >= 0 && arr[left] > key) {
      arr[left + 1] = arr[left];
      left--;
    }
    arr[left + 1] = key;
    console.log(arr);
  }
}

console.log("Original Array:", arr1);

// bubbleSort(arr1);
// selectionSort(arr2);
insertionSort(arr3);