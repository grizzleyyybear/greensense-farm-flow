//This code is to uploaded in a ESP8266 module
//It creates a web server that listens for HTTP requests to control the sprinkler system

#include "secrets.h"  //update the values of SSID and PASSWORD in this file with the actual values of your wifi credentials

#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

ESP8266WebServer server(80);

void handleControl() {
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


void setup() {
  Serial.begin(115200);
  WiFi.begin(SSID, PASSWORD);

  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println();
  Serial.println("Connected!");
  Serial.print("ESP8266 IP Address: ");
  Serial.println(WiFi.localIP());

  server.on("/control", handleControl);

  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  server.handleClient();
}
