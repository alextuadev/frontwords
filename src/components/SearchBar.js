import React, { useState } from 'react';
import '../index.css';
import { searchWord } from '../services/api';
import * as actions from "../actions/words";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


function SearchBar(props) {
  const [text, setText] = useState('');

  const sendWord = async () => {
    const response = await searchWord(text);
    let textJson = await response.json();
    console.log(textJson);

    props.actions.saveWordAction(textJson);
    setText('')
  }


  return (
    <div className="d-grid container-fluid hsearch bg-dark">
      <div className="row align-items-center justify-content-center">
        <div className="col-6">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Insert text" />
            </div>

            <div className="col-auto">
              <button onClick={() => sendWord()} type="submit" className="btn btn-primary">Send</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
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
)(SearchBar);