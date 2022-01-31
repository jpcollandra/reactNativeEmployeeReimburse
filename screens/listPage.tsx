import React, { useState, useEffect, Component } from "react";
import { StyleSheet, View, Text, Dimensions, Alert } from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { ManagerPage } from "./managerPage";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const SCREEN_WIDTH = Dimensions.get("window").width;
export function ListPage({ navigation }) {
  const [items, setItems] = useState([]);
  const [approval, setApproval] = useState([]);

  async function fetchItems() {
    const response = await fetch(
      `https://onewalmart.azurewebsites.net/items/status/pending`
    );
    const items = await response.json();
    setItems(items);
  }

  useEffect(() => {
    fetchItems();
  }, [approval]);

  async function approveItem(props) {
    //set id to the itemReimID ref
    const id = props;
    console.log(id);
    const response = await fetch(
      `https://onewalmart.azurewebsites.net/items/${id}/approve`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    const approval = await response.json();
    console.log(approval);
    setApproval(approval);
  }

  async function denyItem(id2) {
    //set id to the itemReimID ref
    const id = id2;
    console.log(id);
    const response = await fetch(
      `https://onewalmart.azurewebsites.net/items/${id}/deny`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    const denied = await response.json();
    console.log(denied);
    setApproval(denied);
  }

  async function denyItem2(id3) {
    //set id to the itemReimID ref
    const id = id3;
    console.log(id);
    const response = await fetch(
      `https://onewalmart.azurewebsites.net/items/${id}/deny`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    const denied = await response.json();
    console.log(denied);
    setApproval(denied);
  }

  async function denyItem3(id4) {
    //set id to the itemReimID ref
    const id = id4;
    console.log(id);
    const response = await fetch(
      `https://onewalmart.azurewebsites.net/items/${id}/deny`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    const denied = await response.json();
    console.log(denied);
    setApproval(denied);
  }

  async function seeMGMT(id2) {
    const id = id2;
    console.log(id);
    const response = await fetch(
      `https://onewalmart.azurewebsites.net/items/${id}/seeMGMT`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    const denied = await response.json();
    console.log(denied);
    setApproval(denied);
  }

  function seeMGMT2(props) {
    const id2 = props;
    denyItem(id2);
    seeMGMT(id2);
  }

  async function inApp(id3) {
    const id = id3;
    console.log(id);
    const response = await fetch(
      `https://onewalmart.azurewebsites.net/items/${id}/inApp`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    const denied = await response.json();
    console.log(denied);
    setApproval(denied);
  }

  function inApp2(props) {
    const id3 = props;
    denyItem2(id3);
    inApp(id3);
  }

  async function seeEmp(id4) {
    const id = id4;
    console.log(id);
    const response = await fetch(
      `https://onewalmart.azurewebsites.net/items/${id}/seeEmp`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    const denied = await response.json();
    console.log(denied);
    setApproval(denied);
  }

  function seeEmp2(props) {
    const id4 = props;
    denyItem3(id4);
    seeEmp(id4);
  }

  function btnAlert(props) {
    Alert.alert("Reason for denial", "Select a reason", [
      {
        text: "See MGMT",
        onPress: () => seeMGMT2(props),
      },
      {
        text: "Innappropriate",
        onPress: () => inApp2(props),
      },
      { text: "See Employee Handbook", onPress: () => seeEmp2(props) },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <View style={styles.iconRow}>
            <EvilIconsIcon name="navicon" style={styles.icon}></EvilIconsIcon>
            <Text style={styles.meWalmart}>Me@Walmart</Text>
          </View>
        </View>
        <View>
          <Text style={styles.textFlat2}>Pending Approval</Text>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View>
                  <View style={styles.listItem}>
                    <Text style={styles.textFlat}>
                      Username: {item.username} {"\n"}
                      Cost: (${item.itemPrice}){"\n"}
                      Date Submitted:({item.itemDescription})
                    </Text>

                    <TouchableOpacity
                       onPress={() => approveItem(item.id)} 
                      style={styles.button111}
                    >
                      <Text style={styles.approve}>Approve</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                       onPress={() => btnAlert(item.id)} 
                      style={styles.button333}
                    >
                      <Text style={styles.deny}>Deny</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View style={styles.icon2StackRow}>
        <View style={styles.icon2Stack}>
          <EntypoIcon
            name="home"
            style={styles.icon2}
            onPress={() => navigation.navigate(ManagerPage)}
          ></EntypoIcon>
          <Text style={styles.home}>Home</Text>
        </View>
        <View style={styles.icon3Column}>
          <FontAwesomeIcon
            name="address-card-o"
            style={styles.icon3}
          ></FontAwesomeIcon>
          <Text style={styles.me2}>Me</Text>
        </View>
        <View style={styles.icon4Column}>
          <EntypoIcon name="magnifying-glass" style={styles.icon4}></EntypoIcon>
          <Text style={styles.askSam}>Ask Sam</Text>
        </View>
        <View style={styles.icon5Column}>
          <MaterialCommunityIconsIcon
            name="account-group"
            style={styles.icon5}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.myTeam}>My Team</Text>
        </View>
        <View style={styles.icon6Column}>
          <FeatherIcon name="inbox" style={styles.icon6}></FeatherIcon>
          <Text style={styles.inbox}>Inbox</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width - 30,
    borderWidth: 2,
    borderColor: "#333",
    padding: 5,
    marginHorizontal: 50,
    marginVertical: 10,
    borderRadius: 10,
  },
  button111: {
    width: 80,
    height: 41,
    backgroundColor: "rgba(0,48,135,1)",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 10,
  },
  button333: {
    width: 70,
    height: 41,
    backgroundColor: "rgba(208,2,27,1)",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 10
  },
  deny: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Gill Sans",
    marginTop: 5,
    marginLeft: 10,
  },
  approve: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Gill Sans",
    marginTop: 5,
    marginLeft: 5,
  },
  textFlat2: {
    fontFamily: "GillSans-Bold",
    color: "#121212",
    fontSize: 20,
    marginLeft: 50,
    marginTop: 10,
  },
  textFlat: {
    fontFamily: "Gill Sans",
    color: "#121212",
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
  },
  rect: {
    width: 482,
    height: 927,
    backgroundColor: "#E6E6E6",
    marginTop: -188,
    marginLeft: -33,
  },
  rect2: {
    width: 406,
    height: 84,
    backgroundColor: "rgba(0,114,206,1)",
    flexDirection: "row",
    marginTop: 188,
    marginLeft: 20,
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 35,
    width: 40,
  },
  meWalmart: {
    fontFamily: "Gill Sans",
    color: "rgba(241,239,239,1)",
    marginLeft: 13,
    marginTop: 9,
  },
  iconRow: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: 238,
    marginLeft: 24,
    marginTop: 36,
  },
  icon2: {
    top: 0,
    left: 4,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 25,
  },
  home: {
    top: 27,
    left: 0,
    position: "absolute",
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
  },
  icon2Stack: {
    width: 35,
    height: 42,
    marginTop: 1,
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
  },
  icon213: {
    padding: 10,
    width: 40,
    height: 46,
  },
  me2: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    marginLeft: 6,
  },
  icon3Column: {
    width: 29,
    marginLeft: 33,
    marginTop: 3,
    marginBottom: 1,
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 7,
  },
  askSam: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
  },
  icon4Column: {
    width: 48,
    marginLeft: 38,
    marginBottom: 1,
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 12,
  },
  myTeam: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    marginTop: 1,
  },
  icon5Column: {
    width: 49,
    marginLeft: 19,
    marginBottom: 1,
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 4,
  },
  inbox: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
  },
  icon6Column: {
    width: 33,
    marginLeft: 25,
    marginTop: 3,
  },
  icon2StackRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 27,
    marginRight: 39,
  },
});
