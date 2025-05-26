import { Algorithm } from './algorithms';

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

type SetArray = (arr: number[]) => void;
type SetComparisons = (comp: [number, number] | null) => void;

export const bubbleSort = async (
  array: number[],
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  let arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      setComparisons([j, j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
      }
      await delay(speed);
    }
  }
  setComparisons(null);
};

export const insertionSort = async (
  array: number[],
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  let arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    
    while (j >= 0) {
      setComparisons([j, j + 1]);
      await delay(speed);
      
      if (arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        arr[j + 1] = key;
        setArray([...arr]);
      } else {
        break;
      }
    }
  }
  setComparisons(null);
};

export const selectionSort = async (
  array: number[],
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  let arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      setComparisons([minIdx, j]);
      await delay(speed);
      
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      setArray([...arr]);
    }
  }
  setComparisons(null);
};

const merge = async (
  arr: number[],
  start: number,
  mid: number,
  end: number,
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  const left = arr.slice(start, mid + 1);
  const right = arr.slice(mid + 1, end + 1);
  let i = 0, j = 0, k = start;

  while (i < left.length && j < right.length) {
    setComparisons([start + i, mid + 1 + j]);
    await delay(speed);

    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
    setArray([...arr]);
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
    setArray([...arr]);
    await delay(speed);
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
    setArray([...arr]);
    await delay(speed);
  }
};

const mergeSortHelper = async (
  arr: number[],
  start: number,
  end: number,
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    await mergeSortHelper(arr, start, mid, setArray, setComparisons, speed);
    await mergeSortHelper(arr, mid + 1, end, setArray, setComparisons, speed);
    await merge(arr, start, mid, end, setArray, setComparisons, speed);
  }
};

export const mergeSort = async (
  array: number[],
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  let arr = [...array];
  await mergeSortHelper(arr, 0, arr.length - 1, setArray, setComparisons, speed);
  setComparisons(null);
};

const partition = async (
  arr: number[],
  low: number,
  high: number,
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    setComparisons([j, high]);
    await delay(speed);

    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setArray([...arr]);
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  setArray([...arr]);
  return i + 1;
};

const quickSortHelper = async (
  arr: number[],
  low: number,
  high: number,
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  if (low < high) {
    const pi = await partition(arr, low, high, setArray, setComparisons, speed);
    await quickSortHelper(arr, low, pi - 1, setArray, setComparisons, speed);
    await quickSortHelper(arr, pi + 1, high, setArray, setComparisons, speed);
  }
};

export const quickSort = async (
  array: number[],
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  let arr = [...array];
  await quickSortHelper(arr, 0, arr.length - 1, setArray, setComparisons, speed);
  setComparisons(null);
};

const heapify = async (
  arr: number[],
  n: number,
  i: number,
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n) {
    setComparisons([largest, left]);
    await delay(speed);
    if (arr[left] > arr[largest]) {
      largest = left;
    }
  }

  if (right < n) {
    setComparisons([largest, right]);
    await delay(speed);
    if (arr[right] > arr[largest]) {
      largest = right;
    }
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    setArray([...arr]);
    await heapify(arr, n, largest, setArray, setComparisons, speed);
  }
};

export const heapSort = async (
  array: number[],
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  let arr = [...array];
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(arr, n, i, setArray, setComparisons, speed);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    setArray([...arr]);
    await delay(speed);
    await heapify(arr, i, 0, setArray, setComparisons, speed);
  }

  setComparisons(null);
};

export const shellSort = async (
  array: number[],
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  let arr = [...array];
  const n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j;

      for (j = i; j >= gap; j -= gap) {
        setComparisons([j, j - gap]);
        await delay(speed);

        if (arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          setArray([...arr]);
        } else {
          break;
        }
      }

      arr[j] = temp;
      setArray([...arr]);
    }
  }

  setComparisons(null);
};

export const runSort = async (
  algorithm: Algorithm,
  array: number[],
  setArray: SetArray,
  setComparisons: SetComparisons,
  speed: number
) => {
  switch (algorithm) {
    case "Bubble Sort":
      await bubbleSort(array, setArray, setComparisons, speed);
      break;
    case "Insertion Sort":
      await insertionSort(array, setArray, setComparisons, speed);
      break;
    case "Selection Sort":
      await selectionSort(array, setArray, setComparisons, speed);
      break;
    case "Merge Sort":
      await mergeSort(array, setArray, setComparisons, speed);
      break;
    case "Quick Sort":
      await quickSort(array, setArray, setComparisons, speed);
      break;
    case "Heap Sort":
      await heapSort(array, setArray, setComparisons, speed);
      break;
    case "Shell Sort":
      await shellSort(array, setArray, setComparisons, speed);
      break;
  }
}; 