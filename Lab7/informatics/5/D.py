n = int(input())
res = 0
input_int_array = [int(x) for x in input().split()]
max = input_int_array[0]
for i in range(1, n):
    if input_int_array[i] > input_int_array[i-1]:
        res += 1
print(res)