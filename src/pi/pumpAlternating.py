import RPi.GPIO as io
import time
io.setwarnings(False)
io.setmode(io.BCM)
relay1 = 4
relay2 = 27
relay3 = 22
io.setup(relay1, io.OUT)
io.setup(relay2, io.OUT)
io.setup(relay3, io.OUT)
while True:
  #print('relay off')
  #io.output(relay1, io.HIGH)
  io.output(relay2, io.HIGH)
  io.output(relay3, io.HIGH)
  time.sleep(2)
  #print('relay on')
  #io.output(relay1, io.LOW)
  io.output(relay2, io.LOW)
  io.output(relay3, io.LOW)
  time.sleep(2)
