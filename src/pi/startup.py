import RPi.GPIO as io
from cocktail import cocktailcreate as cocktail 


#initialize GPIO 
io.setwarnings(False)
io.setmode(io.BOARD)

pumpconfiguration = cocktail.pumpconfig()

#setting up pin configuration for output of pumps
for i in range(0,len(pumpconfiguration)):
    io.setup(pumpconfiguration[i]['Pin'], io.OUT)

#set up pin configuration for output for motor
io.setup(5,io.OUT) 


def offpumps(pump_config):
    for i in range(0,len(pump_config)):
        io.output(pump_config[i]['Pin'], io.HIGH)

#set up pin configuration for sensors 

cocktail.offpumps(pumpconfiguration)

