import React, { Component } from "react";
import { Typography, Menu } from "antd";
const { Text } = Typography;

class Index extends Component {
  state = {
    width: 0,
    height: 0,
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

  render() {
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
                    fontSize: this.state.width >= 600 ? 24 : 20,
                    cursor: "pointer",
                  }}
                  strong
                >
                  Trump Trivia
                </Text>
              </a>
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
              <Text
                style={{
                  color: "white",
                  fontSize: this.state.width >= 600 ? 48 : 40,
                }}
                strong
              >
                Want daily Trump facts + memes?
              </Text>
            </div>

            <div style={{ width: "80%", textAlign: "center" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: this.state.width >= 600 ? 20 : 16,
                }}
              >
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
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: this.state.width >= 600 ? 600 : "80%",
                textAlign: "center",
              }}
            >
              <Text style={{ fontSize: this.state.width >= 800 ? 20 : 16 }}>
                Thank you for using Trump Trivia! Since the election is over and
                Joe Biden won 🎉, this service is no longer necessary.
              </Text>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="/face.png" style={{ width: 300, height: 400 }} />
        </div>

        <div
          style={{
            marginBottom: 40,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: 40,
          }}
        >
          <div style={{ width: "80%", textAlign: "center" }}>
            <Text style={{ fontSize: this.state.width >= 600 ? 18 : 14 }}>
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
