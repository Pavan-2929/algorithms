import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const Algo3 = () => {
  const codeString = `public class FCFS_DiskScheduling {

    static void FCFS(int arr[], int head) {
        int seekCount = 0;
        int distance, curTrack;

        for (int i = 0; i < arr.length; i++) {
            curTrack = arr[i];

            // Calculate absolute distance
            distance = Math.abs(curTrack - head);

            // Increase the total count
            seekCount += distance;

            // Accessed track is now the new head
            head = curTrack;
        }

        System.out.println("Total number of seek operations = " + seekCount);

        // Seek sequence would be the same as the request array sequence
        System.out.println("Seek Sequence is");

        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public static void main(String[] args) {
        
        int arr[] = { 176, 79, 34, 60, 
                  92, 11, 41, 114 };
        int head = 50;
 
        FCFS(arr, head);
    }
}`;

return (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">First Come First Serve (FCFS)</h1>
    <div className="bg-gray-100 rounded-lg p-6 transition-all duration-300 hover:bg-gray-200 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Description:</h2>
      <p className="text-lg mb-2">
        FCFS is the simplest disk scheduling algorithm where disk requests are
        serviced in the order they arrive in the disk queue. Each request gets a
        fair chance to access the disk, but it may not provide the fastest
        service, especially if there are requests located far apart on the disk.
      </p>
      <p className="text-lg">
        Given an array of disk track numbers and initial head position, the task
        is to find the total number of seek operations done to access all the
        requested tracks using the FCFS disk scheduling algorithm.
      </p>
    </div>
    <div className="bg-gray-100 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Algorithm:</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>Define a request array storing indexes of tracks requested.</li>
        <li>Initialize 'head' as the position of the disk head.</li>
        <li>Iterate through the request array to calculate seek operations.</li>
        <li>Increment the seek count and update the head position.</li>
      </ol>
    </div>
    <SyntaxHighlighter language="java" style={vs} showLineNumbers>
      {codeString}
    </SyntaxHighlighter>

    <div className="bg-gray-100 rounded-lg p-6 mb-8 flex items-center justify-center flex-col">
      <p className="ml-4 text-2xl font-semibold mb-4">Sample Output</p>
      <img src="/3output.png" alt="Output Screenshot" />
    </div>

    <div className="bg-gray-100 rounded-lg p-6 mb-6 transition-all duration-300 hover:bg-gray-200">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FiCheckCircle className="mr-2 text-green-500" /> Advantages of FCFS
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Every request gets a fair chance</li>
        <li>No indefinite postponement</li>
        <li>Simple to implement</li>
      </ul>
    </div>
    <div className="bg-gray-100 rounded-lg p-6 mb-6 transition-all duration-300 hover:bg-gray-200">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FiXCircle className="mr-2 text-red-500" /> Disadvantages of FCFS
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Does not optimize seek time</li>
        <li>May result in longer average response time</li>
        <li>Not suitable for real-time systems</li>
      </ul>
    </div>
    <div className="bg-gray-100 rounded-lg p-6 transition-all duration-300 hover:bg-gray-200">
      <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
      <p className="text-lg">
        FCFS is a basic disk scheduling algorithm suitable for systems with low
        disk utilization and no real-time requirements. While it ensures
        fairness, it may not provide optimal performance in terms of seek time.
        Consideration of alternative scheduling algorithms may be necessary
        depending on the system's requirements.
      </p>
    </div>
  </div>
);
};

export default Algo3;
