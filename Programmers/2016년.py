def solution(a, b):
    date_passed = 0

    for i in range(1, a):
        if i == 1 or i == 3 or i == 5 or i == 7 or i == 8 or i == 10 or i == 12:
            date_passed += 31
        elif i == 4 or i == 6 or i == 9 or i == 11:
            date_passed += 30
        elif i == 2:
            date_passed += 29

    date_passed += b-1

    answer_list = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
    return answer_list[date_passed % 7]