n = int(input())
res = 0
input_int_array = [int(x) for x in input().split()]
for i in input_int_array:
    if i > 0:
        res += 1
print(res)