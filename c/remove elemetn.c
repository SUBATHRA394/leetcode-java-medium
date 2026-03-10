int removeElement(int* nums, int numsSize, int val) {
    int k = 0; // This will track the count of elements not equal to val
    for (int i = 0; i < numsSize; i++) {
        // If the current element is NOT the one we want to remove
        if (nums[i] != val) {
            nums[k] = nums[i]; // Move it to the 'k-th' position
            k++; // Increment the count of kept elements
        }
    }
    return k;
}
