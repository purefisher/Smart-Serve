import RPi.GPIO as io
import time
import json
import threading



pop_time_constant=10
alcohol_time_constant=5

class cocktailcreate():
    def __init__(self):
        #initialize GPIO 
        io.setwarnings(False)
        io.setmode(io.BOARD)

        self.idle_state = True

        #relay is off when pin given a high 
        self.relay_off_state = 'High'

        self.senseconfiguration = False #assume that it is not ready to receive a drink 
        #this will be the initial state of the machine
        #load pump configuration from a file for each pump
        self.pumpconfiguration=cocktailcreate.pumpconfig()
        
        #io.setup(5,io.OUT) #this is the turntable output

        #setting up each pin to the appropriate pump 
        for i in range(0,len(self.pumpconfiguration)):
            io.setup(self.pumpconfiguration[i]['Pin'], io.OUT) 
        #turn off pumps
        self.offpumps()

    def pourdrink(self, ing1, ing2=None, ing3=None, ing4=None, ing5=None):
        pump_threads=[]

        #each ing is a json object with pump, ingredient, pin, and type (similar to the drinks.json file)
        #this function is going to be called by the web app upon the ordering of a drink
        self.idle_state = False
        if self.senseconfig():
            if ing2 == None:
                self.pumprun(ing1)
            elif ing3 == None:
                try:
                    pump_threads.append(self.threads(ing1))
                    pump_threads.append(self.threads(ing2))
                    for threads in pump_threads:
                         threads.start()
                    
                    for threads in pump_threads:
                         threads.join()
                except:
                    print("Error: unable to start threads")
            elif ing4 == None:
                try:
                    pump_threads.append(self.threads(ing1))
                    pump_threads.append(self.threads(ing2))
                    pump_threads.append(self.threads(ing3))
                    for threads in pump_threads:
                         threads.start()
                    
                    for threads in pump_threads:
                         threads.join()
                except:
                    print("Error: unable to start threads")
            elif ing5 == None:
                try:
                    pump_threads.append(self.threads(ing1))
                    pump_threads.append(self.threads(ing2))
                    pump_threads.append(self.threads(ing3))
                    pump_threads.append(self.threads(ing4))
                    for threads in pump_threads:
                         threads.start()
                    
                    for threads in pump_threads:
                         threads.join()
                except:
                    print("Error: unable to start threads")

            else:
                try:
                    pump_threads.append(self.threads(ing1))
                    pump_threads.append(self.threads(ing2))
                    pump_threads.append(self.threads(ing3))
                    pump_threads.append(self.threads(ing4))
                    pump_threads.append(self.threads(ing5))
                    for threading_t in pump_threads:
                         threading_t.start()
                    
                    for threading_t in pump_threads:
                         threading_t.join()
                except:
                    print("Error: unable to start threads") #use three different threads here
        else:
            print("Fail cup is not present")
            #alert web app that cup is not present 
        self.idle_state = True
    @staticmethod
    def pumpconfig():
        return json.load(open('drinks.json'))

        #this function returns a json list of pump configurations with it's appropriate drinks

    #@staticmethod
    def senseconfig(self):
        #load sensor status into this function
        self.senseconfiguration=True
        return self.senseconfiguration  #output of ultra.py function  

    #def turntable(self):
    
    def threads(self, ing):
        pump_thread=threading.Thread(target=self.pumprun, args=(ing,))
        return pump_thread 

    def pumprun(self, ing): #this is the threading function
        result = [x.strip() for x in ing.split(',')]
        if (int(result[1])==2):
            io.output(int(result[0]), io.LOW)
            print("Pouring pop")
            time.sleep(pop_time_constant)
            io.output(int(result[0]), io.HIGH)
            print("All done pop")
        else:
            io.output(int(result[0]), io.LOW)
            print("Pouring alcohol")
            time.sleep(alcohol_time_constant)
            io.output(int(result[0]), io.HIGH)
            print("All done alcohol")      
    
    def offpumps(self):
        for i in range(0,len(self.pumpconfiguration)):
            io.output(self.pumpconfiguration[i]['Pin'], io.HIGH)

    def run(self):
        try :
            while True:
                print("starting main loop")
        except:
            print("false")




# this is what will be called by the web app bartender.pourdrink(arg1, arg2), create a single object called "bartender" then use that object to access the methods of the class

#ing1=json.load(open('test1ingredient.json'))
#ing2=json.load(open('test2ingredient.json'))
#ing3=json.load(open('test3ingredient.json'))

#bartender.pourdrink(ing1,ing2,ing3)




