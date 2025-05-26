export const algorithms = [
  "Bubble Sort",
  "Insertion Sort",
  "Selection Sort",
  "Merge Sort",
  "Quick Sort",
  "Heap Sort",
  "Shell Sort"
] as const;

export type Algorithm = (typeof algorithms)[number];

interface ComplexityInfo {
  time: string;
  space: string;
}

interface AlgorithmDetails {
  code: string;
  explanation: string;
}

export const getAlgorithmComplexity = (name: Algorithm): ComplexityInfo => {
  switch (name) {
    case "Bubble Sort": return { time: "O(n²)", space: "O(1)" };
    case "Insertion Sort": return { time: "O(n²)", space: "O(1)" };
    case "Selection Sort": return { time: "O(n²)", space: "O(1)" };
    case "Merge Sort": return { time: "O(n log n)", space: "O(n)" };
    case "Quick Sort": return { time: "O(n log n)", space: "O(log n)" };
    case "Heap Sort": return { time: "O(n log n)", space: "O(1)" };
    case "Shell Sort": return { time: "O(n log n)", space: "O(1)" };
  }
};

export const getAlgorithmDetails = (name: Algorithm): AlgorithmDetails => {
  switch (name) {
    case "Bubble Sort":
      return {
        code: `for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}`,
        explanation: "Time Complexity: O(n²) - Two nested loops iterate through the array\nSpace Complexity: O(1) - Only uses a constant amount of extra space"
      };
    case "Insertion Sort":
      return {
        code: `for (let i = 1; i < arr.length; i++) {
  let key = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}`,
        explanation: "Time Complexity: O(n²) - Nested loop structure for insertion\nSpace Complexity: O(1) - In-place sorting algorithm"
      };
    case "Selection Sort":
      return {
        code: `for (let i = 0; i < arr.length - 1; i++) {
  let minIdx = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIdx]) {
      minIdx = j;
    }
  }
  if (minIdx !== i) {
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
}`,
        explanation: "Time Complexity: O(n²) - Two nested loops to find minimum element\nSpace Complexity: O(1) - In-place comparison sort"
      };
    case "Merge Sort":
      return {
        code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}`,
        explanation: "Time Complexity: O(n log n) - Divide and conquer approach\nSpace Complexity: O(n) - Requires extra space for merging"
      };
    case "Quick Sort":
      return {
        code: `function quickSort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}`,
        explanation: "Time Complexity: O(n log n) - Divide and conquer with partitioning\nSpace Complexity: O(log n) - Due to recursion stack"
      };
    case "Heap Sort":
      return {
        code: `function heapSort(arr) {
  // Build max heap
  for (let i = Math.floor(n/2) - 1; i >= 0; i--)
    heapify(arr, n, i);
    
  // Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}`,
        explanation: "Time Complexity: O(n log n) - Building heap and heapify operations\nSpace Complexity: O(1) - In-place sorting algorithm"
      };
    case "Shell Sort":
      return {
        code: `function shellSort(arr) {
  for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j-gap] > temp; j -= gap) {
        arr[j] = arr[j-gap];
      }
      arr[j] = temp;
    }
  }
}`,
        explanation: "Time Complexity: O(n log n) - Improved insertion sort with gap sequences\nSpace Complexity: O(1) - In-place sorting algorithm"
      };
  }
}; 