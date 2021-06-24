c = int(input())
for i in range(c):
    
    li = list(map(int, input().split(' ')))
    n = li.pop(0)
    average = sum(li) / len(li)
    count = 0
    for j in range(len(li)):
        if li[j] > average:
            count += 1
    print("%.3f"%(count/len(li)*100) + "%")