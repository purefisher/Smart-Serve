import RPi.GPIO as io
import time
io.setwarnings(False)
io.setmode(io.BCM)
relay1 = 4
relay2 = 27
relay3 = 22
relay4 = 26
io.setup(relay1, io.OUT)
io.setup(relay2, io.OUT)
io.setup(relay3, io.OUT)
io.setup(relay4, io.OUT)
while True:
  #print('relay off')
#  io.output(relay1, io.HIGH)
  selection = input("On or Off")
  if selection == "On":
    io.output(relay1, io.HIGH)
    io.output(relay2, io.HIGH)
    io.output(relay3, io.HIGH)
    io.output(relay4, io.HIGH)
  else:
    io.output(relay1, io.LOW)
    io.output(relay2, io.LOW)
    io.output(relay3, io.LOW)
    io.output(relay4, io.LOW)
