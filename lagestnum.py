print('enter the num')
num1 = input()
print('enter the num')
num2 = input()
print('enter the num')
num3 = input()
if(num1==num2):
    print("num1 and num2 are equal")
elif(num2==num3):
 print('num2 and num3 are equal')
elif(num1==num3):
  print('num1 and num3 are equal')
elif (num1 >= num2) and (num1 >= num3):
   largest = num1
elif (num2 >= num1) and (num2 >= num3):
   largest = num2
else:
   //largest = num3
print("The largest number is", largest)