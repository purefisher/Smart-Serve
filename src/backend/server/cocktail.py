import RPi.GPIO as io
import time
import json
import threading
from constants import *

class cocktailcreate():
    def __init__(self):
        #assume GPIO is already set from startup.py file
        self.motor_config = cocktailcreate.config("motors.json")
        self.motor_pin = self.motor_config[0]['Pin']
        self.senseconfiguration = False #assume that it is not ready to receive a drink 
        self.pumpconfiguration = cocktailcreate.config("drinks.json")

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
                    print("3")
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
                    print("3")
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
                    print("3")

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
                    print("3") #use three different threads here
        else:
            print("1")
            #alert web app that cup is not present 
        #self.turntable(self.motor_pin)
        self.idle_state = True
    @staticmethod
    def config(filename):
        return json.load(open(filename))

        #this function returns a json list of pump configurations with it's appropriate drinks

    def senseconfig(self):
        #load sensor status into this function
        self.senseconfiguration=True
        return self.senseconfiguration  #output of ultra.py function  

    def turntable(self):
        io.output(self.motor_pin, io.LOW)
        time.sleep(rotation_constant)
        io.output(self.motor_pin, io.HIGH)

    
    def threads(self, ing):
        pump_thread=threading.Thread(target=self.pumprun, args=(ing,))
        return pump_thread 

    def pumprun(self, ing): #this is the threading function
        result = [x.strip() for x in ing.split(',')]
        if (int(result[1])==1):
            io.output(int(result[0]), io.LOW)
            print("Pouring alcohol")
            time.sleep(single_alc_time_constant)
            io.output(int(result[0]), io.HIGH)
            print("All done alcohol")
        elif (int(result[1])==2):
            io.output(int(result[0]), io.LOW)
            #print("Pouring pop")
            time.sleep(pop_time_constant)
            io.output(int(result[0]), io.HIGH)
            print("All done pop")
        elif (int(result[1])==3):
            io.output(int(result[0]), io.LOW)
            #print("Pouring alcohol")
            time.sleep(double_alc_time_constant)
            io.output(int(result[0]), io.HIGH) 
            #print("All done pouring alcohol")     
    
    def offpumps(self):
        for i in range(0,len(self.pumpconfiguration)):
            io.output(self.pumpconfiguration[i]['Pin'], io.HIGH)
    
    def onpumps(self):
        for i in range(0,len(self.pumpconfiguration)):
            io.output(self.pumpconfiguration[i]['Pin'], io.LOW)

    def clean(self):
        for i in range(0,len(self.pumpconfiguration)):
            io.output(self.pumpconfiguration[i]['Pin'], io.LOW)
        time.sleep(cleaning_constant)
        for i in range(0,len(self.pumpconfiguration)):
            io.output(self.pumpconfiguration[i]['Pin'], io.HIGH)

    def run(self, pin, tim):
        io.output(pin, io.LOW)
        time.sleep(tim)
        io.output(pin, io.HIGH)

    def fill_line(self):
        pump_threads = []
        pump_threads.append(threading.Thread(target=self.run, args=(self.pumpconfiguration[0]['Pin'],pump_one_constant,)))
        pump_threads.append(threading.Thread(target=self.run, args=(self.pumpconfiguration[1]['Pin'],pump_two_constant,)))
        pump_threads.append(threading.Thread(target=self.run, args=(self.pumpconfiguration[2]['Pin'],pump_three_constant,)))
        pump_threads.append(threading.Thread(target=self.run, args=(self.pumpconfiguration[3]['Pin'],pump_four_constant,)))
        pump_threads.append(threading.Thread(target=self.run, args=(self.pumpconfiguration[4]['Pin'],pump_five_constant,)))
        for threads in pump_threads:
            threads.start()
                    
        for threads in pump_threads:
            threads.join()




