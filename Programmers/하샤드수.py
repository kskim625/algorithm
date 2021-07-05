def solution(x):
    
    x_sum = 0
    x_str = str(x)
    for i in range(len(x_str)):
        x_sum += int(x_str[i])
    
    return (x % x_sum == 0)