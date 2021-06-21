def dfs(begin, target, words, w, s):
    if begin == target:
        return len(words)-len(w)
    for i in range(len(w)):
        wrong = 0
        for j in range(len(begin)):
            if begin[j] != w[i][j]:
                wrong += 1
            if wrong > 1:
                break
        if wrong == 1:
            s = dfs(w[i], target, words, w[:i]+w[i+1:], s+1)
    return s

def solution(begin, target, words):
    
    if target not in words:
        return 0

    answer = 50
    answer = min(answer, dfs(begin, target, words, words, 0))

    return answer

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])