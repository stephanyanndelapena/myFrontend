import {View, Text, Button, TextInput} from "react-native";
import {useState} from 'react';
import axios from 'axios';
import styles from '../styles';

export default function EditUserPage({route, navigation}) {
    const {user} = route.params;

    const [firstname, setFirstName] = useState(user.first_name);
    const [lastname, setLastName] = useState(user.last_name);
    const [user_email, setUserEmail] = useState(user.email);
    const [user_gender, setUserGender] = useState(user.gender);
    const [user_password, setUserPassword] = useState(user.password);

    const handleUpdate = () => {
        if (!firstname || !lastname || !user_email || !user_gender || !user_password){
            window.alert("Error", "Please fill up all required fields");
            return;
        }

        axios
            .put(`http://127.0.0.1:8000/registration/api/users/${user.id}/`, {
                first_name: firstname,
                last_name: lastname,
                email: user_email,
                gender: user_gender,
                password: user_password,
            })
            .then(() => {
                window.alert("Success", "User updated successfully!");
                navigation.goBack();
            })
            .catch((error) => {
                console.error(error);
                window.alert("Error", "Failed to update");
            });

    };
    return (
        <View style={styles.container}>
            <Text style={styles.homepageText}>Edit User</Text>

            <TextInput
            value={firstname}
            onChangeText={setFirstName}
            style={styles.input}
            placeholder="First Name"
            />
            <TextInput
            value={lastname}
            onChangeText={setLastName}
            style={styles.input}
            placeholder="Last Name"
            />
            <TextInput
            value={user_email}
            onChangeText={setUserEmail}
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            />
            <TextInput
            value={user_gender}
            onChangeText={setUserGender}
            style={styles.input}
            placeholder="Gender"
            />
            <TextInput
            value={user_password}
            onChangeText={setUserPassword}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            />
            <View style={styles.buttonWrapper}>
                <Button title="Update User" color="#c954c3ff" onPress={handleUpdate} />
            </View>
        </View>
    );
}