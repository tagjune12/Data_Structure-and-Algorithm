const arr1 = [1, 3, 5, 4, 2, 9, 8, 7, 6, 0];

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
console.log("Original Array:", arr1);

bubbleSort(arr1);