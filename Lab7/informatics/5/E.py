n = int(input())
res = False
input_int_array = [int(x) for x in input().split()]
max = input_int_array[0]
for i in range(1, n):
    if (input_int_array[i] > 0 and input_int_array[i-1] > 0) or (input_int_array[i] < 0 and input_int_array[i-1] < 0):
        res = True

if (res):
    print("YES")
else:
    print("NO")