import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    label: string;

    //Métodos
    onPress?: () => void;
    onLongPress?: () => void;
}

export default function FAB({
    label,
    onPress,
    onLongPress
}: Props) {
    return (
        <Pressable
            style={styles.floatingButton}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#65558F',
        padding: 20,
        borderRadius: 15,
        elevation: 3
    }
});
