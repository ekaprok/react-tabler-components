import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";

class Store extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Store</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default Store;
