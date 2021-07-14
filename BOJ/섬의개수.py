import sys
sys.setrecursionlimit(10**6)
def countisland(x, y, w, h, island):
    if x < 0 or y < 0 or x > h-1 or y > w-1:
        return
    if island[x][y] != 1:
        return
    island[x][y] = 2
    countisland(x-1, y, w, h, island)
    countisland(x+1, y, w, h, island)
    countisland(x, y-1, w, h, island)
    countisland(x, y+1, w, h, island)
    countisland(x-1, y-1, w, h, island)
    countisland(x-1, y+1, w, h, island)
    countisland(x+1, y-1, w, h, island)
    countisland(x+1, y+1, w, h, island)

while True:
    w, h = map(int, input().split(' '))
    if w == 0 and h == 0:
        break
    island = []
    for i in range(h):
        island.append(list(map(int, input().split(' '))))

    answer = 0
    for j in range(h):
        for k in range(w):
            if island[j][k] == 1:
                countisland(j, k, w, h, island)
                answer += 1
    print(answer)