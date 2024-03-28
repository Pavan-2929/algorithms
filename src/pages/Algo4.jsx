import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const Algo4 = () => {
  const codeString = `import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class LRUPageReplacement {
    public static void main(String[] args) {
        int faults = 0;
        int tableSize;

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the size of the page table: ");
        tableSize = scanner.nextInt();

        System.out.print("\nEnter the number of pages in the reference string: ");
        int length = scanner.nextInt();
        int[] referenceString = new int[length];

        System.out.println("\nEnter the pages in the reference string (separated by spaces):");
        for (int i = 0; i < length; i++) {
            referenceString[i] = scanner.nextInt();
        }
        
        System.out.println();
        List<Integer> pages = new ArrayList<>();

        for (int page : referenceString) {
            System.out.println("Page reference: " + page);
            if (pages.contains(page)) {
                pages.remove(Integer.valueOf(page));
                pages.add(page);
            } else {
                if (pages.size() < tableSize) {
                    pages.add(page);
                } else {
                    pages.remove(0);
                    pages.add(page);
                }
                faults += 1;
            }

            System.out.println("Current pages in memory: " + pages);
        }

        System.out.println("\nTotal page faults = " + faults + "\n");
        scanner.close();
    }
}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Least Recently Used (LRU)</h1>

      <div className="bg-gray-100 rounded-lg p-6 transition-all duration-300 hover:bg-gray-200 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Description:</h2>
        <p className="text-lg">
          LRU is a popular greedy algorithm used in operating systems to
          minimize page faults in memory management. It operates based on the
          principle of locality of reference, favoring pages that have not been
          accessed for the longest time.
        </p>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Algorithm:</h2>
        <p>
          The Least Recently Used (LRU) page replacement algorithm is a greedy
          algorithm used to minimize page faults.
        </p>
        <p>
          When a page replacement is required, LRU replaces the least recently
          used page with a new page.
        </p>
        <p>
          It operates based on the locality of reference, favoring the page that
          has not been used for the longest time.
        </p>
        <p>
          This algorithm can be illustrated with a page reference string and a
          fixed-size page table.
        </p>
      </div>
      <SyntaxHighlighter language="java" style={vs} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>

      <div className="bg-gray-100 rounded-lg p-6 mb-8 flex items-center justify-center flex-col">
        <p className="ml-4 text-2xl font-semibold mb-4">Sample Output</p>
        <img src="/4output.png" alt="Output Screenshot" />
      </div>
      <div className="bg-gray-100 rounded-lg p-6 mb-6 transition-all duration-300 hover:bg-gray-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FiCheckCircle className="mr-2 text-green-500" /> Advantages of Least
          Recently Used (LRU)
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Good for Frequent Access: LRU works well when pages accessed
            recently are likely to be accessed again soon.
          </li>
          <li>
            Easy to Understand: LRU is easy to understand and implement in
            theory. It's all about keeping track of which pages were used least
            recently.
          </li>
          <li>
            Focuses on Recent Activity: LRU looks at recent history to decide
            which pages to keep in memory, improving performance.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-6 transition-all duration-300 hover:bg-gray-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FiXCircle className="mr-2 text-red-500" /> Disadvantages of Least
          Recently Used (LRU)
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Needs More Memory and Time: Implementing LRU efficiently requires
            extra memory and processing power.
          </li>
          <li>
            Sensitive to Access Patterns: LRU doesn't handle all access patterns
            equally well.
          </li>
          <li>
            Can Slow Down System: In situations where there's not enough memory
            for all the needed pages, LRU might cause the system to slow down.
          </li>
          <li>
            May Evict Useful Data Prematurely: LRU may kick out pages that are
            still useful just because they were accessed a little while ago.
          </li>
          <li>
            Complex in Practice: Implementing LRU efficiently in real-world
            systems with many pages and complex memory hierarchies can be
            challenging.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 transition-all duration-300 hover:bg-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg">
          The LRU page replacement algorithm is effective for minimizing page
          faults by favoring pages accessed recently and keeping them in memory.
          It offers advantages such as good performance for frequently accessed
          pages, simplicity in implementation, and focus on recent activity to
          optimize memory usage.
        </p>
      </div>
    </div>
  );
};

export default Algo4;
