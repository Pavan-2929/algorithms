import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const Algo2 = () => {
  const javaCode = `
import java.util.concurrent.Semaphore;

class ReaderWritersProblem {

    static Semaphore readLock = new Semaphore(1);
    static Semaphore writeLock = new Semaphore(1);
    static int readCount = 0;

    static class Read implements Runnable {
        @Override
        public void run() {
            try {
                readLock.acquire();
                readCount++;
                if (readCount == 1) {
                    writeLock.acquire();
                }
                readLock.release();
                
                System.out.println("Thread " + Thread.currentThread().getName() + " is READING");
                Thread.sleep(1500);
                System.out.println("Thread " + Thread.currentThread().getName() + " has FINISHED READING");
                
                readLock.acquire();
                readCount--;
                if (readCount == 0) {
                    writeLock.release();
                }
                readLock.release();
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }

    static class Write implements Runnable {
        @Override
        public void run() {
            try {
                writeLock.acquire();
                System.out.println("Thread " + Thread.currentThread().getName() + " is WRITING");
                Thread.sleep(2500);
                System.out.println("Thread " + Thread.currentThread().getName() + " has finished WRITING");
                writeLock.release();
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }

    public static void main(String[] args) throws Exception {
        Read read = new Read();
        Write write = new Write();
        Thread t1 = new Thread(read);
        t1.setName("thread1");
        Thread t2 = new Thread(read);
        t2.setName("thread2");
        Thread t3 = new Thread(write);
        t3.setName("thread3");
        Thread t4 = new Thread(write);
        t4.setName("thread4");
        t2.start();
        t3.start();
        t1.start();
        t4.start();
    }
}
`;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">The Reader-Writer Problem</h1>

      <div className="bg-gray-100 rounded-lg p-6 transition-all duration-300 hover:bg-gray-200 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Description:</h2>
        <p className="text-lg">
          The Preemptive Priority CPU Scheduling Algorithm is a method that
          schedules tasks based on their priority, ensuring that higher priority
          processes are executed first. In cases of equal priorities, the
          algorithm resorts to First Come First Serve (FCFS). It's useful for
          real-time systems where responsiveness is critical.
        </p>
      </div>

      {/* Description Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Algorithm:</h2>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            The reader-writer problem involves multiple threads accessing a
            shared resource concurrently.
          </li>
          <li>
            Readers can access the resource simultaneously, while writers
            require exclusive access.
          </li>
          <li>
            Semaphores, such as Mutex and Binary Semaphores, are commonly used
            to synchronize access to shared resources.
          </li>
          <li>
            Mutex Semaphore ensures mutual exclusion, allowing only one thread
            to access the critical section at a time.
          </li>
          <li>
            Binary Semaphore controls access to the shared resource itself,
            allowing exclusive access for writers and synchronization for
            readers.
          </li>
          <li>
            Readers acquire a mutex semaphore before accessing the resource and
            release it after use.
          </li>
          <li>
            Writers acquire the binary semaphore for exclusive access to the
            resource during write operations.
          </li>
          <li>
            Proper synchronization using semaphores ensures data integrity and
            prevents race conditions.
          </li>
        </ol>
      </div>

      {/* Code Syntax Highlighting */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Java Code:</h2>
        <SyntaxHighlighter language="java" style={vs} showLineNumbers>
          {javaCode}
        </SyntaxHighlighter>
      </div>

      {/* Output Screenshot */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8 flex items-center justify-center flex-col">
        <p className="text-2xl font-semibold mb-4">Sample Output</p>
        <img src="/2output.png" alt="Output Screenshot" className="h-64" />
      </div>

      {/* Advantages Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FiCheckCircle className="mr-2 text-green-500" /> Advantages of The
          Reader-Writer Problem
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Semaphores control access to shared data, ensuring orderly execution
            of processes.
          </li>
          <li>
            They offer flexibility in managing interactions between readers and
            writers.
          </li>
          <li>Semaphores are efficient in terms of time and memory usage.</li>
          <li>
            Fairness is ensured as threads waiting for access are treated
            fairly.
          </li>
          <li>
            Semaphore-based solutions are widely applicable across different
            environments.
          </li>
        </ul>
      </div>

      {/* Disadvantages Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FiXCircle className="mr-2 text-red-500" /> Disadvantages of The
          Reader-Writer Problem
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Semaphore-based synchronization can be complex and prone to
            mistakes.
          </li>
          <li>
            There's a risk of deadlocks if semaphores are not used carefully.
          </li>
          <li>
            Priority inversion may occur, affecting the scheduling of tasks.
          </li>
          <li>
            Debugging semaphore-related issues can be challenging, especially in
            complex programs.
          </li>
          <li>
            Semaphore usage adds some overhead to the program, affecting
            performance in certain scenarios.
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

export default Algo2;
