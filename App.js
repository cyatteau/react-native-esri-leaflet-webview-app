import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const customHTML = `
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Esri Leaflet Tutorials: Display a map</title>
    <!-- Load Leaflet from CDN -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js" crossorigin=""></script>
    <!-- Load Esri Leaflet from CDN -->
    <script src="https://unpkg.com/esri-leaflet@^3.0.8/dist/esri-leaflet.js"></script>
    <script src="https://unpkg.com/esri-leaflet-vector@4.0.0/dist/esri-leaflet-vector.js"></script>

    <style>
      #map {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      const map = L.map("map", {
        minZoom: 2
      })
      map.setView([38.92, -78.75], 6);
      const apiKey = "YOUR_API_KEY";
      const basemapEnum = "ArcGIS:Community";
      L.esri.Vector.vectorBasemapLayer(basemapEnum, {
        apiKey: apiKey
      }).addTo(map);
    </script>
  </body>`;

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "100%" }}>
        <WebView originWhitelist={["*"]} source={{ html: customHTML }} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
