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
        io.setmode(io.BCM)

        self.senseconfiguration = False #assume that it is not ready to receive a drink 
        #this will be the initial state of the machine
        #load pump configuration from a file for each pump
        self.pumpconfiguration=cocktailcreate.pumpconfig()

        self.turntable = False

        #io.setup(5,io.OUT) #this is the turntable output

        #setting up each pin to the appropriate pump 
        print(self.pumpconfiguration[0]['Pin'])
        
        for i in range(0,len(self.pumpconfiguration)):
            #print(self.pumpconfiguration[i]['Pin'])
            io.setup(self.pumpconfiguration[i]['Pin'], io.OUT) 
        

    def pourdrink(self, ing1, ing2=None, ing3=None):

        #each ing is a json object with pump, ingredient, pin, and type (similar to the drinks.json file)
        #this function is going to be called by the web app upon the ordering of a drink
        if self.senseconfig():
            if ing2 == None:
                self.pumprun(ing1)
            elif ing3 == None:
                try:
                    thread1=threading.Thread(target=self.pumprun, args=(ing1, "thread1"))
                    thread2=threading.Thread(target=self.pumprun, args=(ing2, "thread2"))
                    thread1.start()
                    thread2.start()
                    thread1.join()
                    thread2.join()
                except:
                    print("Error: unable to start threads")
            else:
                try:
                    threading.start_new_thread(self.pumprun(ing1))
                    threading.start_new_thread(self.pumprun(ing2))
                    threading.start_new_thread(self.pumprun(ing3))
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
        if (ing[0]['Type']==2):
            io.output(ing[0]['Pin'], io.HIGH)
            print("Pouring pop")
            time.sleep(pop_time_constant)
            io.output(ing[0]['Pin'], io.LOW)
            print("All done pop")
        else:
            io.output(ing[0]['Pin'], io.HIGH)
            print("Pouring alcohol")
            time.sleep(alcohol_time_constant)
            io.output(ing[0]['Pin'], io.LOW)
            print("All done alcohol")      

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

