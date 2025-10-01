import { View, Text, Button } from 'react-native';
import styles from '../styles';
import { useState } from 'react';
import { TextInput } from 'react-native-web';

export default function RegisterPage({ navigation }) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        gender: ""
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.homepageText}>User Registration</Text>

            <TextInput
                style={styles.input}
                placeholder='First Name'
                value={formData.first_name}
                onChangeText={(text) => handleChange("first_name", text)}
            />

            <TextInput
                style={styles.input}
                placeholder='Last Name'
                value={formData.last_name}
                onChangeText={(text) => handleChange("last_name", text)}
            />

            <TextInput
                style={styles.input}
                placeholder='Email'
                value={formData.email}
                onChangeText={(text) => handleChange("email", text)}
                keyboardType='email-address'
            />

            <TextInput
                style={styles.input}
                placeholder='Password'
                value={formData.password}
                secureTextEntry={true}
                onChangeText={(text) => handleChange("password", text)}
            />

            <TextInput
                style={styles.input}
                placeholder='Gender'
                value={formData.gender}
                onChangeText={(text) => handleChange("gender", text)}
            />

            <View style={styles.buttonWrapper}>
                <Button
                    title='Review and Submit' color="#c954c3ff" onPress={() => navigation.navigate("Review", { formData })}
                />
            </View>
        </View>
    )
}