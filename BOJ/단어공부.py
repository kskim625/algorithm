s = str(input().upper())                    # 대소문자 구분을 없애기 위해 대문자로 변환 후 받아들임
dic = {}                                    # 총 횟수를 세기 위해 딕셔너리 생성
for i in range(len(s)):
    dic[s[i]] = dic.get(s[i], 0) + 1

index = 0                                   # 가장 자주 나오는 값이 위치한 인덱스 값
k = list(dic.keys())                        
v = list(dic.values())
m = max(v)                                  # 이후 loop 에서 가장 자주 나오는 값이 아닐 때 '?' 프린트를 방지하기 위해 필요
printed = False                             # 가장 큰 값이 반복됐을 때 True 변환 (line 15)

for j in range(1, len(v)):
    if v[index] == v[j] and v[index] == m:
        print('?')
        printed = True
        break                               # 가장 큰 값이 반복된 것을 확인, 더이상 코드 진행 불필요
    elif v[index] < v[j]:                   # 더 자주 나오는 값 확인 시 index 값 바꿔줌
        index = j

if not printed:                             # 반복되지 않으면 letter 프린트
    print(k[index])