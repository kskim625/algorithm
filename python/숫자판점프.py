l = []
for a in range(5):
    l.append(list(map(int, input().split(' '))))

def dfs(case, li, x, y):
    if len(case) == 6:
        if case not in li:
            li.append(case)
        return
    if x < 4:
        dfs(case + str(l[x][y]), li, x+1, y)
    if x > 0:
        dfs(case + str(l[x][y]), li, x-1, y)
    if y < 4:
        dfs(case + str(l[x][y]), li, x, y+1)
    if y > 0:        
        dfs(case + str(l[x][y]), li, x, y-1)
    
def solution():

    answer_list = []
    for x in range(5):
        for y in range(5):
            dfs('', answer_list, x, y)
    print(len(answer_list))

solution()