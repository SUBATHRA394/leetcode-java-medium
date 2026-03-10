class Solution(object):
    def generateParenthesis(self, n):
        res = []        
        def backtrack(current_str, open_count, close_count):
            # Base case: if the string length is 2*n, we found a valid combination
            if len(current_str) == 2 * n:
                res.append(current_str)
                return            
            # If we can still add an open parenthesis, do it
            if open_count < n:
                backtrack(current_str + "(", open_count + 1, close_count)            
            # If there are open parentheses that need closing, add a closed one
            if close_count < open_count:
                backtrack(current_str + ")", open_count, close_count + 1)        
        backtrack("", 0, 0)
        return res
