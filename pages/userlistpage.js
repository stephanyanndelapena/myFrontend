import { View, Text, FlatList, Button, Alert } from "react-native";
import styles from '../styles';
import axios from "axios";
import { useState, useEffect } from "react";

export default function UserListPage({navigation}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/registration/api/users/")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []
    );

    const handleEdit = (user) => {
        navigation.navigate('EditUser', {user});
    }

    const handleDelete = (id) => {
        // Alert.alert(
        //     "Confirm Delete",
        //     "Are you sure you want to delete this user?",
        //     (
        //         { text: "Cancel", style: "cancel" },
        //         { 
        //             text: "Delete",
        //             style: "destructive",
        //             onPress: () => {
        //                 axios.delete(`http://127.0.0.1:8000/registration/api/users/${id}/`)
        //                 .then(() => {
        //                     Alert.alert("Success", "User deleted successfully");
        //                 })
        //                 .catch((err) => {
        //                     console.error(err);
        //                     Alert.alert("Error", "Failed to delete user");
        //                 });

        //             },
        //         }
        //     )
        // );
        
        axios.delete(`http://127.0.0.1:8000/registration/api/users/${id}/`)
    };
    return (
        <View style={styles.listContainer}>
            <Text style={styles.listHeader}>Registered Users</Text>

            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.userCard}>
                        <Text style={styles.userCardName}>{item.first_name} {item.last_name}</Text>
                        <Text>
                            <Text style={styles.userDataLabel}>Email: </Text>
                            <Text style={styles.userDataValue}>{item.email}</Text>
                        </Text>
                        <Text>
                            <Text style={styles.userDataLabel}>Gender: </Text>
                            <Text style={styles.userDataValue}>{item.gender}</Text>
                        </Text>
                        <View>
                            <View style={{height: 10}}/>
                            <Button title="Edit"
                             color="#c954c3ff"
                             onPress={() => handleEdit(item)}/>
                             <View style={{height: 10}}/>
                            <Button title="Delete"
                             color="#f84b4bff"
                             onPress={() => handleDelete(item.id)}/>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}