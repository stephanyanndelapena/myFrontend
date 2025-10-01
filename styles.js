import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffddf4ff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    homepageImage: {
        width: 170,
        height: 170,
        alignSelf: 'center',
    },

    homepageText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#c954c3ff',
        marginBottom: 30,
    },

    input: {
        width: '60%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
    },

    box: {
        width: '60%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 30,
        elevation: 3,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    value: {
        fontSize: 16,
        color: '#666',
        maxWidth: '55%',
        textAlign: 'right',
    },

    buttonWrapper: {
        width: '60%',
        marginVertical: 10,
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
    }
});

export default styles;