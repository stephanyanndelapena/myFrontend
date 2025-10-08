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
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 30,
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
    },

    listContainer: {
        flex: 1,
        width: '100%',
        paddingTop: 50,
        backgroundColor: '#ffddf4ff',
        alignItems: 'center',
    },
    listHeader: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#c954c3ff',
        textAlign: 'center',
        marginBottom: 20,
        paddingTop: 10,
    },
    userCard: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        alignSelf: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    userCardName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#c954c3ff',
        textAlign: 'center',
        marginBottom: 5,
    },
    userDataLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#292828ff',
        paddingVertical: 3,
    },
    userDataValue: {
        fontSize: 16,
        paddingVertical: 3,
    },
    userCardButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});

export default styles;