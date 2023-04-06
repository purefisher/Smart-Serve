import RPi.GPIO as io
import time
import json
import threading
from constants import *
from ultra import *

class cocktailcreate():
    def __init__(self):
        #assume GPIO is already set from startup.py file
        self.motor_config = cocktailcreate.config("motors.json")
        self.motor_pin = self.motor_config[0]['Pin']
        self.sensors = cocktailcreate.config("sensors.json")
        self.sensor_one_output_pin = self.sensors[0]['Pin']
        self.sensor_one_input_pin = self.sensors[1]['Pin']
        self.sensor_two_output_pin = self.sensors[2]['Pin']
        self.sensor_two_input_pin = self.sensors[3]['Pin']
        
        
        
        self.popPourTime = 0


        self.senseconfiguration = False #assume that it is not ready to receive a drink 
        self.pumpconfiguration = cocktailcreate.config("drinks.json")

    # this function checks to see if it can start pouring by checking if a cup is present and if the cup isn't full
    def readytopour(self):
        scan = True
        if (self.sense_config() and not self.sense_level_config()):
          scan = False
          
        count = 0
        while(scan):
          cup_sensed = self.turntable()
          time.sleep(1)
          cup_present = self.sense_config()
          cup_full = self.sense_level_config()
          if (cup_present and not cup_full):
             break
          elif (cup_present and cup_full):
             self.turntable_finish()
             time.sleep(3)
          elif (not cup_present and not cup_sensed):
             if count == 2 :
               print('Done')
               exit()
             count += 1
             time.sleep(3)
          time.sleep(5)
        return True
 
    #this function is responsible for setting up the threads and calling the pumps given one to five ingredients
    def pourdrink(self, ing1, ing2=None, ing3=None, ing4=None, ing5=None):
        pump_threads=[]

        self.idle_state = False
        
        if self.readytopour():
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
                    print("3")
        self.turntable_finish()
        self.idle_state = True

    #this function loads the json files for motors, drinks and sensors    
    @staticmethod
    def config(filename):
        return json.load(open(filename))

        #this function returns a json list of pump configurations with it's appropriate drinks
        


    def sense_config(self):
        #load sensor status into this function
        self.senseconfig = cupStatus(self.sensor_one_output_pin, self.sensor_one_input_pin, cup_distance_limit_lower, cup_distance_limit_upper)
        return self.senseconfig  #output of ultra.py function  


    def sense_config_turn(self):
        #load sensor status into this function
        self.senseconfig_turntable = cupStatusTurn(self.sensor_one_output_pin, self.sensor_one_input_pin, cup_distance_limit_turn)
        return self.senseconfig_turntable  #output of ultra.py function
        

    #this function senses the level of liquid
    def sense_level_config(self):
        #load sensor status into this function
        self.senseLevelConfig = fillStatus(self.sensor_two_output_pin, self.sensor_two_input_pin, cup_liquid_limit)
        return self.senseLevelConfig  #output of ultra.py function


    #this function turns the turntable before a drink is made to align the cup or find a cup
    def turntable(self):
        sense_count = 0
        io.output(self.motor_pin, io.LOW)
        time.sleep(0.5)
        cup_sensed = False
        
        starttime = time.time()
        while(sense_count <= 100):
            endtime = time.time()
            if (endtime - starttime > 5):
              exit()
            else :
           
              if (self.sense_config_turn() == False):
                 sense_count = sense_count + 1
              else:
                 cup_sensed = True
                 break
              time.sleep(rotation_constant / 100)
	
        io.output(self.motor_pin, io.HIGH)

        return cup_sensed
    

    #this function is called at the end of a drink poured to rotate the turntable
    def turntable_finish(self):
        sense_count = 0
        io.output(self.motor_pin, io.LOW)
        time.sleep(0.5)

        while(sense_count <= 110):
            if (self.sense_config_turn() == False):
               sense_count = sense_count + 1
            else:
               break
            time.sleep(finished_rotation_constant / 110)

        io.output(self.motor_pin, io.HIGH)
  

    #this function creates a thread
    def threads(self, ing):
        pump_thread=threading.Thread(target=self.pumprun, args=(ing,))
        return pump_thread 


    #this function will run the pumps for a given time based on the ingredient passed as a parameter
    def pumprun(self, ing): #this is the threading function
        result = [x.strip() for x in ing.split(',')]
        single_alc_time_constant = 0
        i = 0
        while i < 5:
          if(pump_constants[i][0] == int(result[0])):
            single_alc_time_constant = pump_constants[i][1]
            break
          i+=1  
        io.output(int(result[0]), io.LOW)
        time.sleep(single_alc_time_constant*float(result[1]))
        io.output(int(result[0]), io.HIGH)
        
   
    #this functions turns all the pumps and motor off
    def off(self):
        for i in range(0,len(self.pumpconfiguration)):
            io.output(self.pumpconfiguration[i]['Pin'], io.HIGH)
        io.output(self.motor_pin, io.HIGH) 

    
    #this function will turn all the pumps on
    def onpumps(self):
        for i in range(0,len(self.pumpconfiguration)):
            io.output(self.pumpconfiguration[i]['Pin'], io.LOW)


    #this function should be used when cleaning the pumps, by running water through them
    def clean(self):
        for i in range(0,len(self.pumpconfiguration)):
            io.output(self.pumpconfiguration[i]['Pin'], io.LOW)
        time.sleep(cleaning_constant)
        for i in range(0,len(self.pumpconfiguration)):
            io.output(self.pumpconfiguration[i]['Pin'], io.HIGH)


    #this function runs the pumps for the given amount of time
    def run(self, pin, tim):
        io.output(pin, io.LOW)
        time.sleep(tim)
        io.output(pin, io.HIGH)


    #this function fills all the lines of the pumps based on their pump constants, should be run at the start of use of machine
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



