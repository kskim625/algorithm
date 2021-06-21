n = int(input())
paper = []
for i in range(n):
    paper.append(input().split(' '))

def solution_w(n, paper):
    all_w = True
    if n == 1:
        if paper[0][0] == '0':
            return 1
        else:
            return 0
    for i in range(len(paper)):
        if '0' in paper[i] and '1' not in paper[i]:
            continue
        else:
            all_w = False
            break
    if all_w == True:
        return 1
    paper_one, paper_two, paper_three, paper_four = [], [], [], []
    for j in range(int(n/2)):
        paper_temp = []
        for k in range(int(n/2)):
            paper_temp.append(paper[j][k])
        paper_one.append(paper_temp)
        paper_temp = []
        for k in range(int(n/2)):
            paper_temp.append(paper[j+int(n/2)][k])
        paper_two.append(paper_temp)
        paper_temp = []
        for k in range(int(n/2)):
            paper_temp.append(paper[j][k+int(n/2)])
        paper_three.append(paper_temp)
        paper_temp = []
        for k in range(int(n/2)):
            paper_temp.append(paper[j+int(n/2)][k+int(n/2)])
        paper_four.append(paper_temp)
    w = 0
    w += solution_w(n/2, paper_one)
    w += solution_w(n/2, paper_two)
    w += solution_w(n/2, paper_three)
    w += solution_w(n/2, paper_four)
    return w

def solution_b(n, paper):
    all_b = True
    if n == 1:
        if paper[0][0] == '1':
            return 1
        else:
            return 0
    for i in range(len(paper)):
        if '1' in paper[i] and '0' not in paper[i]:
            continue
        else:
            all_b = False
            break
    if all_b == True:
        return 1
    paper_one, paper_two, paper_three, paper_four = [], [], [], []
    for j in range(int(n/2)):
        paper_temp = []
        for k in range(int(n/2)):
            paper_temp.append(paper[j][k])
        paper_one.append(paper_temp)
        paper_temp = []
        for k in range(int(n/2)):
            paper_temp.append(paper[j+int(n/2)][k])
        paper_two.append(paper_temp)
        paper_temp = []
        for k in range(int(n/2)):
            paper_temp.append(paper[j][k+int(n/2)])
        paper_three.append(paper_temp)
        paper_temp = []
        for k in range(int(n/2)):
            paper_temp.append(paper[j+int(n/2)][k+int(n/2)])
        paper_four.append(paper_temp)
    b = 0
    b += solution_b(n/2, paper_one)
    b += solution_b(n/2, paper_two)
    b += solution_b(n/2, paper_three)
    b += solution_b(n/2, paper_four)
    return b

print(solution_w(n, paper))
print(solution_b(n, paper))