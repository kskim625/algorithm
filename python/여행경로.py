def dfs(a, tickets, t, c):
    if len(t) == 0:
        a.append(c[1])
        return a

    temp = []
    for i in range(len(t)):
        if c[1] == t[i][0]:
            temp = dfs(a + [c[1]], tickets, t[:i]+t[i+1:], t[i])
        if len(temp)-1 == len(tickets):
            break
    return temp

def solution(tickets):

    answer = []
    from operator import itemgetter
    tickets = sorted(tickets, key=itemgetter(0))
    tickets = sorted(tickets, key=itemgetter(1))
    current = [0]
    for i in range(len(tickets)):
        if tickets[i][0] == 'ICN' and len(answer)-1 != len(tickets):
            answer = ['ICN']
            current = tickets[i]
            answer = dfs(answer, tickets, tickets[:i]+tickets[i+1:], current)
    return answer

print(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]))
#print(solution([["ICN", "ABC"], ["ICN", "ICN"], ["ICN", "ICN"]]))