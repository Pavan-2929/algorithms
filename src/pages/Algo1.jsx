import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const PreemptivePriorityScheduling = () => {
const codeString = `
import java.util.Scanner;

public class PriorityPreemptive {

    // Variables to store process data
    int burstTime[];
    int priority[];
    int arrivalTime[];
    String[] processId;
    int numberOfProcess;

    // Method to get process data from user input
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

    // Method to implement preemptive priority scheduling algorithm
    void preemptivePriorityAlgorithm() {
        int currentTime = 0;
        int completed = 0;
        String id = "";

        int remainingTime[] = burstTime.clone();
        int waitingTime[] = new int[numberOfProcess];
        int turnAroundTime[] = new int[numberOfProcess];

        System.out.println("\\n Gantt Chart:");

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

        // Calculate average waiting time and turn around time
        float sumWaiting = 0;
        float sumTurnAround = 0;
        for (int i = 0; i < numberOfProcess; i++) {
            sumWaiting += waitingTime[i];
            sumTurnAround += turnAroundTime[i];
        }

        float averageWaitingTime = sumWaiting / numberOfProcess;
        float averageTurnAroundTime = sumTurnAround / numberOfProcess;

        // Display scheduling results
        System.out.println("\\n Preemptive Priority Scheduling Algorithm:\\n");
        System.out.format("%20s%20s%20s%20s%20s%20s%20s\\n", "ProcessId", "BurstTime", "ArrivalTime", "Priority", "WaitingTime", "TurnAroundTime", "FinishTime");
        for (int i = 0; i < numberOfProcess; i++) {
            System.out.format("%20s%20d%20d%20d%20d%20d%20d\\n", processId[i], burstTime[i], arrivalTime[i], priority[i], waitingTime[i], turnAroundTime[i], arrivalTime[i] + turnAroundTime[i]);
        }

        System.out.format("\\n%80s%20f%20f\\n", "Average", averageWaitingTime, averageTurnAroundTime);
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        PriorityPreemptive obj = new PriorityPreemptive();
        obj.getProcessData(input);
        obj.preemptivePriorityAlgorithm();
        input.close(); // Close scanner to avoid resource leak
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
          Preemptive Priority CPU Scheduling Algorithm is a pre-emptive method
          of CPU scheduling algorithm that works based on the priority of a
          process. In this algorithm, the scheduler schedules the tasks to work
          as per the priority, which means that a higher priority process should
          be executed first. In case of any conflict, i.e., when there is more
          than one process with equal priorities, then the pre-emptive priority
          CPU scheduling algorithm works on the basis of FCFS (First Come First
          Serve) algorithm.
        </p>
        <p className="text-lg font-bold mt-4">
          How does Preemptive Priority CPU Scheduling Algorithm decide the
          Priority of a Process?
        </p>
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
          Priority Preemptive Scheduling:
        </h2>
        <ul className="list-disc pl-6 mb-4 flex flex-col gap-4">
          <li>
            High Priority Tasks are Executed Promptly: The main advantage of
            preemptive priority scheduling is that high-priority tasks are
            executed promptly. This ensures that critical tasks are given
            immediate attention, leading to better responsiveness in real-time
            systems.
          </li>
          <li>
            Flexible Allocation of CPU Resources: Preemptive priority scheduling
            allows for dynamic allocation of CPU resources based on task
            priorities. This flexibility ensures that important tasks receive
            adequate processing time, even in a multitasking environment.
          </li>
          <li>
            Improved System Responsiveness: By prioritizing tasks based on their
            importance, preemptive priority scheduling can lead to improved
            system responsiveness, especially in scenarios where certain tasks
            require immediate attention or have strict deadlines.
          </li>
          <li>
            Fairness: Preemptive priority scheduling ensures fairness by
            allowing higher priority tasks to preempt lower priority ones. This
            prevents low-priority tasks from monopolizing CPU resources and
            ensures that all tasks get a fair share of processing time.
          </li>
        </ul>
      </div>

      {/* Disadvantages Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-6 transition-all duration-300 hover:bg-gray-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FiXCircle className="mr-2 text-red-500" /> Disadvantages of Priority
          Preemptive Scheduling:
        </h2>
        <ul className="list-disc pl-6 mb-4 flex flex-col gap-4">
          <li>
            Starvation: One of the significant disadvantages of preemptive
            priority scheduling is the possibility of starvation, where lower
            priority tasks may never get the chance to execute if higher
            priority tasks keep arriving. This can occur if there is a
            continuous stream of high-priority tasks.
          </li>
          <li>
            Priority Inversion: Preemptive priority scheduling is susceptible to
            priority inversion, a scenario where a low-priority task holds a
            resource needed by a high-priority task, effectively blocking the
            high-priority task from executing. This can lead to performance
            degradation and system instability.
          </li>
          <li>
            Complexity: Preemptive priority scheduling introduces complexity
            into the scheduling algorithm due to the continuous monitoring of
            task priorities and potential context switching. This complexity can
            increase the overhead of the system and may require additional
            computational resources.
          </li>
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
