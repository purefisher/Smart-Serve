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

def offpumps(pump_config):
    for i in range(0,len(pump_config)):
        io.output(pump_config[i]['Pin'], io.HIGH)


#setting up pin configuration for output of pumps
for i in range(0,len(pumpconfiguration)):
    io.setup(pumpconfiguration[i]['Pin'], io.OUT)
offpumps(pumpconfiguration)

for i in range(0,len(motorconfiguration)):
    io.setup(motorconfiguration[i]['Pin'], io.OUT)
io.output(motorconfiguration[i]['Pin'], io.HIGH)






