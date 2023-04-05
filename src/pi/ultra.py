#Libraries
import RPi.GPIO as GPIO
import time
 
#GPIO Mode (BOARD / BCM)
GPIO.setmode(GPIO.BOARD)
 
#set GPIO Pins
ultra_1_TRIGGER = 16
ultra_1_ECHO = 18
ultra_2_TRIGGER = 22
ultra_2_ECHO = 36
 
#set GPIO direction (IN / OUT)
GPIO.setup(ultra_1_TRIGGER, GPIO.OUT)
GPIO.setup(ultra_1_ECHO, GPIO.IN)
GPIO.setup(ultra_2_TRIGGER, GPIO.OUT)
GPIO.setup(ultra_2_ECHO, GPIO.IN)

#set distance limits for ultrasonic sensors
cup_dist_limit = 10
empty_cup_limit = 12
full_cup_limit = 5
 
 
def distance(TRIG, ECHO):
  # set Trigger to HIGH
  GPIO.output(TRIG, True)
 
  # set Trigger after 0.01ms to LOW
  time.sleep(0.00001)
  GPIO.output(TRIG, False)
 
  StartTime = time.time()
  StopTime = time.time()
 
  # save StartTime
  while GPIO.input(ECHO) == 0:
    StartTime = time.time()
 
  # save time of arrival
  while GPIO.input(ECHO) == 1:
    StopTime = time.time()
 
    # time difference between start and arrival
    TimeElapsed = StopTime - StartTime
    # multiply with the sonic speed (34300 cm/s)
    # and divide by 2, because there and back
    distance = (TimeElapsed * 34000) / 2
 
  return distance
  
  
def compareDistance(dist, dist_limit):
  if dist <= dist_limit:
    in_limit = 1
  else:
    in_limit = 0
    
  return in_limit
  
  
def fillStatus(TRIG, ECHO, empty_cup_limit, full_cup_limit):
  dist = distance(TRIG, ECHO)
  print ("Empty Cup limit = %.1f cm" % empty_cup_limit)
  print ("Full Cup limit = %.1f cm" % full_cup_limit)
  print ("Measured Distance of Cup = %.1f cm" % dist)
  if compareDistance(dist, empty_cup_limit) == 0:
    print ("The Cup is Empty!")
    fill_status = 0
  elif compareDistance(dist, full_cup_limit) == 0:
    print ("The Cup is Filling!")
    fill_status = 1
  elif compareDistance(dist, full_cup_limit) == 1:
    print ("The Cup is Full STOP pouring!")
    fill_status = 2
    
  return fill_status   
  
  
def cupStatus(TRIG, ECHO, cup_dist_limit):
  dist = distance(TRIG, ECHO)
  print ("Cup distance limit = %.1f cm" % cup_dist_limit)
  print ("Measured Distance of Cup = %.1f cm" % dist)
  if compareDistance(dist, cup_dist_limit) == 0:
    print ("Cup is NOT present.")
    cup_status = FALSE
  else:
    print ("Cup is present.")
    cup_status = TRUE
    
  return cup_status
  
 

 
if __name__ == '__main__':
  try:
    while True:
    
      cupStatus(ultra_1_TRIGGER, ultra_1_ECHO, cup_dist_limit)
      time.sleep(4)
      fillStatus(ultra_2_TRIGGER, ultra_2_ECHO, empty_cup_limit, full_cup_limit)
      time.sleep(10)
    
      #dist = distance(ultra_1_TRIGGER, ultra_1_ECHO)
      #print ("Measured Distance of sensor 1 = %.1f cm" % dist)
      #time.sleep(1)
      
      #dist = distance(ultra_2_TRIGGER, ultra_2_ECHO)
      #print ("Measured Distance of sensor 2 = %.1f cm" % dist)
      #time.sleep(1)
 
      # Reset by pressing CTRL + C
  except KeyboardInterrupt:
    print("Measurement stopped by User")
    GPIO.cleanup()