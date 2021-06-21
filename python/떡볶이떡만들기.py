n, m = map(int, input().split(' '))
l = list(map(int, input().split(' ')))
start = 0
end = max(l)

def binarysearch(start, end):

    if start == end:
        return start + 1

    sum = 0
    for i in range(len(l)):
        if l[i] > start + (end - start) // 2:
            sum += (l[i] - start - ((end - start) // 2))
    if sum == m:
        return start + 1
    elif sum > m:
        return binarysearch(start + (end - start) // 2, end)
    return binarysearch(start, start + (end - start) // 2)

print(binarysearch(start, end))