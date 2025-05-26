import React from 'react';
import { Algorithm } from '../utils/algorithms';
import '../styles/AlgorithmExplanation.css';

interface AlgorithmExplanationProps {
  algorithm: Algorithm;
}

const AlgorithmExplanation: React.FC<AlgorithmExplanationProps> = ({ algorithm }) => {
  const getExplanation = () => {
    switch (algorithm) {
      case "Bubble Sort":
        return {
          title: "How Bubble Sort Works",
          steps: [
            "Starting from the first element:",
            "[5, 3, 8, 4, 2] → Compare 5,3 → Swap → [3, 5, 8, 4, 2]",
            "[3, 5, 8, 4, 2] → Compare 5,8 → No swap",
            "[3, 5, 8, 4, 2] → Compare 8,4 → Swap → [3, 5, 4, 8, 2]",
            "[3, 5, 4, 8, 2] → Compare 8,2 → Swap → [3, 5, 4, 2, 8]",
            "First pass complete - largest number (8) is at the end",
            "Second pass:",
            "[3, 5, 4, 2, 8] → Compare 3,5 → No swap",
            "[3, 5, 4, 2, 8] → Compare 5,4 → Swap → [3, 4, 5, 2, 8]",
            "[3, 4, 5, 2, 8] → Compare 5,2 → Swap → [3, 4, 2, 5, 8]",
            "Third pass:",
            "[3, 4, 2, 5, 8] → Compare 3,4 → No swap",
            "[3, 4, 2, 5, 8] → Compare 4,2 → Swap → [3, 2, 4, 5, 8]",
            "Fourth pass:",
            "[3, 2, 4, 5, 8] → Compare 3,2 → Swap → [2, 3, 4, 5, 8]",
            "Array is now sorted!"
          ],
          keyPoints: [
            "Each pass bubbles up the largest unsorted number to its correct position",
            "Number of passes needed = length of array - 1",
            "Early stopping if no swaps in a pass (array is sorted)",
            "Adjacent elements are compared and swapped if out of order"
          ],
          complexity: {
            time: "O(n²) - but can be O(n) for nearly sorted arrays",
            space: "O(1) - only needs one temporary variable for swapping"
          },
          bestFor: "Best for: Small lists and nearly sorted arrays"
        };

      case "Selection Sort":
        return {
          title: "How Selection Sort Works",
          steps: [
            "Starting with unsorted array [64, 25, 12, 22, 11]:",
            "First pass - find minimum in entire array:",
            "[64, 25, 12, 22, 11] → Min is 11 → Swap with first → [11, 25, 12, 22, 64]",
            "Second pass - find minimum in remaining unsorted portion:",
            "[11, 25, 12, 22, 64] → Min is 12 → Swap with second → [11, 12, 25, 22, 64]",
            "Third pass:",
            "[11, 12, 25, 22, 64] → Min is 22 → Swap with third → [11, 12, 22, 25, 64]",
            "Fourth pass:",
            "[11, 12, 22, 25, 64] → Min is 25 → Already in position",
            "Array is now sorted!"
          ],
          keyPoints: [
            "Divides array into sorted and unsorted portions",
            "Repeatedly finds minimum element in unsorted portion",
            "Places minimum at the beginning of unsorted portion",
            "Only performs swaps when necessary (less swaps than bubble sort)"
          ],
          complexity: {
            time: "O(n²) - always performs same number of comparisons",
            space: "O(1) - sorts in-place"
          },
          bestFor: "Best for: Small arrays where memory writes are expensive"
        };

      case "Insertion Sort":
        return {
          title: "How Insertion Sort Works",
          steps: [
            "Starting with array [5, 2, 4, 6, 1, 3]:",
            "Consider first element [5] as sorted portion",
            "Take 2: [5 | 2, 4, 6, 1, 3] → Insert 2 before 5 → [2, 5 | 4, 6, 1, 3]",
            "Take 4: [2, 5 | 4, 6, 1, 3] → Insert 4 after 2 → [2, 4, 5 | 6, 1, 3]",
            "Take 6: [2, 4, 5 | 6, 1, 3] → 6 is larger, stays → [2, 4, 5, 6 | 1, 3]",
            "Take 1: [2, 4, 5, 6 | 1, 3] → Insert 1 at start → [1, 2, 4, 5, 6 | 3]",
            "Take 3: [1, 2, 4, 5, 6 | 3] → Insert 3 after 2 → [1, 2, 3, 4, 5, 6]"
          ],
          keyPoints: [
            "Builds sorted portion one element at a time",
            "Each new element is inserted into its correct position in sorted portion",
            "Shifts elements right to make space for insertion",
            "Very efficient for small and nearly sorted arrays"
          ],
          complexity: {
            time: "O(n²) - but O(n) for nearly sorted arrays",
            space: "O(1) - sorts in-place"
          },
          bestFor: "Best for: Small arrays and nearly sorted arrays"
        };

      case "Merge Sort":
        return {
          title: "How Merge Sort Works",
          steps: [
            "Starting with array [38, 27, 43, 3, 9, 82, 10]",
            "Divide into two halves:",
            "[38, 27, 43, 3] and [9, 82, 10]",
            "Recursively divide left half:",
            "[38, 27] and [43, 3]",
            "Further divide until single elements:",
            "[38] [27] [43] [3] [9] [82] [10]",
            "Merge sorted pairs:",
            "[27, 38] [3, 43] [9, 82] [10]",
            "Merge sorted quads:",
            "[3, 27, 38, 43] [9, 10, 82]",
            "Final merge:",
            "[3, 9, 10, 27, 38, 43, 82]"
          ],
          keyPoints: [
            "Divides array into two halves recursively",
            "Merges sorted halves to produce final sorted array",
            "Uses additional space for merging",
            "Stable sort - maintains relative order of equal elements"
          ],
          complexity: {
            time: "O(n log n) - always same complexity regardless of input",
            space: "O(n) - requires extra space for merging"
          },
          bestFor: "Best for: Large datasets where stable sorting is needed"
        };

      case "Quick Sort":
        return {
          title: "How Quick Sort Works",
          steps: [
            "Starting with array [7, 2, 1, 6, 8, 5, 3, 4]",
            "Choose pivot (last element 4):",
            "Partition phase:",
            "[7, 2, 1, 6, 8, 5, 3, 4] → Move elements ≤ 4 to left",
            "[2, 1, 3, 4, 8, 5, 7, 6] - Pivot (4) is in final position",
            "Recursively sort left partition [2, 1, 3]:",
            "Choose 3 as pivot → [1, 2, 3]",
            "Recursively sort right partition [8, 5, 7, 6]:",
            "Choose 6 as pivot → [5, 6, 8, 7] → [5, 6, 7, 8]",
            "Final sorted array:",
            "[1, 2, 3, 4, 5, 6, 7, 8]"
          ],
          keyPoints: [
            "Selects a 'pivot' element from the array",
            "Partitions other elements into ≤ pivot and > pivot",
            "Recursively sorts the partitions",
            "In-place sorting but not stable"
          ],
          complexity: {
            time: "O(n log n) average, O(n²) worst case",
            space: "O(log n) - due to recursion stack"
          },
          bestFor: "Best for: Large datasets and general-purpose sorting"
        };

      case "Heap Sort":
        return {
          title: "How Heap Sort Works",
          steps: [
            "Starting with array [4, 10, 3, 5, 1]",
            "Build max heap phase:",
            "[4, 10, 3, 5, 1] → Heapify → [10, 5, 3, 4, 1]",
            "Extract max elements:",
            "[10, 5, 3, 4, 1] → Remove 10 → [5, 4, 3, 1, 10]",
            "[5, 4, 3, 1, 10] → Remove 5 → [4, 3, 1, 5, 10]",
            "[4, 3, 1, 5, 10] → Remove 4 → [3, 1, 4, 5, 10]",
            "[3, 1, 4, 5, 10] → Remove 3 → [1, 3, 4, 5, 10]",
            "Final sorted array: [1, 3, 4, 5, 10]"
          ],
          keyPoints: [
            "First builds a max heap from the array",
            "Repeatedly extracts maximum element",
            "Places max at end of array",
            "Maintains heap property after each extraction"
          ],
          complexity: {
            time: "O(n log n) - both building and extracting",
            space: "O(1) - sorts in-place"
          },
          bestFor: "Best for: Large datasets where consistent performance is needed"
        };

      case "Shell Sort":
        return {
          title: "How Shell Sort Works",
          steps: [
            "Starting with array [23, 29, 15, 19, 31, 7, 9, 5]",
            "First gap = 4 (n/2):",
            "Compare and sort elements 4 positions apart:",
            "[23, 29, 15, 19, 31, 7, 9, 5] → [7, 29, 9, 19, 23, 7, 15, 5]",
            "Second gap = 2 (4/2):",
            "Compare and sort elements 2 positions apart:",
            "[7, 29, 9, 19, 23, 7, 15, 5] → [7, 7, 9, 5, 23, 29, 15, 19]",
            "Final gap = 1 (regular insertion sort):",
            "[7, 7, 9, 5, 23, 29, 15, 19] → [5, 7, 7, 9, 15, 19, 23, 29]"
          ],
          keyPoints: [
            "Starts with large gap between elements",
            "Gradually reduces gap size to 1",
            "Performs insertion sort with current gap",
            "More efficient than basic insertion sort"
          ],
          complexity: {
            time: "O(n log n) to O(n²) depending on gap sequence",
            space: "O(1) - sorts in-place"
          },
          bestFor: "Best for: Medium-sized arrays where quick sort isn't effective"
        };

      default:
        return {
          title: "Algorithm Explanation",
          steps: ["Select an algorithm to see its explanation"],
          keyPoints: [],
          complexity: {
            time: "",
            space: ""
          },
          bestFor: ""
        };
    }
  };

  const explanation = getExplanation();

  return (
    <div className="algorithm-explanation">
      <h3>{explanation.title}</h3>
      <div className="explanation-content">
        <div className="detailed-steps">
          <h4>Detailed Steps:</h4>
          <div className="steps-container">
            {explanation.steps.map((step, index) => (
              <div key={index} className="step-item">
                {step.includes('→') ? (
                  <div className="step-with-arrow">
                    {step.split('→').map((part, i) => (
                      <span key={i} className={i % 2 === 1 ? 'step-action' : 'step-array'}>
                        {part.trim()}
                        {i < step.split('→').length - 1 && <span className="arrow">→</span>}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="step-header">{step}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {explanation.keyPoints.length > 0 && (
          <div className="key-points">
            <h4>Key Points:</h4>
            <ul>
              {explanation.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {explanation.complexity.time && (
          <div className="complexity-info">
            <h4>Complexity:</h4>
            <p><strong>Time:</strong> {explanation.complexity.time}</p>
            <p><strong>Space:</strong> {explanation.complexity.space}</p>
          </div>
        )}

        {explanation.bestFor && (
          <div className="best-for">
            <h4>Usage:</h4>
            <p>{explanation.bestFor}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlgorithmExplanation; 