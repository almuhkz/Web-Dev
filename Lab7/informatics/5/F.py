n = int(input())
res = 0
input_int_array = [int(x) for x in input().split()]
max = input_int_array[0]
for i in range(1, n-1):
    if input_int_array[i - 1] < input_int_array[i] and input_int_array[i + 1] < input_int_array[i]:
        res += 1
print(res)