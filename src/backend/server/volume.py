
#using 1 for shot and 2 for pop

def Volume(ing1, ing2=None, ing3=None, ing4=None, ing5=None):
    result = [[0,0],[0,0],[0,0],[0,0],[0,0]]
    if ing2 == None:
        result[0] = [x.strip() for x in ing1.split(',')]
    elif ing3 == None:
        result[0] = [x.strip() for x in ing1.split(',')]
        result[1] = [x.strip() for x in ing2.split(',')]
    elif ing4 == None:
        result[0] = [x.strip() for x in ing1.split(',')]
        result[1] = [x.strip() for x in ing2.split(',')]
        result[2] = [x.strip() for x in ing3.split(',')]
    elif ing5 == None:
        result[0] = [x.strip() for x in ing1.split(',')]
        result[1] = [x.strip() for x in ing2.split(',')]
        result[2] = [x.strip() for x in ing3.split(',')]
        result[3] = [x.strip() for x in ing4.split(',')]
    else:
        result[0] = [x.strip() for x in ing1.split(',')]
        result[1] = [x.strip() for x in ing2.split(',')]
        result[2] = [x.strip() for x in ing3.split(',')]
        result[3] = [x.strip() for x in ing4.split(',')]
        result[4] = [x.strip() for x in ing5.split(',')]
        
    numShots = 0
    numPops = 0
    popPourTime = 0
    i = 0
    while i < 5:
        if(result[i][0] == 0):
            break
        elif result[i][1] == '1' :
            numShots +=1
        elif(result[i][1] == '2'):
            numPops +=1
        i+=1

    popRemaining = 4 - numShots
    if(numPops > 0):
        popPourTime = popRemaining / numPops
    
    print(result)
    print(numShots)
    print(numPops)
    print(popRemaining)
    print(popPourTime)
    print("\n\n\n")
    return True

ing1 = "40,1"
ing2 = "42,2"
ing3 = "44,1"
ing4 = "46,2"
ing5 = "48,2"

Volume(ing1)
Volume(ing1,ing2)
Volume(ing1,ing2,ing3)
Volume(ing1,ing2,ing3,ing4)
Volume(ing1,ing2,ing3,ing4,ing5)
