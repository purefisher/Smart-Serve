import RPi.GPIO as io
import time
io.setwarnings(False)
io.setmode(io.BCM)
relay1 = 4 #pin 4
relay2 = 27 #pin 7
relay3 = 22 #pin 8
io.setup(relay1, io.OUT)
io.setup(relay2, io.OUT)
io.setup(relay3, io.OUT)
i = 0
while True:
  #print('relay off')
#  io.output(relay1, io.HIGH)
  selection = input("shot or off\n")
  if selection == "shot":
    io.output(relay2, io.HIGH)
    io.output(relay3, io.HIGH)
    time.sleep(14)
    io.output(relay2, io.LOW)
    io.output(relay3, io.LOW)
    exit()
  else:
    io.output(relay2, io.LOW)
    io.output(relay3, io.LOW)
    exit()
    
