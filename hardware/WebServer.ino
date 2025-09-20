//This code is to uploaded in a ESP8266 module
//It creates a web server that listens for HTTP requests to control the sprinkler system

#include "secrets.h"  //update the values of SSID and PASSWORD in this file with the actual values of your wifi credentials

#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

ESP8266WebServer server(80);

void handleOptions() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  server.sendHeader("Access-Control-Allow-Headers", "Content-Type");
  server.send(204);  // No content
}
void handleControl() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  server.sendHeader("Access-Control-Allow-Headers", "Content-Type");

  if (server.hasArg("pest_id") && server.hasArg("sprinkler_id")) {
    String pest_id = server.arg("pest_id");
    String sprinkler_id = server.arg("sprinkler_id");

    String command = "P" + pest_id + "S" + sprinkler_id;
    Serial.println(command); // Send to Arduino UNO

    server.send(200, "text/plain", "Command sent: " + command);
  } else {
    server.send(400, "text/plain", "Missing parameters");
  }
}

void blinkStartup() {
  // Blinking to confirm esp has started
  for (int i = 0; i < 3; i++) {
    digitalWrite(LED_BUILTIN, LOW);  // LED ON
    delay(200);
    digitalWrite(LED_BUILTIN, HIGH); // LED OFF
    delay(200);
  }
}

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH); // make sure LED is off at start

  Serial.begin(9600);
  Serial.println("Booting ESP8266...");

  blinkStartup();  // <-- Blink at startup

  WiFi.begin("Airtel_anur_6494", "air80055");

  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
    // Slow blink while waiting for WiFi
    digitalWrite(LED_BUILTIN, LOW);  
    delay(100);
    digitalWrite(LED_BUILTIN, HIGH); 
  }

  Serial.println();
  Serial.println("Connected!");
  Serial.print("ESP8266 IP Address: ");
  Serial.println(WiFi.localIP());

  // Solid ON for 1 second when connected
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
  digitalWrite(LED_BUILTIN, HIGH);

  // Register routes
  // server.on("/control", handleControl);
  server.on("/control", HTTP_GET, handleControl);
  server.on("/control", HTTP_OPTIONS, handleOptions);

  // Start server
  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  server.handleClient();
}