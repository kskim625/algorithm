comp = int(input())
netw = int(input())
nodes = []
for i in range(netw):
    nodes.append(input().split(' '))

def solution(nodes, n, visited):
    visited[n] = True
    for i in nodes:
        if n == int(i[0]) and not visited[int(i[1])]:
            solution(nodes, int(i[1]), visited)
        if n == int(i[1]) and not visited[int(i[0])]:
            solution(nodes, int(i[0]), visited)
    count = 0
    for j in visited:
        if visited[j]:
            count += 1
    return(count-1)

visited = [False] * (comp + 1)
print(solution(nodes, 1, visited))