n, m = map(int, input().split(' '))
score_list = list(map(int, input().split(' ')))

students = [[]] * m
for i in range(m):
    students[i] = list(map(str, input().split(' ')))

students_score = [0] * m
for i in range(m):
    for j in range(1, n+1):
        if students[i][j] == 'O':
            students_score[i] += score_list[j-1]

students_with_best_score = []
for x in range(len(students_score)):
    if students_score[x] == max(students_score):
        students_with_best_score.append(int(students[x][0]))

print(str(min(students_with_best_score)) + ' ' + str(max(students_score)))