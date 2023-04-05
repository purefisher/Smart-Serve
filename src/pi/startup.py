import RPi.GPIO as io
import time
from constants import *
import json
from cocktail import cocktailcreate

#initialize GPIO 
io.setwarnings(False)
io.setmode(io.BOARD)

def config(filename):
    return json.load(open(filename))

pumpconfiguration = config(drinks_file)
motorconfiguration =config(motors_file)
sensorconfiguration = config(sensors_file)



#setting up pin configuration for output of pumps
for i in range(0,len(pumpconfiguration)):
    io.setup(pumpconfiguration[i]['Pin'], io.OUT)

for i in range(0,len(motorconfiguration)):
    io.setup(motorconfiguration[i]['Pin'], io.OUT)
#set up pin configuration for output for motor

#for i in range(0,len(sensorconfiguration)):
#    if sensorconfiguration[i]['IO'] == 'input':
#        io.setup(sensorconfiguration[i]['Pin'], io.IN)
#    else:
#        io.setup(sensorconfiguration[i]['Pin'], io.OUT)



def offpumps(pump_config):
    for i in range(0,len(pump_config)):
        io.output(pump_config[i]['Pin'], io.HIGH)

#set up pin configuration for sensors 

offpumps(pumpconfiguration)

io.output(11, io.HIGH)	


