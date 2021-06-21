m = 1
for i in range(3):
    m *= int(input())

m = str(m)
answer = [0] * 10
for i in range(len(m)):
    if m[i] == '0':
        answer[0] += 1
    elif m[i] == '1':
        answer[1] += 1
    elif m[i] == '2':
        answer[2] += 1
    elif m[i] == '3':
        answer[3] += 1    
    elif m[i] == '4':
        answer[4] += 1
    elif m[i] == '5':
        answer[5] += 1
    elif m[i] == '6':
        answer[6] += 1
    elif m[i] == '7':
        answer[7] += 1
    elif m[i] == '8':
        answer[8] += 1
    elif m[i] == '9':
        answer[9] += 1

for j in range(len(answer)):
    print(answer[j])