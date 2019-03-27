import React, { Component } from 'react';
import ControlPanel from '../control-panel/ControlPanel'
import Synonyms from '../components/synonyms'
import './FileZone.css';

class FileZone extends Component {
    constructor() {
        super();
        this.state = {
            editorField: null
        }
    }
    componentDidMount = () => {
        const field = document.querySelector('#file').contentDocument;
        field.designMode = "on";
        this.setState({
            editorField: field
        })
    }

    render() {
        return (
            <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <ControlPanel
                    field={this.state.editorField}
                />
                <div id="file-zone">
                    <iframe onDoubleClick={() => console.log(window.getSelecrion().toString())} name="textField" id="file" frameBorder="0" style={{backgroundColor: '#fff'}} title="text-editor"></iframe>
                    <Synonyms />
                </div>
            </div>
        );
    }
}

export default FileZone;
