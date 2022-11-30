import RPi.GPIO as io
import time
io.setwarnings(False)   #ignore warnings
io.setmode(io.BOARD)
led1 = 13 #27
led2 = 15 #22
io.setup(led1, io.OUT, initial=io.LOW)
io.setup(led2, io.OUT, initial=io.LOW)
while True:
    io.output(led1, io.HIGH)
    time.sleep(1)
    io.output(led1, io.LOW)
    io.output(led2, io.HIGH)
    time.sleep(1)
    io.output(led2, io.LOW)
    time.sleep(1)
