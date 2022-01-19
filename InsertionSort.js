const arr3 = [1, 3, 5, 4, 2, 9, 8, 7, 6, 0];

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
console.log("Original Array:", arr3);
insertionSort(arr3);