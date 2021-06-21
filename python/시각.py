def solution(n):
    
    count = 0

    h = 0
    while h < n + 1:
        m = 0
        while m < 60:
            s = 0
            while s < 60:
                if "3" in str(h) + str(m) + str(s):
                    count += 1
                s += 1
            m += 1
        h += 1
    print(count)

solution(5)