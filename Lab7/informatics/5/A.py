n = int(input())
text = input()
arr = text.split(" ")
res = ""
for i in range(0, n):
    if(i % 2 ==0):
        res += arr[i] + " "
print(res)