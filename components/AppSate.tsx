import React, { Component } from "react";
import { AppState, StyleSheet, Text, View } from "react-native";

class StateApp extends Component {
  state = {
    appState: AppState.currentState
  };

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState : any ) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
    }
    console.log("App has come to "+nextAppState+" !");
    this.setState({ appState: nextAppState });
    
  };

  render() {
    return (
        <Text>Current state is: {this.state.appState}</Text>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default StateApp;