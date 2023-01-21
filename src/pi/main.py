import RPi.GPIO as io
import time
io.setwarnings(False)
io.setmode(io.BCM)


class cocktailcreate():
    def __init__(self):
        #this will be the initial state of the machine
        #load pump configuration from a file for each pump
        self.pumpconfiguration=cocktailcreate.pumpconfig()


    def pourdrink(self):

        #check to see if cup is there using sensor functions
        #call two pumps to pour corresponding ingredients, one at a time
        #
        if sense:
            self.pump(ingredient_one)
            self.pump(ingredient_two)
            self.rotate()
        else:
            #alert web app that cup is not present 


    def pump(self):
    
    @staticmethod
    def pumpconfig(self):

    @staticmethod
    def senseconfig(self):
        #load sensor status into this function

    def turntable(self):

    def run(self):
        try :
            while True:
        except:
            dsjfsf



