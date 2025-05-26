import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { algorithms, Algorithm, getAlgorithmComplexity, getAlgorithmDetails } from "./utils/algorithms";
import { runSort } from "./utils/sorting";
import "./styles/SortingVisualizer.css";
import AlgorithmExplanation from './components/AlgorithmExplanation';

const SortingVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [speed, setSpeed] = useState(200);
  const [isSorting, setIsSorting] = useState(false);
  const [comparisons, setComparisons] = useState<[number, number] | null>(null);
  const [mode, setMode] = useState<"random" | "custom">("random");
  const [customInput, setCustomInput] = useState<string>("");
  const [algorithm, setAlgorithm] = useState<Algorithm>(algorithms[0]);

  const generateArray = () => {
    if (mode === "custom" && customInput.trim() !== "") {
      const parsed = customInput
        .split(",")
        .map(str => Number(str.trim()))
        .filter(num => !isNaN(num));
      setArray(parsed);
    } else {
      const arr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
      setArray(arr);
    }
    setComparisons(null);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const handleSort = async () => {
    setIsSorting(true);
    await runSort(algorithm, array, setArray, setComparisons, speed);
    setIsSorting(false);
  };

  return (
    <div className="sorting-container">
      <Navbar />
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <h3 className="algorithms-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7h18M6 12h12M9 17h6" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Algorithms
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {algorithms.map((alg) => (
              <button
                key={alg}
                onClick={() => setAlgorithm(alg)}
                disabled={isSorting}
                className={`algorithm-button ${algorithm === alg ? "selected" : ""}`}
              >
                <span>{alg}</span>
                {algorithm === alg && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12l5 5l10 -10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Complexity Info */}
          <div className="complexity-box">
            <h4 className="complexity-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8v4l3 3" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="9" stroke="#60a5fa" strokeWidth="2"/>
              </svg>
              <span>{algorithm} Complexity</span>
            </h4>
            <div className="complexity-info">
              <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#e2e8f0" }}>Time:</span>
                {getAlgorithmComplexity(algorithm).time}
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#e2e8f0" }}>Space:</span>
                {getAlgorithmComplexity(algorithm).space}
              </p>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="implementation-box">
            <h4 className="implementation-title">Implementation</h4>
            <pre className="code-block">
              {getAlgorithmDetails(algorithm).code}
            </pre>
            <h4 className="implementation-title">Explanation</h4>
            <p className="explanation-text">
              {getAlgorithmDetails(algorithm).explanation}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="content-area">
          {/* Algorithm Explanation */}
          <AlgorithmExplanation algorithm={algorithm} />

          {/* Visualization Section */}
          <div className="visualization-section">
            <div className="visualization-container">
              <div className="visualization-card">
                {/* Controls */}
                <div className="controls">
                  <div className="control-row">
                    <select
                      className="mode-select"
                      value={mode}
                      onChange={(e) => setMode(e.target.value as "random" | "custom")}
                      disabled={isSorting}
                    >
                      <option value="random">Random Array</option>
                      <option value="custom">Custom Input</option>
                    </select>
                    {mode === "custom" && (
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="Enter numbers separated by spaces"
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        disabled={isSorting}
                      />
                    )}
                  </div>
                  <div className="control-row">
                    <button
                      className="button button-generate"
                      onClick={generateArray}
                      disabled={isSorting}
                    >
                      Generate New Array
                    </button>
                    <button
                      className="button button-sort"
                      onClick={handleSort}
                      disabled={isSorting || array.length === 0}
                    >
                      Sort Array
                    </button>
                  </div>
                  <div className="speed-control">
                    <span>Speed:</span>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      value={speed}
                      onChange={(e) => setSpeed(1010 - parseInt(e.target.value))}
                      disabled={isSorting}
                    />
                  </div>
                </div>

                {/* Visualization */}
                <div className="chart-container">
                  {/* Array Values Display */}
                  <div className="array-display">
                    <span className="array-label">Current Array:</span>
                    <div className="array-values">
                      {array.map((value, index) => (
                        <span
                          key={index}
                          className={`array-value ${comparisons && (comparisons[0] === index || comparisons[1] === index) ? "comparing" : ""}`}
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="bar-chart">
                    {array.map((value, index) => (
                      <div key={index} className="bar-container">
                        <span
                          className={`bar-value ${comparisons && (comparisons[0] === index || comparisons[1] === index) ? "comparing" : ""}`}
                        >
                          {value}
                        </span>
                        <div
                          className={`bar ${comparisons && (comparisons[0] === index || comparisons[1] === index) ? "comparing" : "normal"}`}
                          style={{ height: `${value * 2}px` }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="legend">
                    <div className="legend-item">
                      <div className="legend-color unsorted" />
                      <span className="legend-label">Unsorted</span>
                    </div>
                    <div className="legend-item">
                      <div className="legend-color comparing" />
                      <span className="legend-label">Comparing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
