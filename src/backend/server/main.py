from cocktail import cocktailcreate
import startup
import sys


newinstance = cocktailcreate()
newinstance.pourdrink(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5])



#call this file from nodejs and figure out how to not make a new instance of a class 

#setup nodejs terminal on windows
    