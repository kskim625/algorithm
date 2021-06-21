n = input()
if len(n) == 1:
    n = '0' + n
s, new_sum = '', ''
s = str(int(n[0])+int(n[1]))
if len(s) == 1:
    s = '0' + s
new_sum = n[1]+s[1]

count = 1
while n != new_sum:
    s = str(int(new_sum[0])+int(new_sum[1]))
    if len(s) == 1:
        s = '0' + s
    new_sum = new_sum[1]+s[1]
    count += 1
print(count)