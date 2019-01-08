import React from 'react';
import Head from 'next/head';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          />
          <title>Bragger</title>
        </Head>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
