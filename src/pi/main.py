import RPi.GPIO as io
import time
import json
import threading



#represents the GPIO pins for each respective pump

pop_time_constant=10
alcohol_time_constant=5

class cocktailcreate():
    def __init__(self):
        #initialize GPIO 
        io.setwarnings(False)
        io.setmode(io.BOARD)

        self.senseconfiguration = False #assume that it is not ready to receive a drink 
        #this will be the initial state of the machine
        #load pump configuration from a file for each pump
        self.pumpconfiguration=cocktailcreate.pumpconfig()

        self.turntable = False

        #io.setup(5,io.OUT) #this is the turntable output

        #setting up each pin to the appropriate pump 
        
        for i in range(0,len(self.pumpconfiguration)):
            print(self.pumpconfiguration[i]['Pin'])
            io.setup(self.pumpconfiguration[i]['Pin'], io.OUT) 

    def pourdrink(self, ing1, ing2=None, ing3=None):

        #each ing is a json object with pump, ingredient, pin, and type (similar to the drinks.json file)
        #this function is going to be called by the web app upon the ordering of a drink
        pump_threads = []
        if self.senseconfig():
            if ing2 == None:
                self.pumprun(ing1)
            elif ing3 == None:
                try:
                    pump_thread_one=threading.Thread(target=self.pumprun, args=(ing1, "thread1"))
                    pump_threads.append(pump_thread_one)
                    pump_thread_two=threading.Thread(target=self.pumprun, args=(ing2, "thread2"))
                    pump_threads.append(pump_thread_two)
                    for threads in pump_threads:
                         threads.start()
                    
                    for threads in pump_threads:
                         threads.join()
                except:
                    print("Error: unable to start threads")
            else:
                try:
                    pump_thread_one=threading.Thread(target=self.pumprun, args=(ing1, "thread1"))
                    pump_threads.append(pump_thread_one)
                    pump_thread_two=threading.Thread(target=self.pumprun, args=(ing2, "thread2"))
                    pump_threads.append(pump_thread_two)
                    pump_thread_three=threading.Thread(target=self.pumprun, args=(ing1, "thread3"))
                    pump_threads.append(pump_thread_three)
                    for threads in pump_threads:
                         threads.start()
                    
                    for threads in pump_threads:
                         threads.join()
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
        if (ing['Type']==2):
            io.output(ing['Pin'], io.LOW)
            print("Pouring pop")
            time.sleep(pop_time_constant)
            io.output(ing['Pin'], io.HIGH)
            print("All done pop")
        else:
            io.output(ing['Pin'], io.LOW)
            print("Pouring alcohol")
            time.sleep(alcohol_time_constant)
            io.output(ing['Pin'], io.HIGH)
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

bartender = cocktailcreate()

# this is what will be called by the web app bartender.pourdrink(arg1, arg2), create a single object called "bartender" then use that object to access the methods of the class

ing1=json.load(open('test1ingredient.json'))
ing2=json.load(open('test2ingredient.json'))

bartender.pourdrink(ing1,ing2)

