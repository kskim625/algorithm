def solution(new_id):
    answer = ''

    new_id = new_id.lower()
    temp = ''
    for i in range(len(new_id)):
        if new_id[i] == '-' or new_id[i] == '_' or new_id[i] == '.' or new_id[i].islower() or new_id[i].isdigit():
            temp += new_id[i]
    
    j = 1
    while j < len(temp):
        if temp[j-1] == '.' and temp[j] == '.':
            temp = temp[:j] + temp[j+1:]
            j -= 1
        j += 1

    if temp[0] == '.':
        temp = temp[1:]
    if len(temp) > 0 and temp[len(temp)-1] == '.':
        temp = temp[:len(temp)-1]

    if temp == '':
        temp = 'a'

    if len(temp) > 15:
        temp = temp[:15]
    if len(temp) > 0 and temp[len(temp)-1] == '.':
        temp = temp[:len(temp)-1]
    
    if len(temp) < 3:
        while len(temp) < 3:
            temp += temp[len(temp)-1]

    #print(temp)

    return temp

solution("...!@BaT#*..y.abcdefghijklm")