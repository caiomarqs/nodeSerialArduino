const int pwmPin = 9;

void setup()
{
  Serial.begin(9600);
  pinMode(pwmPin, OUTPUT);
  analogWrite(pwmPin, 0);
}
String inString = "";
void loop(){
  while(Serial.available() > 0){     
    int inChar = Serial.read();
 
    if(isDigit(inChar)) {
      inString += (char)inChar;
    }
    if (inChar == '\n') {
      //Serial.print("Value:");
      //Serial.print(inString.toInt());
      //Serial.print(" | String: ");
      //Serial.println(inString);
      analogWrite(pwmPin, inString.toInt());
      inString = "";
    }
  }
  delay(50);
}
