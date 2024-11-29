import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";

export default function HomeScreen(props) {
  theme = useTheme();

  const imageIndex = {
    logo: require("../assets/images/roi-logo.jpg"),
    mono: require("../assets/images/roi-logo-monochrome.jpg"),
  };

  return (
    <Surface elevation={1} style={{ flex: 1, padding: 20 }}>
      <IconButton
        icon="account-circle-outline"
        mode="contained"
        iconColor={theme.colors.onSecondary}
        size={24}
      />
      <Text
        variant="headlineLarge"
        style={{
          fontFamily: "Trebuchet MS",
          marginBottom: 24,
          fontWeight: "bold",
          color: theme.colors.primary,
        }}
      >
        Hi, Lachlan
      </Text>
      <Divider />
      <Divider />
      <Text
        variant="headlineLarge"
        style={{
          fontFamily: "Trebuchet MS",
          fontSize: 40,
          fontWeight: "bold",
          marginVertical: 10,
          textAlign: "center",
        }}
      >
        ROI Human Resources System
      </Text>
      <Divider />
      <Divider />
      <Image
        source={imageIndex.logo}
        resizeMode="contain"
        style={{ width: "300", height: 150, margin: 20 }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Text variant="titleMedium">Upcoming Holiday:</Text>
        <Text>25/12/2024</Text>
      </View>
      <Divider />

      <View style={{ alignItems: "center", marginVertical: 20 }}>
        {/* Section Header */}
        <Text
          variant="titleLarge"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: theme.colors.primary,
            marginBottom: 10,
          }}
        >
          Announcements
        </Text>

        {/* Horizontal Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center", // Center the content horizontally
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
          style={{ width: "100%" }}
        >
          {/* Card 1 */}
          <Card
            style={{
              width: 250,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 3,
              backgroundColor: theme.colors.surface,
              paddingVertical: 20,
            }}
          >
            <Card.Content>
              <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                New Policy
              </Text>
              <Text>Updated Leave Policy Available</Text>
            </Card.Content>
          </Card>

          {/* Card 2 */}
          <Card
            style={{
              width: 250,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 3,
              backgroundColor: theme.colors.surface,
              paddingVertical: 20,
            }}
          >
            <Card.Content>
              <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                Staff Meeting
              </Text>
              <Text>Friday, 1 PM</Text>
            </Card.Content>
          </Card>

          {/* Card 3 */}
          <Card
            style={{
              width: 250,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 3,
              backgroundColor: theme.colors.surface,
              paddingVertical: 20,
            }}
          >
            <Card.Content>
              <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                Office Closure
              </Text>
              <Text>New Year on 01/01/2025</Text>
            </Card.Content>
          </Card>

          {/* Card 4 */}
          <Card
            style={{
              width: 250,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 3,
              backgroundColor: theme.colors.surface,
              paddingVertical: 20,
            }}
          >
            <Card.Content>
              <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                System Maintenance
              </Text>
              <Text>Scheduled for 12/12/2024</Text>
            </Card.Content>
          </Card>

          <Card
            style={{
              width: 250,
              marginHorizontal: 10,
              borderRadius: 10,
              elevation: 3,
              backgroundColor: theme.colors.surface,
              paddingVertical: 20,
            }}
          >
            <Card.Content>
              <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                Upcoming Event
              </Text>
              <Text>Team-building activity on 15/12/2024</Text>
            </Card.Content>
          </Card>
          
        </ScrollView>
      </View>

      {/* Spacer View */}
      <View style={{ flex: 1 }} />

      {/* Footer Text */}
      <View style={{ alignItems: "center", paddingVertical: 10 }}>
        <Text variant="titleMedium">Developed By: Lachlan Dixon</Text>
      </View>
    </Surface>
  );
}