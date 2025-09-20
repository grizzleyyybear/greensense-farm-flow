#include <Servo.h>

Servo valveServo;

String inputString = "";
bool stringComplete = false;

void setup() {
  Serial.begin(9600);
  Serial.println("Arduino UNO ready. Waiting for commands from ESP...");

  valveServo.attach(9);
}

void loop() {
  if (stringComplete) {
    // Print the raw command for debugging
    Serial.print("Raw command received: ");
    Serial.println(inputString);

    // Example input: P1S3
    int pIndex = inputString.indexOf('P');
    int sIndex = inputString.indexOf('S');

    if (pIndex != -1 && sIndex != -1) {
      int pest_id = inputString.substring(pIndex + 1, sIndex).toInt();
      int sprinkler_id = inputString.substring(sIndex + 1).toInt();

      Serial.print("Parsed pest_id: ");
      Serial.println(pest_id);
      Serial.print("Parsed sprinkler_id: ");
      Serial.println(sprinkler_id);

      controlMotor(pest_id);
      controlSprinkler(sprinkler_id);
    } else {
      Serial.println("Invalid command format!");
    }

    // Reset for next command
    inputString = "";
    stringComplete = false;
  }
}

void serialEvent() {
  while (Serial.available()) {
    char inChar = (char)Serial.read();
    if (inChar == '\n') {
      stringComplete = true;
    } else {
      inputString += inChar;
    }
  }
}

void controlMotor(int pest_id) {
    int angle = map(pest_id, 1, 5, 0, 360); 
  // Example: pest_id 1 = 0°, pest_id 5 = 180°
  // Adjust depending on how many positions the valve will have

  Serial.print("Rotating servo to angle: ");
  Serial.println(angle);

  valveServo.write(angle);  // Rotate to the angle
  delay(500); 
}

void controlSprinkler(int sprinkler_id) {
  Serial.print("Activating Sprinkler ");
  Serial.println(sprinkler_id);
  // To be implemented
}