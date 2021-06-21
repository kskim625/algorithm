def plus(t):
    l = list(t)
    temp = 0
    j = 0
    while j < len(l)-1:
        if l[j+1] == '+':
            temp = l[j] + l[j+2]
            l.pop(j+2)
            l.pop(j+1)
            l.pop(j)
            l.insert(j, temp)
            j -= 1
        j += 1
    return l

def minus(t):
    l = list(t)
    temp = 0
    j = 0
    while j < len(l)-1:
        if l[j+1] == '-':
            temp = l[j] - l[j+2]
            l.pop(j+2)
            l.pop(j+1)
            l.pop(j)
            l.insert(j, temp)
            j -= 1
        j += 1
    return l

def multiply(t):
    l = list(t)
    temp = 0
    j = 0
    while j < len(l)-1:
        if l[j+1] == '*':
            temp = l[j] * l[j+2]
            l.pop(j+2)
            l.pop(j+1)
            l.pop(j)
            l.insert(j, temp)
            j -= 1
        j += 1
    return l

def solution(expression):
    answer = 0

    l = []
    temp = ''
    for i in range(len(expression)):
        if expression[i].isdigit():
            temp += expression[i]
        else:
            l.append(int(temp))
            l.append(expression[i])
            temp = ''
    l.append(int(temp))
    t = tuple(l)
    plus_minus_multiply = []
    plus_multiply_minus = []
    minus_plus_multiply = []
    minus_multiply_plus = []
    multiply_plus_minus = []
    multiply_minus_plus = []
    
    plus_minus_multiply = plus(list(t))
    plus_minus_multiply = minus(plus_minus_multiply)
    plus_minus_multiply = multiply(plus_minus_multiply)
    plus_multiply_minus = plus(list(t))
    plus_multiply_minus = multiply(plus_multiply_minus)
    plus_multiply_minus = minus(plus_multiply_minus)
    minus_plus_multiply = minus(list(t))
    minus_plus_multiply = plus(minus_plus_multiply)
    minus_plus_multiply = multiply(minus_plus_multiply)
    minus_multiply_plus = minus(list(t))
    minus_multiply_plus = multiply(minus_multiply_plus)
    minus_multiply_plus = plus(minus_multiply_plus)
    multiply_plus_minus = multiply(list(t))
    multiply_plus_minus = plus(multiply_plus_minus)
    multiply_plus_minus = minus(multiply_plus_minus)
    multiply_minus_plus = multiply(list(t))
    multiply_minus_plus = minus(multiply_minus_plus)
    multiply_minus_plus = plus(multiply_minus_plus)
    if plus_minus_multiply == []:
        plus_minus_multiply.append(0)
    if plus_multiply_minus == []:
        plus_multiply_minus.append(0)
    if minus_plus_multiply == []:
        minus_plus_multiply.append(0)
    if minus_multiply_plus == []:
        minus_multiply_plus.append(0)
    if multiply_plus_minus == []:
        multiply_plus_minus.append(0)
    if multiply_minus_plus == []:
        multiply_minus_plus.append(0)
    print(max(abs(plus_minus_multiply[0]), abs(plus_multiply_minus[0]), abs(minus_multiply_plus[0]), abs(minus_plus_multiply[0]), abs(multiply_minus_plus[0]), abs(multiply_plus_minus[0])))
    return max(abs(plus_minus_multiply[0]), abs(plus_multiply_minus[0]), abs(minus_multiply_plus[0]), abs(minus_plus_multiply[0]), abs(multiply_minus_plus[0]), abs(multiply_plus_minus[0]))

solution("100-200*300-500+20")