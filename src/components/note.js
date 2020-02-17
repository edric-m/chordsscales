import React from 'react';
import { useSpring } from 'react-spring';
import { animated as a } from 'react-spring';

const scales = {
    "ionian" : ["P1","M2","M3","P4","P5","M6","M7"],
    "dorian" : ["P1","M2","m3","P4","P5","M6","m7"],
    "phrygian" : ["P1","m2","m3","P4","P5","m6","m7"],
    "lydian" : ["P1","M2","M3","d5","P5","M6","M7"],
    "mixolydian" : ["P1","M2","M3","P4","P5","M6","m7"],
    "aeolian" : ["P1","M2","m3","P4","P5","m6","m7"],
    "locrian" : ["P1" ,"m2","m3","P4","d5","m6", "m7"]
};

//let chords = []; chordNotes={this.props.chordNotes}

const NoteTile = ({arg, clicked, note}) => {
    const props = useSpring({
        from: {width: '0px', height: '0px'},
        to: {width: '0px', height: '18px'},
    })
    return (
        <>
        <a.div className={arg + " note-scale"} style={props} onClick={clicked}>
            {note}
        </a.div>
        </>
    )
}

class Note extends React.Component {

    noteClicked() {
        let chords = this.props.chordNotes;
        if ( !chords.includes(this.props.note)) {
            chords.push(this.props.note)
            this.props.chooseNote(chords);
        } else {
            //remove note
            let i = 0;
            for (i = 0; i < chords.length; i ++ ) {
                if (chords[i] === this.props.note) {
                    chords.splice(i,1);
                }
            }
            this.props.chooseNote(chords);
        }
    }
    render() {
        let chords = this.props.chordNotes;
        let i = 0;
        let selectedClassCSS = "not-selected";
        let showNotes = this.props.showNotes;
        if(chords.includes(this.props.note)) {
            selectedClassCSS = "selected-note";
        } else {
            selectedClassCSS = "not-selected-note";
        }
        if (this.props.degree[1] === "1") {
            return <p className={selectedClassCSS + " note-root"} 
                    onClick={(e) => this.noteClicked()}>{showNotes ? this.props.note : this.props.degree}</p>
        } else {
            for ( i = 0; i < 7; i++) {
                if (scales[this.props.scale][i] === this.props.degree) {
            
                    return <NoteTile arg={selectedClassCSS} 
                                    clicked={(e) => this.noteClicked()}
                                    note={showNotes ? this.props.note : this.props.degree} />
                    //    <p className={selectedClassCSS + " note-scale"} 
                    //        onClick={(e) => this.noteClicked()}>
                    //            {showNotes ? this.props.note : this.props.degree}
                    //    </p>
                    //)
                }
            }

            return <p className={selectedClassCSS + " note"} 
                    onClick={(e) => this.noteClicked()}>{showNotes ? this.props.note : this.props.degree}</p>
        }
    }
}

export default Note;