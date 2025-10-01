import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from '../styles'; 

export default function Homepage({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/blossom.png')} 
            style={styles.homepageImage}>
            </Image>
            
            <Text style={styles.homepageText}>Homepage</Text>
            
            <View style={styles.buttonWrapper}>
                <Button 
                    title="Register" 
                    color="#c954c3ff" 
                    onPress={() => navigation.navigate('Register')} 
                />
            </View>
        </View>
    );
}