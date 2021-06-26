
def solution(n):
    
    no = 0
    for i in range(n+1):
        no += i
    
    li = [0] * no
    j, index = 0, 0
    no_to_be_added = 1
    goingDown = True
    n_temp = 1
    
    while j < no:
        li[index] = no_to_be_added
        if goingDown:
            if index + n_temp < len(li) and li[index + n_temp] == 0:
                index += n_temp
                n_temp += 1
            elif index + 1 == len(li):
                goingDown = False
                index -= n_temp
                n_temp -= 1
            elif li[index + 1] == 0:
                index += 1
            else:
                goingDown = False
                index -= n_temp
                n_temp -= 1
        else:
            if index - n_temp > 0 and li[index - n_temp] == 0:
                index -= n_temp
                n_temp -= 1
            else:
                goingDown = True
                index += n_temp
                n_temp += 1
        no_to_be_added += 1
        j += 1
        
    return li