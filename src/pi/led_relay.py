import RPi.GPIO as io
import time
io.setwarnings(False)
io.setmode(io.BOARD)
led1 = 13
led2 = 15
relay1 = 11
io.setup(led1, io.OUT)
io.setup(led2, io.OUT)
io.setup(relay1, io.OUT)
while True:
#	io.output(led1, io.HIGH)
#	io.output(led2, io.HIGH)
	io.output(relay1, io.HIGH)
	time.sleep(1)
	io.output(relay1, io.LOW)
	time.sleep(1)
#	io.output(led1, io.LOW)
#	io.output(led2, io.LOW)
#	io.output(relay1, io.LOW)
