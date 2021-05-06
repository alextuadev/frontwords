import React, { useState, useEffect } from 'react';
import '../index.css';
import * as actions from "../actions/words";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


const ContainerList = (props) => {

  const [words, setWord] = useState([])

  useEffect(() => {
    console.log("esta actualizando la vaina")
    setWord(props.words)
  }, [props, words]);



  useEffect(() => {
    console.log("update ")
  });


  function deleteWord(indexText) {
    props.actions.deleteWordAction(indexText)
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-9">
          <div className="bg-white mh-400 px-5 py-5">
            <h2>Results:</h2>
            <ul className="list-group mt-3">
              {words.length == 0 &&
                <h4 className="mt-3">
                  You don't process any words yet
                </h4>
              }
              {
                words.map((w, i) => (
                  <li key={i}
                    className="list-group-item d-flex justify-content-between align-items-center">
                    {w}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteWord(i)}
                      className="badge bg-danger rounded-pill">
                      delete
                      </span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("llega al steaot", state.words.list)
  return {
    words: state.words.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerList);