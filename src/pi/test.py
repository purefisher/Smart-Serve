import json

pumpconfiguration=json.load(open('drinks.json'))

#print(pumpconfiguration['OJ'])


for i in pumpconfiguration:
    print(pumpconfiguration[i][2]['Pin'])
