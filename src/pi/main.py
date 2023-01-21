import RPi.GPIO as io
import time
import json



#represents the GPIO pins for each respective pump

PUMP_TIME_CONSTANT=10
ALCOHOL_TIME_CONSTANT=5

class cocktailcreate():
    def __init__(self):
        #initialize GPIO 
        io.setwarnings(False)
        io.setmode(io.BCM)

        self.senseconfiguration = False #assume that it is not ready to receive a drink 
        #this will be the initial state of the machine
        #load pump configuration from a file for each pump
        self.pumpconfiguration=cocktailcreate.pumpconfig()

        #setting up each pin to the appropriate pump 
        for i in range(0,len(self.pumpconfiguration)):
            io.setup(self.pumpconfiguration[i]['Pin'], io.OUT) 
        

    def pourdrink(self, ing1, ing2=None, ing3=None):


        #this function is going to be called by the web app upon the ordering of a drink
        if self.senseconfiguration:
            self.pumprun(ing1,ing2)
        else:
            print("Fail")
            #alert web app that cup is not present 


    #def pump(self):
    
    @staticmethod
    def pumpconfig():
        return json.load(open('drinks.json'))

        #this function returns a json list of pump configurations with it's appropriate drinks


    @staticmethod
    def senseconfig():
        #load sensor status into this function
        return self.senseconfiguration =  #output of ultra.py function  

    #def turntable(self):

    def pumprun(self):
        if (self.pumpconfiguration == 2)
            io.output(pump, io.HIGH)
            time.sleep(POP_TIME_CONSTANT)
            io.output(pump, io.LOW)
        else:
            io.output(pump, io.HIGH)
            time.sleep(AlCOHOL_TIME_CONSTANT)
            io.output(pump, io.LOW)        

    def run(self):
        try :
            while True:
                print("hello")
        except:
            print("false")

bartender = cocktailcreate()

# this is what will be called by the web app bartender.pourdrink(arg1, arg2), create a single object called "bartender" then use that object to access the methods of the class