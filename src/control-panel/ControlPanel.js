import React, { Component } from 'react';
import { connect } from 'react-redux'
import { load, success, error } from '../redux/modules/synonyms'

import './ControlPanel.css';

class ControlPanel extends Component {

    searchSelect = () => {
        const word = this.props.field.getSelection().toString()
        this.props.startLoad(word)
        fetch('http://api.datamuse.com/words?rel_syn=' + word, {
            method: 'get'
        }).then(response => {
            return response.json()
        }).then( response => {
            this.props.successLoad(response)
        }).catch( error => {
            this.props.errorLoad(error.message)
            throw new Error(error);
        })
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button onClick={() => this.props.field.execCommand("bold")} className="format-action" type="button"><b>B</b></button>
                    <button onClick={() => this.props.field.execCommand("italic")} className="format-action" type="button"><i>I</i></button>
                    <button onClick={() => this.props.field.execCommand("underline")} className="format-action" type="button"><u>U</u></button>
                    <button onClick={this.searchSelect} className="format-action" type="button"><u>Synonyms</u></button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        store: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startLoad: word => dispatch(load(word)),
        successLoad: words => dispatch(success(words)),
        errorLoad: massage => dispatch(error(massage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
