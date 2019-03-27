import React from 'react'
import { connect } from 'react-redux'
import './synonyms.css'

const Synonyms = ({isLoading, synonymsList, searchingWord}) => {
    if (isLoading){
        return (
            <div className="synonyms">
                <h1 className="synonyms__title">Loading</h1>
                <div id="loader-wrapper" className="synonyms__loader">
                  <div id="loader"></div>
                </div>
            </div>
        )
    } else if (synonymsList.length <= 0) {
        return (
            <div className="synonyms">
                <h1 className="synonyms__title">Synonyms list</h1>
                <p>Select any word you want to search synonyms, and then click on the button "Synonyms"</p>
            </div>
        )
    } else {
        return (
            <div className="synonyms">
            <h1 className="synonyms__title">Synonyms list to <span className="synonyms__word">{searchingWord}</span></h1>
            <ul className="synonyms__list">
            {synonymsList.map( (synonym, index) => (
                <li className="synonyms__list-item" key={index}>{synonym.word} ({synonym.score})</li>
            ))}
            </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.synonyms.loading,
    synonymsList: state.synonyms.data,
    searchingWord: state.synonyms.word,
})

export default connect(mapStateToProps)(Synonyms)
