// Function for Sorting the array using a single loop
function sortArrays(arr) {
  // Sorting using a single loop
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // Swapping the elements.
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;

      // updating the value of i = -1
      // so after getting updated for i++
      // in the loop it becomes 0 and
      // the loop begins from the start.
      i = -1;
    }
  }

  return arr;
}

let arr = [1, 2, 100, 9, 8, 7, 6, 0, 5, 4, 3, 5, 9, 5, -4];
document.write("Original array: [" + arr.join(", ") + "]<br>");
// Sorting the array using a single loop
arr = sortArrays(arr);

// Printing the sorted array.
document.write("Sorted array: [" + arr.join(", ") + "]<br>");
