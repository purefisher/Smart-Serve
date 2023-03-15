from cocktail import cocktailcreate
import startup
import sys

newinstance = cocktailcreate()

#verifying the number of arguments which is dependent on how many ingredients there are
if len(sys.argv) == 2:
  newinstance.pourdrink(sys.argv[1])
elif len(sys.argv) == 3:
  newinstance.pourdrink(sys.argv[1], sys.argv[2])
elif len(sys.argv) == 4:
  newinstance.pourdrink(sys.argv[1], sys.argv[2], sys.argv[3])
elif len(sys.argv) == 5:
  newinstance.pourdrink(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
elif len(sys.argv) == 6:
  newinstance.pourdrink(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5])
else:
  print("4")

print('Done')



