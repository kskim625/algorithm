x, y = map(int, input().split(' '))

# date_passed 변수로 며칠이 지났는지 계산
date_passed = 0
for i in range(1, x):
    # 1, 3, 5, 7, 8, 10, 12월은 31일이 있는 달
    if i == 1 or i == 3 or i == 5 or i == 7 or i == 8 or i == 10 or i == 12:
        date_passed += 31
    # 4, 6, 9, 11월은 30일이 있는 달
    elif i == 4 or i == 6 or i == 9 or i == 11:
        date_passed += 30
    # 2월은 28일이 있는 달
    elif i == 2:
        date_passed += 28
date_passed += y - 1        # 이 코드로 일 수를 더해준다.

day = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
print(day[date_passed % 7])