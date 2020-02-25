while 1:
	x = input("PLease input a number: ")
	if int(x) == -1: break
	else: continue

for y in range(3, 100):
	z = y % 3
	if z == 0:
		print(y)
	else:
		continue

L = [2, 4, 6, 8, 10, 12]
for num in L:
	if num == 10:
		print(num)
	else:
		continue

L = [2, 4, 6, 8, 10, 12]
length = len(L)
get = 0
while get < length:
	if L[get] == 10:
		print(L[get])
		break
	else:
		get += 1
		continue

L = [2, 4, 6, 8, 10, 12]
x = 6
if(x in L):
	print(x);
else:
	print("6 is not in list")
