#include <WiFi.h>
 
const char* ssid = "Informe_sua_rede_2.4G";
const char* password = "Informe_sua_senha_da_rede";
int LED = 2;
WiFiServer server(80);
 
void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
 
  Serial.println();
  Serial.print("Conectando-se a ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
 
  Serial.println("");
  Serial.println("WiFi conectada.");
  Serial.println("Endereço de IP: ");
  Serial.println(WiFi.localIP());
 
  server.begin();
}
 
void loop() {
  WiFiClient client = server.available();
  if (client) {
    Serial.println("New Client.");
    String currentLine = "";
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);
        if (c == '\n') {
          if (currentLine.length() == 0) {
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();
            client.print("Click <a href=\"/H\">here</a> to turn the LED on pin 2 on.<br>");
            client.print("Click <a href=\"/L\">here</a> to turn the LED on pin 2 off.<br>");
            client.print("Click <a href=\"/A\">here</a> to turn the LED on pin 2 off.<br>");
            client.print("Click <a href=\"/B\">here</a> to turn the LED on pin 2 off.<br>");
            client.println();
            break;
          } else {
            currentLine = "";
          }
        } else if (c != '\r') {
          currentLine += c;
        }
        if (currentLine.endsWith("GET /H")) {
          digitalWrite(LED, HIGH);
        }
        if (currentLine.endsWith("GET /L")) {
          digitalWrite(LED, LOW);
        }
        if (currentLine.endsWith("GET /A")) {
          digitalWrite(LED, HIGH);
          delay(200);
          digitalWrite(LED, LOW);
          delay(200);
          digitalWrite(LED, HIGH);
          delay(200);
          digitalWrite(LED, LOW);
          delay(200);
          digitalWrite(LED, HIGH);
          delay(200);
          digitalWrite(LED, LOW);
          digitalWrite(LED, HIGH);
          delay(200);
          digitalWrite(LED, LOW);
        }
        if (currentLine.endsWith("GET /B")) {
          digitalWrite(LED, HIGH);
          delay(1000);
          digitalWrite(LED, LOW);
          delay(1000);
          digitalWrite(LED, HIGH);
          delay(1000);
          digitalWrite(LED, LOW);
        }
      }
    }
    client.stop();
    Serial.println("Client Disconnected.");
  }
}
