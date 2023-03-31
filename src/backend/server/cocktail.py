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

    def readytopour(self):
        scan = True
        if (self.sense_config() and not self.sense_level_config()):
          scan = False
          
        count = 0
        while(scan):
          #print("B4cup_sensedB4cup_sensedB4cup_sensedB4cup_sensedB4cup_sensedB4cup_sensedB4cup_sensedB4cup_sensedB4cup_sensed")
          cup_sensed = self.turntable()
          #print("Aftercup_sensedAftercup_sensedAftercup_sensedAftercup_sensedAftercup_sensedAftercup_sensedAftercup_sensed")
          time.sleep(1)
          cup_present = self.sense_config()
          cup_full = self.sense_level_config()
          if (cup_present and not cup_full):
             #end while
             #print("sense_level_configsense_level_configsense_level_configsense_level_configsense_level_config")
             #print(self.sense_level_config())
             break
          elif (cup_present and cup_full):
             #half turn! then wait so people can remove cup
             #print("turntable_finishturntable_finishturntable_finishturntable_finishturntable_finishturntable_finish")
             self.turntable_finish()
             time.sleep(3)
          elif (not cup_present and not cup_sensed):
             #print("NoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCupNoCup")
             #wait 10s, try again once more, if there is still no cup, exit program so a message can be sent to user
             #I assume that we will need to add a flag here so the correct message can be sent to user????
             if count == 1 :
               exit()
             count += 1
             time.sleep(5)
          time.sleep(5)
        return True

    def pourdrink(self, ing1, ing2=None, ing3=None, ing4=None, ing5=None):
        pump_threads=[]

        #each ing is a json object with pump, ingredient, pin, and type (similar to the drinks.json file)
        #this function is going to be called by the web app upon the ordering of a drink
        self.idle_state = False
        
        #print(self.sense_config())
        if self.readytopour():
            if ing2 == None:
                self.popPourTime = self.Volume(ing1)
                self.pumprun(ing1)
            elif ing3 == None:
                try:
                    self.popPourTime = self.Volume(ing1, ing2)
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
                    self.popPourTime = self.Volume(ing1, ing2, ing3)
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
                    self.popPourTime = self.Volume(ing1, ing2, ing3, ing4)
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
                    self.popPourTime = self.Volume(ing1, ing2, ing3, ing4, ing5)
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
        self.turntable_finish()
        self.idle_state = True
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
        


    def sense_level_config(self):
        #load sensor status into this function
        self.senseLevelConfig = fillStatus(self.sensor_two_output_pin, self.sensor_two_input_pin, cup_liquid_limit)
        return self.senseLevelConfig  #output of ultra.py function



    def turntable(self):
        sense_count = 0
        io.output(self.motor_pin, io.LOW)
        time.sleep(0.5)
        cup_sensed = False

        while(sense_count <= 100):
            if (self.sense_config_turn() == False):
               sense_count = sense_count + 1
            else:
               cup_sensed = True
               break
            time.sleep(rotation_constant / 100)
	
        io.output(self.motor_pin, io.HIGH)

        return cup_sensed
    


    def turntable_finish(self):
        sense_count = 0
        io.output(self.motor_pin, io.LOW)
        #time.sleep(0.5)
        time.sleep(2*finished_rotation_constant)

#        while(sense_count <= 110):
#            if (self.sense_config_turn() == False):
#               sense_count = sense_count + 1
#            else:
#               break
#            time.sleep(finished_rotation_constant / 110)

        io.output(self.motor_pin, io.HIGH)
  


    def threads(self, ing):
        pump_thread=threading.Thread(target=self.pumprun, args=(ing,))
        return pump_thread 



    def pumprun(self, ing): #this is the threading function
        result = [x.strip() for x in ing.split(',')]
        single_alc_time_constant = 0
        pop_time_constant = 0
        if (int(result[1])==1):
          i = 0
          while i < 5:
            if(pump_constants[i][0] == int(result[0])):
              single_alc_time_constant = pump_constants[i][1]
              break
            i+=1
            
          io.output(int(result[0]), io.LOW)
          #print("Pouring alcohol")
          time.sleep(single_alc_time_constant)
          io.output(int(result[0]), io.HIGH)
          #print("All done alcohol")
        elif (int(result[1])==2):
          i = 0
          while i < 5:
            if(pump_constants[i][0] == int(result[0])):
              pop_time_constant = pump_constants[i][1]
              break
            i+=1
          io.output(int(result[0]), io.LOW)
          #print("Pouring pop")
          time.sleep(pop_time_constant * self.popPourTime)
          io.output(int(result[0]), io.HIGH)
            #print("All done pop")
        #elif (int(result[1])==3):
         #   io.output(int(result[0]), io.LOW)
            #print("Pouring alcohol")
          #  time.sleep(double_alc_time_constant)
           # io.output(int(result[0]), io.HIGH) 
            #print("All done pouring alcohol")     
    


    def off(self):
        for i in range(0,len(self.pumpconfiguration)):
            io.output(self.pumpconfiguration[i]['Pin'], io.HIGH)
        io.output(self.motor_pin, io.HIGH) 


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

    def Volume(self,ing1, ing2=None, ing3=None, ing4=None, ing5=None):
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
        
        return popPourTime


