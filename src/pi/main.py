import RPi.GPIO as io
import time
import json
from threading import thread



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

        self.turntable = False

        io.setup(5,io.OUT) #this is the turntable output

        #setting up each pin to the appropriate pump 
        for i in self.pumpconfiguration:
            io.setup(self.pumpconfiguration[i][3]['Pin'], io.OUT) 
        

    def pourdrink(self, ing1, ing2=None, ing3=None):

        #each ing is a json object with pump, ingredient, pin, and type (similar to the drinks.json file)
        #this function is going to be called by the web app upon the ordering of a drink
        if self.senseconfig():
            if ing2 == None:
                self.pumprun(ing1)
            elif ing3 == None:
                try:
                    thread.start_new_thread(self.pumprun, (ing1, 'thread1'))
                    thread.start_new_thread(self.pumprun, (ing2, 'thread2'))
                except:
                    print("Error: unable to start threads")
            else:
                try:
                    thread.start_new_thread(self.pumprun(ing1))
                    thread.start_new_thread(self.pumprun(ing2))
                    thread.start_new_thread(self.pumprun(ing3))
                except:
                    print("Error: unable to start threads") #use three different threads here
        else:
            print("Fail cup is not present")
            #alert web app that cup is not present 
    
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

    def pumprun(self, ing, threadnumb): #this is the threading function
        if (ing[4]['Type']==2):
            io.output(ing[3]['Pin'], io.HIGH)
            print("Pouring pop", + threadnumb)
            time.sleep(POP_TIME_CONSTANT)
            io.output(ing[3]['Pin'], io.LOW)
        else:
            io.output(ing[3]['Pin'], io.HIGH)
            print("Pouring alcohol", + threadnumb)
            time.sleep(AlCOHOL_TIME_CONSTANT)
            io.output(ing[3]['Pin'], io.LOW)      

    def run(self):
        try :
            while True:
                print("starting main loop")
        except:
            print("false")

bartender = cocktailcreate()

# this is what will be called by the web app bartender.pourdrink(arg1, arg2), create a single object called "bartender" then use that object to access the methods of the class

ing1=json.load(open('test1ingredient.json'))
ing2=json.load(open('test2ingredient.json'))

bartender.pourdrink(ing1,ing2)