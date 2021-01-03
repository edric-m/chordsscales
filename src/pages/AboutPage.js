import React from 'react';
import { useSpring } from 'react-spring';
import { animated as a } from 'react-spring';

const Heading = ({text, order}) => {
    const props = useSpring({
        from: {opacity: 0, height: '0px'},
        to: {opacity: 1, height: '40px'},
    })
    return (
        <>
        <a.h1 style={props}>
            {text}
        </a.h1>
        </>
    )
}

const AboutPage = () => (
    <>
    <div className="about-content">
        <Heading text={"About"}/>
        <p>This app aims to help guitarists learn the scales and chords on the fretboard on any 
            tuning configuration.</p>
        <p>The scales and chords that you choose can be displayed on the fretboard and will be displayed with 
            any altered tuning you need. The scale notes are coloured gray (scale center is dark gray) and 
            the chords will be highlighted blue, the changes are displayed immediately. When choosing a chord
            the root of the chord must be the first note selected for now.</p>
        <p>When you permit access to your microphone the app will listen to what the microphone records then 
            highlight what notes it can hear on the fretboard. This feature can help the guitarist to 
            quickly reorient themselves on the fretboard without having to look at it.</p>
        <p>The app was tested using Google Chrome, a decent laptop, and an acoustic guitar.</p>
        <Heading text={"//TODO:"} />
        <ul>
            <li><p>In the future it will be able to identify multiple notes 
            being played simultaneously.</p></li>
            <li><p>Adjust the app based on the users device, microphone, security preference.</p></li>
            <li><p>Improve and speed up the menu animations. And fix some branching issues.</p></li>
            <li><p>Make chord identification more flexible (any combination of notes will show all related 
                chords).</p></li>
            <li><p>Play back in real-time what the microphone records in an altered tuning.</p></li>
            <li><p>Expand the range/depth of chords that it can identify.</p></li>
            <li><p>Draw a headstock beside the fretboard to make it more recognisable.</p></li>
            <li><p>Redesign the menu items, change them from plain text to animated cards.</p></li>
            <li><p>Inform the user of scales related to the chord chosen.</p></li>
            <li><p>Chord, scale, and tuning options in the menu will be increaced.</p></li>
            <li><p>Let the user choose flats, sharps or a combination of both.</p></li>
            <li><p>Keep a record of what scales and chords have been chosen, display them, and let the user choose them again.</p></li>
        </ul>

    </div>
    
    </>
);

export default AboutPage;