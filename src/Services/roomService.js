import db from './../firebase';

// Fetch all the rooms data
const getRooms = async () => {
    return await db.collection("rooms").onSnapshot((snapshot) => {
        const rooms = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return rooms;
    });
}

// Fetch single room
const getRoom = (id) => {
    return db.collection("rooms")
        .doc(id)
        .onSnapshot((snapshot) => {
            return snapshot.data();
        });
}

export default {
    getRooms,
    getRoom
}