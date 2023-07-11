#include <SoftwareSerial.h>
SoftwareSerial mySerial(6,7);
char msg;
char call;

int led = 13;                 // the pin that the LED is attached to
int sensor = 2;               // the pin that the sensor is attached to
int motion = LOW;              // by default, no motion detected
int val = 0;                  // variable to store the sensor status (value)
int redLed = 8;               // 
int greenLed = 10;
int smokeA0 = A5;
int sensorThres = 100;

void setup() {
  pinMode(led, OUTPUT);      // initalize LED as an output
  pinMode(sensor, INPUT);    // initialize sensor as an input
  pinMode(redLed, OUTPUT);
  pinMode(greenLed, OUTPUT);
  pinMode(smokeA0, INPUT);
  Serial.begin(9600);
  mySerial.begin(9600);
  Serial.println("STAND BY");
}

void loop(){
  val = digitalRead(sensor);   // read sensor value
  int analogSensor = analogRead(smokeA0);
  
  if (val == HIGH)             // check if the sensor is HIGH
  {
    digitalWrite(led, HIGH);   // turn LED ON
    delay(200);                // delay 100 milliseconds
    if (motion == LOW) 
    {
      Serial.println("Motion detected!");
      MotionMessage();
      motion = HIGH;       // update variable motion to HIGH
    }
  }
  else
  {
      digitalWrite(led, LOW); // turn LED OFF
      delay(200);             // delay 200 milliseconds
      if (motion == HIGH)
      {
        Serial.println("Motion stopped!");
        motion = LOW;       // update variable motion to LOW
    }
  }

  // Checks if it has reached the threshold value
  if (analogSensor > sensorThres)
  {
    digitalWrite(redLed, HIGH);
    digitalWrite(greenLed, LOW);
    GasMessage();
  }
  else
  {
    digitalWrite(redLed, LOW);
    digitalWrite(greenLed, HIGH);
  }
  delay(100);
}

void MotionMessage()
{
    mySerial.println("AT+CMGF=1"); 
    delay(1000); 
    mySerial.println("AT+CMGS=\"+919832440608\"\r"); //receiver number here 
    delay(1000);
    mySerial.println("MotionDetected!");
    delay(100);
    mySerial.println((char)26);
    delay(8000);
}

void GasMessage()
{
    mySerial.println("AT+CMGF=1"); 
    delay(1000); 
    mySerial.println("AT+CMGS=\"+919832440608\"\r"); //receiver number here 
    delay(1000);
    mySerial.println("Gas Leak Detcted!");
    delay(100);
    mySerial.println((char)26);
    delay(8000);
}
