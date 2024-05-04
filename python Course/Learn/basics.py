# PYTHON COURSE IN ONE VIDEO 
#? =============================================================================================================
#                                             * COMMENTS
#? =============================================================================================================
                                                

#todo Comments are consist of two type  
#! first:- (#)
#? Example:- #print("helow")
#! Second:- (''')
#? Example:- ''' print("helow") '''


#                                             
#? =============================================================================================================
                                        #* VARIABLE AND DATRA TYPE
#? =============================================================================================================
 

#todo Variables
#! Variables are container which contain data. It like Kichen container which contain masala and some things
#? Example :- 1-String, 2-Number, 3-boolean, 4-undefined, 5-None
#todo Data type 
#! Data type explane the type of data 
#?Exampel:- a = 3; print(type(a))


#? =============================================================================================================
                                            #* TYPECASTING 
#? =============================================================================================================
# TODO typecasting change the data type of any data 
#? Example :-
#? string = "5"
#? print(int(string) + 1)
#? Number = 5
#? print(str(Number) + " hellow")
#? boolean = "False"
#? boo = bool(boolean)
#? print(type(boo))


#? =============================================================================================================
                                            #* OPERATORS IN PYTHON 
#? =============================================================================================================
 
# TODO Operators are use to add and subs and more 
#! Arethmetic in Operators
#?Example:-
# ?num_1 = 11;
# ?num_2 = 5;
#?print(num_1 + num_2)
#?print(num_1 - num_2)
#?print(num_1 * num_2)
#?print(num_1 / num_2)
#?print(num_1 ** num_2)
#?print(num_1 // num_2)
#?print(num_1 % num_2)

#! Assignment Operators 
#? Example:-
#? num = 4;
#?print(num)
#? num += 5;
#?print(num)
#? num -= 2;
#?print(num)
#? num /= 2;
#?print(num)
#? num %= 2;
#?print(num)
#? num **= 2;
#?print(num)
#? num //= 2;
#?print(num)

# ! Comparision Operators
#? num1 = 11;
#? num2 = 5;
#? print(num1 > num2) #True
#? print(num1 < num2) #False
#? print(num1 == num2) #False
#? print(num1 != num2) #True

# ! Logical Operators 
#?num1 = 11;
#?num2 = 5;

#? (num1 == num2 and num1 != num2) #false
#? (num1 == num2 or num1 != num2) #T
#? (num1 < num2 and num1 > num2) #false
#? (num1 > num2 and num1 < num2) #false
#? (num1 > num2 and num1 > num2) #T
#? (num1 < num2 and num1 < num2) #false
#? (num1 < num2 or num1 > num2) #T
#? (num1 > num2 or num1 < num2) #T
#? (num1 > num2 or num1 > num2) #T
#? (num1 < num2 or num1 < num2) #F
#! NOT IS USE TO CHANHE THE ARGUMENT 
#? (not(True))

#? =============================================================================================================
                                            #* METHODS OF STR 
#? =============================================================================================================
#* 
#! STR are immutable which can not be changed:-#?name = "harry"; name.upper(); print(name). The output of this code is harry, its mean str are immutable
#? name = "harry"
# ?print(name)
# ?print(name[0:3]) #it work like js's slice function it start from 0 and till :no-1;
# ?print(name.capitalize())
# ?print(name.upper())
# ?print(name.isalnum())
# ?print(name.isnumeric())
# ?print(name.islower())
#! many Method in str that we learn in GovernerHouse


#? =============================================================================================================
                                           # *INPUT IN PYTHON 
#? =============================================================================================================

# !It is use to take data from user and work as prompt func of js
#?number = input("Enter your number")
#?number1 = int(number)
#?print("I add 6 in your no and make it = ", number1 + 6)


#? =============================================================================================================
                                          # *Multi line String 
#? =============================================================================================================

# ! It is a method for multiline and it work as pr tag of html to change paragraph
# ?a = '''Harry is a good teacher
# !?And
# !?Yousuf inshallah Become a best humane who help the poor people and Become a best programmer Inshallah
# ??'''
# ?print(a)

#? =============================================================================================================
                                            #* LIST OF PYTHON
#? =============================================================================================================

# ! It is a conteiner of many date & It is same to array Of js. It can contain all type of data & it is muteable
#? list3 = [100, 4, 2, 434, 6, 4, 666, 22, 3840, 343,]
# list3.sort()--->  #? It is use to make array assending order means least to big

#? print(list3) 

#? list = [234, 43, 1, 345, "Harry", None, True, 56.55]

#? print(type(list)) 

# list.remove(234)---> #? It is use to remove value in list

# list.append("harry")---> #? It is use to add data in list

# list.extend("Yousuf")---> #? It is use to add data with expend it like {"t", "j"}

# list.clear()---> #? It is use to clear all data in list which become as []

# print(list.count(234))---> #? It is use to determine no of given value in list like:-[1, 1, 2],count(1),output=2

# print(list.index(345))---> #? It is use to determine the index of the list like:-[1, 2, 3],index(2), output=1

# list.pop()---> #? It is use to remove the last value of list

# list.insert(3 , "231")---> #? It is use to add data in which we give two value 1st is where insert and 2nd who insert

#? print(list)

#? =============================================================================================================
                                            #* TUPLE 
#? =============================================================================================================
#! Tupe is like a list but it can not change it's condition it means is immuteable

#? tuple = (3, 4, 52, 2, 4, 5)
# ?tuple[0] = 5 it does not not change it real data
#?print(tuple)

#? =============================================================================================================
                                            #* SETs 
#? =============================================================================================================

#! Set is func that can't repeat the the same no
#? st1 = {1, 34 , 5 ,45 ,432, 34,3, 3}
# ?st2 = {4, 5, 3, 24, 5 , 9}
# ?print(st1.intersection(st2))
# ?print(st1.union(st2))

# ?supset1 = {2, 3, 5}
# ?supset2 = {45, 2, ,3, 5, 6, 7}
# ?print(supset2.issuperset(supset1))
#! Empty symbol is "set()" not a "set{}"
#? =============================================================================================================
                                            #* Ditionary 
#? =============================================================================================================

#! Ditionary is a mutable syntax and it used like an object of js. it stored the data in key and value pairs 
#? dit={
#?     "Name":"yousuf",
# ?    "Class":11,
# ?    "Roll no":21,
# ?    "Subject":"Physics",
# ?    "Number":99
# }
# ?print(dit)
#?? print(dit.values())
#? ?print(dit.keys())
# ??print(dit.items())
# ??print(dit.get("Namea")) #?It is  a reliable as compare to ["name"] because if the key is not present so it not ma?ke error
# ?print(dit["Namea"]) #?It is not a reliable as compare to .get because if the key is not present so it make error?


#? ================================================================================================
                                            #* IF ELSE STASTMENT 
#? ================================================================================================
#! If else is use as similar to js if else 
#? age = int(input("Enter Your Age = " ))
#? if(age <= 9):
#?     print("Your are Younus I know")
#? elif(age >= 18):
#?     print("You must be Laiba or Areeba")
#? else:
#?     print("Please Enter a valid age")
#? print(age)

#? ================================================================================================
                                            #* IF ELSE STASTMENT 
#? ================================================================================================
#! Case and Match is use as similar to js case
# ?a = int(input("Enter your number "))
# ?match a:
# ?    case 1:
# ?        print("I am '1'")
#?     case 2:?
#?         print("I am '2'")
#?     case _:
#?         print("No metch found")?


#? ================================================================================================
                                            #* FOR LOOP 
#? ================================================================================================??
#? list1 = [1, 3, 4, 3, 2,132, 33]
#? for i in range(0):
# ?    print(list1[i])
# ?for items in list1:
# ?    print(items[0])
# ?tuple = (1, 34 ,534, 123 , 423, 321321)
# ?for i in range(4):
# ?    print(tuple[i])
# ?set = {5, 64, 23, 12, 5}
# ?for i in range(1):
# ?    print(set[i]) #This is not possible in set
# ?for items in tuple:
# ?    print(items)
#? ==========================================================================================
                                            #* WHILE LOOP 
#?===========================================================================================??
# ?while(True):
# ?    input1 = int(input("Enter Your Number "))
# ?    if(input1 == 10):
# ?        print
# ?        break
#? while(True):
# ?     a = 50
# ?     input1 = int(input("Enter Your Number "))
# ?     if(input1 > a):
#?           print("This Number is greater then the guess number ! ")
# ?     elif(input1 < a):
# ?          print("This Number is less then the guess number ! ")
#?      elif(input1 == a):
# ?          print("you won the match")
# ?          break
#?     else:
#?           print("Please enter only a number")
#? ==========================================================================================
                                            #* FUNCTION  
#?===========================================================================================??
# ?def letter(name, date, reason, day):
#?     print(f"My name is {name} and \n I want be leave {day} \n to {date}days, my reason is {reason}")
#? letter("Yousuf", 10, "for Health issue", "yesterday" )

#? def avg(a,b):
#?     return (a+b)/2
#? print(avg(5, 8))
#? ==========================================================================================
                                            #* Catch error  
#?===========================================================================================??


# ?try:
# ?    error = int(input("Enter your number"))
# ?except Exception as e:
# ?    print("This is not valid: ", e)








