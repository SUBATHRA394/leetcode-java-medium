/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    // 1. Sort intervals by the start time
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let lastMerged = result[result.length - 1];
        let current = intervals[i];

        // 2. If current interval overlaps with the last merged one
        if (current[0] <= lastMerged[1]) {
            // Merge them by updating the end time to the maximum of both
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // 3. No overlap, just push the current interval
            result.push(current);
        }
    }

    return result;
};
