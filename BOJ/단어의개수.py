s_list = list(map(str, input().split(' ')))
answer = len(s_list)
if s_list[0] == '':
    answer -= 1
if s_list[len(s_list)-1] == '':
    answer -= 1
print(answer)