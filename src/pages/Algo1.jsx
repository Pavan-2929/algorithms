import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const PreemptivePriorityScheduling = () => {
  const codeString = `
import java.util.Scanner;

public class PreemptivePriorityScheduling {

    int burstTime[];
    int priority[];
    int arrivalTime[];
    String[] processId;
    int numberOfProcess;

    void getProcessData(Scanner input) {
        System.out.print("Enter the number of Processes for Scheduling: ");
        int inputNumberOfProcess = input.nextInt();
        numberOfProcess = inputNumberOfProcess;
        burstTime = new int[numberOfProcess];
        priority = new int[numberOfProcess];
        arrivalTime = new int[numberOfProcess];
        processId = new String[numberOfProcess];
        String st = "P";
        
        System.out.println("\\n Enter [burst time, arrival time, priority] (separated by spaces)");
        for (int i = 0; i < numberOfProcess; i++) {
            processId[i] = st.concat(Integer.toString(i));
            System.out.print("Process " + processId[i] + ": ");
            burstTime[i] = input.nextInt();
            arrivalTime[i] = input.nextInt();
            priority[i] = input.nextInt();
        }
    }

    void preemptivePriorityAlgorithm() {
        int currentTime = 0;
        int completed = 0;
        String id = "";

        int remainingTime[] = burstTime.clone();
        int waitingTime[] = new int[numberOfProcess];
        int turnAroundTime[] = new int[numberOfProcess];

        System.out.println("\\nGantt Chart:");

        while (completed != numberOfProcess) {
            int highestPriority = Integer.MAX_VALUE;
            int selectedProcess = -1;
            for (int i = 0; i < numberOfProcess; i++) {
                if (arrivalTime[i] <= currentTime && remainingTime[i] > 0 && priority[i] < highestPriority) {
                    highestPriority = priority[i];
                    selectedProcess = i;
                }
            }

            if (selectedProcess == -1) {
                currentTime++;
                continue;
            }
            
            id = processId[selectedProcess];
            System.out.print("|" + id + " -> " + currentTime + "|");

            remainingTime[selectedProcess]--;

            if (remainingTime[selectedProcess] == 0) {
                completed++;
                int finishTime = currentTime + 1;
                turnAroundTime[selectedProcess] = finishTime - arrivalTime[selectedProcess];
                waitingTime[selectedProcess] = turnAroundTime[selectedProcess] - burstTime[selectedProcess];
            }

            currentTime++;
        }
        System.out.print("|" + id + " -> " + currentTime + "|");
        System.out.println();

        float sumWaiting = 0;
        float sumTurnAround = 0;
        for (int i = 0; i < numberOfProcess; i++) {
            sumWaiting += waitingTime[i];
            sumTurnAround += turnAroundTime[i];
        }

        float averageWaitingTime = sumWaiting / numberOfProcess;
        float averageTurnAroundTime = sumTurnAround / numberOfProcess;

        System.out.println("\\nPreemptive Priority Scheduling Algorithm:\\n");
        System.out.format("%-15s%-15s%-15s%-15s%-15s%-15s%-15s\\n", "ProcessId", "BurstTime", "ArrivalTime", "Priority", "WaitingTime", "TurnAroundTime", "FinishTime");
        for (int i = 0; i < numberOfProcess; i++) {
            System.out.format("%-15s%-15d%-15d%-15d%-15d%-15d%-15d\\n", processId[i], burstTime[i], arrivalTime[i], priority[i], waitingTime[i], turnAroundTime[i], arrivalTime[i] + turnAroundTime[i]);
        }

        System.out.format("\\n%90s%-15f%-15f\\n", "Average", averageWaitingTime, averageTurnAroundTime);
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        PreemptivePriorityScheduling obj = new PreemptivePriorityScheduling();
        obj.getProcessData(input);
        obj.preemptivePriorityAlgorithm();
    }
}
`;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Preemptive Priority CPU Scheduling Algorithm
      </h1>

      {/* Description Section */}
      <div className="bg-gray-100 rounded-lg p-6 transition-all duration-300 hover:bg-gray-200 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Description:</h2>
        <p className="text-lg">
          Preemptive Priority CPU Scheduling Algorithm uses a rank-based system
          to define a rank for each process, where lower rank processes have
          higher priority and higher rank processes have lower priority. For
          instance, if there are 10 processes to be executed using this
          Preemptive Algorithm, then process with rank 1 will have the highest
          priority, the process with rank 2 will have comparatively lesser
          priority, and process with rank 10 will have least priority.
        </p>
      </div>

      {/* Algorithm Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8 flex justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Algorithm:</h2>
          <ol className="list-decimal pl-6 mb-4">
            <li>Start with the process having an arrival time of 0.</li>
            <li>
              Choose the next process based on priority:
              <ul className="list-disc pl-6 mb-2">
                <li>If the current process has higher priority, execute it.</li>
                <li>If not, execute the higher priority process.</li>
                <li>If priorities are equal, use FCFS.</li>
              </ul>
            </li>
            <li>Repeat until all processes are completed.</li>
            <li>
              If multiple processes remain, choose the one with the highest
              priority and continue.
            </li>
          </ol>
        </div>
        <div>
          <img src="/1st.png" alt="Algorithm Visual" />
        </div>
      </div>

      <div className="flex justify-around items-center flex-wrap bg-gray-100 rounded-lg p-6 mb-6 transition-all duration-300 hover:bg-gray-200">
        <img src={"1image1.jpg"} alt="" />
        <img src={"1image2.jpg"} alt="" />
      </div>

      {/* Code Syntax Highlighting */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Java Code:</h2>
        <SyntaxHighlighter language="java" style={vs} showLineNumbers>
          {codeString}
        </SyntaxHighlighter>
      </div>

      {/* Output Screenshot */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8 flex items-center justify-center flex-col">
        <p className="ml-4 text-2xl font-semibold mb-4">Sample Output</p>
        <img src="/1output.png" alt="Output Screenshot" />
      </div>

      {/* Advantages Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-6 transition-all duration-300 hover:bg-gray-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FiCheckCircle className="mr-2 text-green-500" /> Advantages of
          preemptive priority scheduling:
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Prompt execution of high-priority tasks.</li>
          <li>Dynamic allocation of CPU resources based on priorities.</li>
          <li>Improved system responsiveness.</li>
          <li>Ensures fairness by preempting lower priority tasks.</li>
        </ul>
      </div>

      {/* Disadvantages Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-6 transition-all duration-300 hover:bg-gray-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FiXCircle className="mr-2 text-red-500" /> Disadvantages of
          preemptive priority scheduling:
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Possibility of starvation for low-priority tasks.</li>
          <li>Susceptibility to priority inversion.</li>
          <li>Increased complexity and potential for indefinite blocking.</li>
        </ul>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 transition-all duration-300 hover:bg-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg">
          The Preemptive Priority CPU Scheduling Algorithm is a crucial method
          for managing processes in computing systems. By prioritizing tasks
          based on their importance and dynamically allocating CPU resources,
          this algorithm ensures prompt execution of high-priority tasks and
          improved system responsiveness. However, it comes with its set of
          challenges and considerations.
        </p>
      </div>
    </div>
  );
};

export default PreemptivePriorityScheduling;
