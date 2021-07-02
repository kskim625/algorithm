def solution(str1, str2):
    
    str1_list, str2_list = [], []
    for i in range(len(str1)-1):
        if str1[i:i+2].isalpha():
            str1_list.append(str1[i:i+2].upper())
    for j in range(len(str2)-1):
        if str2[j:j+2].isalpha():
            str2_list.append(str2[j:j+2].upper())
            
    intersection, union = 0, 0
    for k in range(len(str1_list)):
        if str1_list[k] in str2_list:
            str2_list.remove(str1_list[k])
            intersection += 1
    
    union = (len(str1_list) + len(str2_list))
    if union == 0:
        return 65536
    
    return int((intersection / union) * 65536)