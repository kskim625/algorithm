n, k = input().split(' ')
n, k = int(n), int(k)
list_a = list(map(int, input().split(' ')))
list_b = list(map(int, input().split(' ')))

def sort_a(a):

    if len(a) <= 1:
        return a

    pivot_a = a[0]
    tail_a = a[1:]
    left_a = [x for x in tail_a if x <= pivot_a]
    right_a = [x for x in tail_a if x > pivot_a]

    return sort_a(left_a) + [pivot_a] + sort_a(right_a)

def sort_b(b):

    if len(b) <= 1:
        return b

    pivot_b = b[0]
    tail_b = b[1:]
    left_b = [x for x in tail_b if x >= pivot_b]
    right_b = [x for x in tail_b if x < pivot_b]

    return sort_b(left_b) + [pivot_b] + sort_b(right_b)

list_a = sort_a(list_a)
list_b = sort_b(list_b)

sum = 0
for i in range(n):
    if i < k:
        sum += int(list_b[i])
    else:
        sum += int(list_a[i])
print(sum)