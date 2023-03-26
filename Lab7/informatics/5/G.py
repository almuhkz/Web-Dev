n = int(input())

input_int_array = [int(x) for x in input().split()]

for i in range(0, int(n/2)):
    temp = input_int_array[i]
    input_int_array[i] = input_int_array[n-i-1]
    input_int_array[n - i - 1] = temp
res = ""
for x in input_int_array:
    res += str(x) + " "
print(res)