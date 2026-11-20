import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NoteCard, { Note } from '../components/NoteCard';

const notes: Note[] = [
    new Note(1, 'Note 1', 'This is the body of note 1.'),
]

export default function HomeScreen() {
    return (
        <View style={styles.bg}>
            {/* Need to figure out how to make notecard have new id and store contents */}
            <NoteCard note={notes[0]} />
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