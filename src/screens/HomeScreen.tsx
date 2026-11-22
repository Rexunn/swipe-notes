import {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Note } from '../types/Note';
import NoteCard from '../components/NoteCard';


const notes: Note[] = [
    new Note(1, 'Note 1', 'This is the body of note 1.'),
    new Note(2, 'Note 2', 'This is the body of note 2.'),
    new Note(3, 'Note 3', 'This is the body of note 3.'),
]





export default function HomeScreen() {

    const [index, setIndex] = useState(0);

    
    function NextNote() {
        setIndex(index +1);
    }

    function PrevNote() {
        setIndex(index -1);
    }
    return (
        
        <View style={styles.bg}>
            {/* Need to figure out how to make notecard have new id and store contents */}
            <NoteCard note={notes[index]} />

            <Button 
                title="Next" 
                onPress={NextNote}
            />

            <Button
                title="Prev"
                onPress={PrevNote}
             />
                
        
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#1e1e1e',
        flex: 1, //keep it from collapsing to content size
        alignItems: 'center',
        justifyContent: 'center',
    },
});