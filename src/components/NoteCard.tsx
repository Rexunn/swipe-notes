import { View, Text, StyleSheet } from 'react-native';

type Note = {
    id: string;
    title: string;
    body: string;
}

<View style={styles.card}>
/** background? */
</View>

<View>
/** left sidebar toggleable */
</View>



<View>
/** note */
</View>

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

    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    body: {
        fontSize: 16,
        lineHeight: 24,
    }
});
