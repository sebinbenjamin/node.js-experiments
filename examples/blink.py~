import RPi.GPIO as GPIO ## Import GPIO library
import time 

GPIO.setmode(GPIO.BOARD) ## Use board pin numbering
GPIO.setup(7, GPIO.OUT) ## Setup GPIO Pin 7 to OUT

##Define a function named Blink()
def Blink(numTimes,speed):
	for i in range(0,numTimes):
		print "Iteration " + str(i+1)
		GPIO.output(7,True)
		time.sleep(speed)
		GPIO.output(7,False)
		time.sleep(speed)
	print "Done" 
	GPIO.cleanup()

iterations = raw_input("Enter total number of times to blink: ")
speed = raw_input("Enter length of each blink(seconds): ")
Blink(int(iterations),float(speed))
