import React, { useState } from 'react';

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <nav style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e2e8f0',
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <h1 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1e293b',
            }}>
              Sorting Visualizer
            </h1>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
          }}>
            <button 
              onClick={() => setShowAbout(true)}
              style={{
                color: '#64748b',
                background: 'none',
                border: 'none',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: '6px',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              About
            </button>
          </div>
        </div>
      </nav>

      {/* About Modal */}
      {showAbout && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1001,
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '32px',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
          }}>
            <button
              onClick={() => setShowAbout(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '6px',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6l12 12M6 18L18 6" stroke="#64748b" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '16px',
            }}>
              About Sorting Visualizer
            </h2>

            <div style={{
              color: '#475569',
              fontSize: '16px',
              lineHeight: '1.6',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <p>
                Welcome to the Sorting Visualizer! This interactive tool helps you understand how different sorting algorithms work by providing a visual representation of their process.
              </p>

              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginTop: '8px' }}>
                Available Algorithms
              </h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>Bubble Sort:</strong> A simple comparison algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</li>
                <li><strong>Insertion Sort:</strong> Builds the final sorted array one item at a time by repeatedly inserting a new element into the sorted portion of the array.</li>
                <li><strong>Selection Sort:</strong> Divides the input list into a sorted and an unsorted region, and repeatedly selects the smallest element from the unsorted region to add to the sorted region.</li>
                <li><strong>Merge Sort:</strong> A divide-and-conquer algorithm that recursively breaks down a list into smaller sublists until each sublist consists of a single element, then merges those sublists to produce a sorted list.</li>
                <li><strong>Quick Sort:</strong> Another divide-and-conquer algorithm that works by selecting a 'pivot' element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.</li>
                <li><strong>Heap Sort:</strong> Uses a binary heap data structure to sort elements, combining the speed of quick sort with the reliable O(n log n) performance of merge sort.</li>
                <li><strong>Shell Sort:</strong> An optimization of insertion sort that allows the exchange of items that are far apart, producing partially sorted arrays that can be efficiently sorted.</li>
              </ul>

              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginTop: '8px' }}>
                How to Use
              </h3>
              <ol style={{ paddingLeft: '20px' }}>
                <li>Select a sorting algorithm from the sidebar</li>
                <li>Choose between random array generation or custom input</li>
                <li>Adjust the animation speed using the slider</li>
                <li>Click "Start Sorting" to visualize the algorithm in action</li>
              </ol>

              <p>
                The visualization uses color coding to help you understand the process:
              </p>
              <ul style={{ paddingLeft: '20px' }}>
                <li><span style={{ color: '#3b82f6' }}>Blue bars</span> represent unsorted elements</li>
                <li><span style={{ color: '#ef4444' }}>Red bars</span> represent elements being compared</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 