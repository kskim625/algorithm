n = 1000 - int(input())

count = 0
while n != 0:
    if n >= 500:
        n -= 500
    elif n >= 100:
        n -= 100
    elif n >= 50:
        n -= 50
    elif n >= 10:
        n -= 10
    elif n >= 5:
        n -= 5
    elif n >= 1:
        n -= 1
    count += 1
print(count)