def solution(n, words):
    answer = []
    wrong = False

    stack = []
    for i in words:
        if len(stack) < 1:
            stack.append(i)
            continue
        if i in stack or stack[len(stack)-1][len(stack[len(stack)-1])-1] != i[0]:
            stack.append(i)
            wrong = True
            break
        stack.append(i)
    if not wrong:
        return [0, 0]
    answer.append(len(stack)%n)
    if answer == [0]:
        answer[0] = n
    if len(stack)%n == 0:
        answer.append(len(stack)//n)
    else:
        answer.append(len(stack)//n+1)
    return answer

print(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
print(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))
print(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]))
print(solution(2, ["hello", "two"]))