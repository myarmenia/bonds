import React, { useEffect } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import Bond from './components/bonds/card'

import { fetchBond } from "./store/actionCreators/bonds";

import "./App.css";

function App({ onfetchBond, isLoading }) {
  useEffect(() => {
    onfetchBond();
  }, [onfetchBond]);

  return (
    <div className="App">
      {isLoading ? (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>loading ...</h2>
        </header>
      ) : (
        <Bond/>
      )}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onfetchBond: () => dispatch(fetchBond())
})

const mapStateToProps = state => ({
  isLoading: state.loading
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
