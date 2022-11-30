import RPi.GPIO as io
import time
io.setwarnings(False)
io.setmode(io.BCM)
relay1 = 4
relay2 = 27
relay3 = 22
relay4 = 5
relay5 = 6
relay6 = 23
relay7 = 24
relay8 = 25
io.setup(relay1, io.OUT)
io.setup(relay2, io.OUT)
io.setup(relay3, io.OUT)
io.setup(relay4, io.OUT)
io.setup(relay5, io.OUT)
io.setup(relay6, io.OUT)
io.setup(relay7, io.OUT)
io.setup(relay8, io.OUT)
while True:
  #print('relay off')
  io.output(relay1, io.LOW)
  io.output(relay2, io.LOW)
  io.output(relay3, io.LOW)
  io.output(relay4, io.LOW)
  io.output(relay5, io.LOW)
  io.output(relay6, io.LOW)
  io.output(relay7, io.LOW)
  io.output(relay8, io.LOW)
