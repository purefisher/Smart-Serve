from cocktail import cocktailcreate
import json 



# this is what will be called by the web app bartender.pourdrink(arg1, arg2), create a single object called "bartender" then use that object to access the methods of the class

ing1=json.load(open('test1ingredient.json'))
ing2=json.load(open('test2ingredient.json'))
newinstance = cocktailcreate()
newinstance.pourdrink(ing1,ing2)



yes = input()




#call this file from nodejs and figure out how to not make a new instance of a class 

#setup nodejs terminal on windows
    