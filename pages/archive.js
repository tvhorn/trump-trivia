import React, { Component } from "react";
import { Typography, Input, notification, Dropdown, Menu, Button } from "antd";
const { Text } = Typography;
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import axios from "axios";

const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

class Index extends Component {
  state = {
    width: 0,
    height: 0,
    input: "",
    loading: false,
    selected: "email",
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  handleClick = async () => {
    this.setState({ loading: true });
    try {
      const body =
        this.state.selected == "email"
          ? { email: this.state.input }
          : { phoneNumber: this.state.input };

      const {
        data: { success },
      } = await axios.post(
        `https://trump-trivia.herokuapp.com/${this.state.selected}`,
        body
      );
      if (success)
        openNotificationWithIcon(
          "success",
          "Welcome to Trump Trivia!",
          `This ${
            this.state.selected == "email" ? "email" : "number"
          } has been successfully added to the database.`
        );
      else
        openNotificationWithIcon(
          "info",
          "Welcome back to Trump Trivia!",
          `This ${
            this.state.selected == "email" ? "email" : "number"
          } is already in the database.`
        );
    } catch (e) {
      openNotificationWithIcon("error", "Oof!", "Something went wrong.");
    }

    this.setState({ loading: false, input: "" });
  };

  render() {
    const largeFont = this.state.width >= 500 ? 60 : 50;
    const mediumFont = this.state.width >= 500 ? 30 : 20;
    const smallFont = this.state.width >= 500 ? 20 : 12;

    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" href="https://venmo.com/Meme-Pac">
            <Text style={{ color: "#803ee5", fontSize: smallFont }}>Venmo</Text>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" href="https://secure.actblue.com/donate/meme-pac">
            <Text style={{ color: "#803ee5", fontSize: smallFont }}>
              Act Blue
            </Text>
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#803ee5",
          }}
        >
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
                width: "80%",
              }}
            >
              <a href="/">
                <Text
                  style={{
                    color: "white",
                    fontSize: mediumFont,
                    cursor: "pointer",
                  }}
                  strong
                >
                  Trump Trivia
                </Text>
              </a>

              <Dropdown overlay={menu}>
                <a>
                  <div
                    style={{
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderColor: "white",
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingRight: 10,
                      paddingLeft: 10,
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                  >
                    <Text
                      style={{
                        color: "#803ee5",
                        fontSize: smallFont,
                        cursor: "pointer",
                      }}
                      strong
                    >
                      Donate 🥺
                    </Text>
                  </div>
                </a>
              </Dropdown>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 20,
              marginBottom: 20,
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div style={{ textAlign: "center", width: "80%" }}>
              <Text style={{ color: "white", fontSize: largeFont }} strong>
                Want daily Trump facts + memes?
              </Text>
            </div>

            <div style={{ width: "80%", textAlign: "center" }}>
              <Text style={{ color: "white", fontSize: smallFont }}>
                Put in a phone number or email and we'll send it one of Trump's
                many mistakes every day until the election.
              </Text>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              marginBottom: 20,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: this.state.width >= 800 ? 800 : "80%",
                textAlign: "center",
              }}
            >
              <Text style={{ fontSize: this.state.width >= 800 ? 14 : 12 }}>
                Thank you for using Trump Trivia! It only costs us 1 cent per
                person per day, but we're at tens of thousands of users already
                and will not have sufficient funding to sustain till the
                election. If you’re interested in supporting our cause, you can
                donate to our venmo{" "}
                <a href="https://venmo.com/Meme-Pac" target="_blank">
                  @Meme-Pac
                </a>
                .
              </Text>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{
                backgroundColor:
                  this.state.selected == "email" ? "#803ee5" : "white",
                color: this.state.selected == "email" ? "white" : "#803ee5",
              }}
              size="large"
              onClick={() => this.setState({ selected: "email" })}
            >
              Email
            </Button>
            <Button
              style={{
                backgroundColor:
                  this.state.selected == "email" ? "white" : "#803ee5",
                color: this.state.selected == "email" ? "#803ee5" : "white",
              }}
              size="large"
              onClick={() => this.setState({ selected: "text" })}
            >
              Text
            </Button>
          </div>

          <Input
            placeholder={
              this.state.selected == "email" ? "Email Address" : "Phone Number"
            }
            style={{
              width: this.state.width > 500 ? 500 : "80%",
              marginTop: 20,
            }}
            onChange={(event) => {
              this.setState({ input: event.target.value });
            }}
            value={this.state.input}
            disabled={this.state.loading}
          />
          <div style={{ marginTop: 20 }}>
            {this.state.loading ? (
              <ClimbingBoxLoader size={15} color="#803ee5" />
            ) : (
              <Button
                style={{
                  backgroundColor:
                    this.state.input.length == 0 ? "grey" : "#803ee5",
                  color: "white",
                }}
                size="large"
                disabled={this.state.input.length == 0}
                onClick={this.handleClick}
              >
                Submit
              </Button>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <img src="/face.png" style={{ width: 300, height: 400 }} />
        </div>

        <div
          style={{
            marginBottom: 20,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div style={{ width: "80%", textAlign: "center" }}>
            <Text style={{ fontSize: smallFont }}>
              Created by{" "}
              <a
                href="https://memepac.org"
                target="_blank"
                style={{ color: "#803ee5" }}
              >
                MemePAC
              </a>
            </Text>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
