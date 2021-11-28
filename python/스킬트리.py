def solution(skill, skill_trees):
    answer = 0
    
    necessary_skills = [''] * len(skill_trees)
    for i in range(len(skill_trees)):
        for j in range(len(skill_trees[i])):
            if skill_trees[i][j] in skill:
                necessary_skills[i] += skill_trees[i][j]
    
    for x in range(len(necessary_skills)):
        skill_temp = skill
        possible = True
        for y in range(len(necessary_skills[x])):
            if necessary_skills[x][y] == skill_temp[0]:
                skill_temp = skill_temp[1:]
            else:
                possible = False
                break
        if possible:
            answer += 1
    
    return answer