import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Note } from '../types/Note';


export default function NoteCard({ note }: { note: Note }) {
    return (
    <View style={styles.card}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.body}>{note.body}</Text>
    </View>
    );
}
/** 
 * 3 lines top left to open menu to search notes by body or title
 * swiping left deletes note
 * swiping right or up archives note starts new note
 * swiping down opens last note saved

 */

const styles = StyleSheet.create({


    card: {
        backgroundColor: '#FEF8EC',
        padding: 10,
        marginBottom: 10,
        height: 150,
        width: '90%',

    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    body: {
        fontSize: 16,
        lineHeight: 24,
    },
});
