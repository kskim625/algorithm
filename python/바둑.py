#unsolved
n, m = map(int, input().split(' '))
stage = []
for i in range(n):
    stage.append(input().split(' '))

x, y = 0, 0
p, c = 0, 0
answer = 0

def solution(x, y, p):
    if p == 2:
        count = 0
        for a in range(n):
            for b in range(m):
                if stage[a][b] == '2':
                    count += 1
                if count > 0 and stage[a][b] == '0':
                    count = 0
                if stage[a][b] == '1':
                    continue
        return count


    for i in range(x, n):
        for j in range(y, m):
            if stage[x][y] == '0' and p < 2:
                stage[x][y] == '1'
                answer = max(solution(x, y, p+1), answer)
    
    return answer