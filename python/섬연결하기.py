def find_parent(parent, x):
    
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

def solution(n, costs):
    
    answer = 0
    parent = [0] * n
    
    from operator import itemgetter
    costs = sorted(costs, key=itemgetter(2))
    
    for i in range(len(parent)):
        parent[i] = i
    for edge in costs:
        a, b, cost = edge
        if find_parent(parent, a) != find_parent(parent, b):
            union_parent(parent, a, b)
            answer += cost
    
    return answer

print(solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]))