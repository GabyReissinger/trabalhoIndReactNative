import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./styleHome";
import { StatusBar } from "expo-status-bar";

export default function IndexHome() {
  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={styles.safeArea}> */}
      <StatusBar backgroundColor="#000" />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.info}>
            <Image
              source={require("../../assets/Crunchyroll.png")}
              style={styles.logo}
            />
            <TouchableOpacity style={styles.searchIcon}>
              <Text style={styles.searchText}>🔍</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          {/* </SafeAreaView> */}

          <Image
            source={require("../../assets/YH.png")}
            style={styles.banner}
          />
          <Text style={styles.title}>Yashahime: Princess Half-Demon</Text>
          <Text style={styles.description}>
            Set in feudal Japan, half-demon twins Towa and Setsuna are separated
            from each other during a forest fire...
          </Text>

          <TouchableOpacity style={styles.watchButton}>
            <Text style={styles.watchButtonText}>WATCH NOW</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>TOP PICKS FOR YOU</Text>
          <ScrollView horizontal>
            <Image
              source={require("../../assets/JJK.png")}
              style={styles.topPickImage}
            />
            <Image
              source={require("../../assets/N.png")}
              style={styles.topPickImage}
            />
            <Image
              source={require("../../assets/FMAB.png")}
              style={styles.topPickImage}
            />
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
}
