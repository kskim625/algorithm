s = str(input())
while len(s) % 3 != 0:
    s = '0' + s

s_list = []
i = 0
while i < len(s):
    s_list.append(s[i:i+3])
    i += 3

table = ['000', '001', '010', '011', '100', '101', '110', '111']
answer = ''
for j in range(len(s_list)):
    answer += str(table.index(s_list[j]))

print(answer)