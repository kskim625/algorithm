n, k = map(int, input().split(' '))
visited = [False] * 100001

def bfs(s):
    
    if n == k:
        return s

    from collections import deque
    queue = deque()
    queue.append([n,0])
    current = 0
    while queue:
        current = queue.popleft()
        if current[0] == k:
            return current[1]
        if not visited[current[0]]:
            visited[current[0]] = True
            if current[0]+1 <= 100000:
                queue.append([current[0]+1, current[1]+1])
            if current[0]-1 >= 0:
                queue.append([current[0]-1, current[1]+1])
            if current[0]*2 <= 100000:
                queue.append([current[0]*2, current[1]+1])
    

print(bfs(0))