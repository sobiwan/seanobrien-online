import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loading from '../components/Loading';
import RouteProvider from './RouteProvider';
import ScrollToTop from './ScrollToTop';

class Navigation extends React.Component {

  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    return (
      <BrowserRouter>
        <ScrollToTop>
          <div>
            <RouteProvider
            />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default (Navigation);
