import React, { Component } from 'react';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import ReactGA from 'react-ga';

export default () => Composed =>
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      ReactGA.initialize('ANALYTICS_ID');
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />
    }
  }
