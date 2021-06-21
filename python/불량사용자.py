def check(b, u):
    for x in range(len(b)):
        if b[x] != u[x] and b[x] != '*':
            return False
    return True

def solution(user_id, banned_id):
    
    s = []
    from itertools import permutations
    a = list(permutations(user_id, len(banned_id)))

    for i in range(len(a)):
        user = a[i]
        j = 0
        temp = []
        for k in range(len(user)):
            if len(banned_id[j]) != len(user[k]):
                break
            if not check(banned_id[j], user[k]):
                break
            else:
                temp.append(user[k])
                j += 1
            if len(temp) == len(banned_id):
                if sorted(temp) not in s:
                    s.append(sorted(temp))
                break
            if j >= len(banned_id):
                break
    return len(s)

print(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],["fr*d*", "abc1**"]))
print(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],["*rodo", "*rodo", "******"]))
print(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],["fr*d*", "*rodo", "******", "******"]))
print(solution(["12345", "13579"],["1****", "12***"]))