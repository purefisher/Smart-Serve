import json



#print(pumpconfiguration['OJ'])





def pumpconfig():
    return json.load(open('drinks.json'))

pumpconfiguration=pumpconfig()

print(pumpconfiguration[0])
