import { View, Text, Button, Alert } from 'react-native';
import styles from '../styles';
import axios from "axios";

export default function ReviewPage({ route, navigation }) {
    const { formData } = route.params;
    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/registration/api/register/", formData);
            Alert.alert("Success", "User registered successfully");
            navigation.getBack();
        } catch (error) {
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        }
    };

    const renderField = (label, value) => (
        <View style={styles.item} key={label}>
            <Text style={styles.label}>{label}:</Text>
            <Text style={styles.value}>{label === 'Password' ? '********' : value}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.homepageText}>Review Information</Text>

            <View style={styles.box}>
                {renderField("Firstname", formData.first_name)}
                {renderField("Lastname", formData.last_name)}
                {renderField("Email", formData.email)}
                {renderField("Password", formData.password)}
                {renderField("Gender", formData.gender)}
            </View>

            <View style={styles.buttonWrapper}>
                <Button title="Go back to edit" color="#c954c3ff" onPress={() => navigation.goBack()} />
                <Button title="Submit" color="#c954c3ff" onPress={handleSubmit} />
            </View>
        </View>
    );
}