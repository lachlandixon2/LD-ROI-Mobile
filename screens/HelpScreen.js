import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme, Switch } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";

export default function HelpScreen(props) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  theme = useTheme();

  return (
    <Surface elevation={1} style={{ flex: 1, padding: 20 }}>
      <Text
        variant="headlineLarge"
        style={{
          marginBottom: 24,
          fontWeight: "bold",
          color: theme.colors.primary,
          fontFamily: "Trebuchet MS",
        }}
      >
        Help Screen
      </Text>

      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontFamily: "Trebuchet MS",
            fontSize: isSwitchOn ? 16 : 14,
            marginRight: 10,
          }}
        >
          Font Size
        </Text>
        <Switch
          value={isSwitchOn}
          onValueChange={() => setIsSwitchOn(!isSwitchOn)}
        />
      </View>

      <View>
        <Text
          variant="headlineSmall"
          style={{ paddingVertical: 10, fontFamily: "Trebuchet MS" }}
        >
          1. Staff Directory
        </Text>

        <Text
          style={{ fontFamily: "Trebuchet MS", fontSize: isSwitchOn ? 16 : 14 }}
        >
          View a comprehensive list of all staff members, including their roles,
          contact details, and other essential information.
        </Text>
      </View>
      <View>
        <Text
          variant="headlineSmall"
          style={{ paddingVertical: 10, fontFamily: "Trebuchet MS" }}
        >
          2. Add New Staff
        </Text>
        <Text
          style={{ fontFamily: "Trebuchet MS", fontSize: isSwitchOn ? 16 : 14 }}
        >
          Use this option to add new staff members to the system by entering
          their personal and professional details.
        </Text>
      </View>
      <View>
        <Text
          variant="headlineSmall"
          style={{ paddingVertical: 10, fontFamily: "Trebuchet MS" }}
        >
          3. Update Staff Information
        </Text>
        <Text
          style={{ fontFamily: "Trebuchet MS", fontSize: isSwitchOn ? 16 : 14 }}
        >
          Edit or update the details of an existing staff member, including
          their position, contact info, or assigned departments.
        </Text>
      </View>
      <View>
        <Text variant="headlineSmall" style={{ paddingVertical: 10 }}>
          4. Delete Staff Entry
        </Text>
        <Text
          style={{ fontFamily: "Trebuchet MS", fontSize: isSwitchOn ? 16 : 14 }}
        >
          Remove a staff member's record from the system if they are no longer
          part of the organization.
        </Text>
      </View>
    </Surface>
  );
}
