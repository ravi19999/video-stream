import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "823950961281-gdeku8usfppiaq6fjd91t14ocopqgvbr.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }
  render() {
    return <div>Hello</div>;
  }
}
export default GoogleAuth;
