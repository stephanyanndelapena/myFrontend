import { View, Text, FlatList } from "react-native";
import styles from '../styles';
import axios from "axios";
import { useState, useEffect } from "react";

export default function UserListPage() {
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

    return (
        <View style={styles.listContainer}>
            <Text style={styles.listHeader}>Registered Users</Text>

            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.userCard}>
                        <Text style={styles.userCardName}>{item.first_name} {item.last_name}</Text>
                        <Text style={styles.userDataText}>Email: {item.email}</Text>
                        <Text style={styles.userDataText}>Gender: {item.gender}</Text>
                    </View>
                )}
            />
        </View>
    );
}