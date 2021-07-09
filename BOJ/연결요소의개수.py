import sys
n, m = map(int, sys.stdin.readline().split(' '))

nodes = []
answer = 0
visited = [False] * (n+1)
for i in range(m):
    nodes.append(list(map(int, sys.stdin.readline().split(' '))))

def bfs(node):
    s = [node]
    while s:
        current_node = s.pop()
        visited[current_node[0]] = True
        for j in range(len(nodes)):
            if current_node[1] == nodes[j][0] and not visited[current_node[1]]:
                s.append(nodes[j])

for k in range(1, m+1):
    if not visited[nodes[k-1][0]]:
        bfs(nodes[k-1])
        answer += 1

print(answer)