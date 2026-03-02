import java.util.*;

public class test {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int n = in.nextInt(); // total numbers
        int m = in.nextInt(); // subarray size

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = in.nextInt();
        }

        in.close();

        // Correct HashMap declaration with both type arguments
        Map<Integer, Integer> freq = new HashMap<Integer, Integer>(); 
        int maxUnique = 0;

        // Build initial window
        for (int i = 0; i < m; i++) {
            if (freq.containsKey(arr[i])) {
                freq.put(arr[i], freq.get(arr[i]) + 1);
            } else {
                freq.put(arr[i], 1);
            }
        }
        maxUnique = freq.size();

        // Slide the window
        for (int i = m; i < n; i++) {
            // remove the element going out of window
            int out = arr[i - m];
            freq.put(out, freq.get(out) - 1);
            if (freq.get(out) == 0) {
                freq.remove(out);
            }

            // add the new element coming into the window
            int inNum = arr[i];
            if (freq.containsKey(inNum)) {
                freq.put(inNum, freq.get(inNum) + 1);
            } else {
                freq.put(inNum, 1);
            }

            // update max unique
            if (freq.size() > maxUnique) {
                maxUnique = freq.size();
            }
        }

        System.out.println(maxUnique);
    }
}
