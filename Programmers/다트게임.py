def solution(dartResult):
    answer = 0
    
    point_list = []
    index = 0
    while index < len(dartResult):
        point = ''
        
        while dartResult[index].isdigit():
            point += dartResult[index]
            index += 1
        if dartResult[index] == 'S':
            point_list.append(int(point))
        elif dartResult[index] == 'D':
            point_list.append(int(point) * int(point))
        else:
            point_list.append(int(point) * int(point) * int(point))
        index += 1
        
        if index < len(dartResult):
            if dartResult[index] == '*':
                index += 1
                point_list[-1] = 2 * point_list[-1]
                if len(point_list) > 1:
                    point_list[-2] = 2 * point_list[-2]
            elif dartResult[index] == '#':
                index += 1
                point_list[-1] = point_list[-1] * -1

    answer = sum(point_list)
    return answer