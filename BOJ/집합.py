import sys
m = int(input())
s = set([])
for i in range(m):
    #order = list(map(str, input().split(' ')))
    order = sys.stdin.readline().strip().split()
    if order[0] == 'add':
        s.add(order[1])
    elif order[0] == 'remove':
        s.discard(order[1])
    elif order[0] == 'check':
        if order[1] in s: print(1)
        else: print(0)
    elif order[0] == 'toggle':
        if order[1] in s:
            s.discard(order[1])
        else:
            s.add(order[1])
    elif order[0] == 'all':
        s = set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'])
    elif order[0] == 'empty':
        s = set([])