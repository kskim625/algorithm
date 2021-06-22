def solution(answers):
    answer = []
    
    one = [1,2,3,4,5]
    two = [2,1,2,3,2,4,2,5]
    three = [3,3,1,1,2,2,4,4,5,5]
    count = [0, 0, 0]
    for i in range(len(answers)):
        if answers[i] == one[i%len(one)]:
            count[0] += 1
        if answers[i] == two[i%len(two)]:
            count[1] += 1
        if answers[i] == three[i%len(three)]:
            count[2] += 1
            
    m = max(count)
    for j in range(len(count)):
        if count[j] == m:
            answer.append(j+1)
            
    return answer