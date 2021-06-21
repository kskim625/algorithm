for i in range(3):
    yoot = list(map(int, input().split(' ')))
    count = 0
    for i in yoot:
        if i == 1:
            count += 1
    if count == 4:
        print('E')
    elif count == 0:
        print('D')
    elif count == 1:
        print('C')
    elif count == 2:
        print('B')
    elif count == 3:
        print('A')