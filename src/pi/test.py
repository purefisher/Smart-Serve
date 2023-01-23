import json



#print(pumpconfiguration['OJ'])





def pumpconfig():
    return json.load(open('drinks.json'))

pumpconfiguration=pumpconfig()

for i in pumpconfiguration:
    print(pumpconfiguration[i][2]['Pin'])