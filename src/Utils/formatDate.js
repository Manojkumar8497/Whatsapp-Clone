import moment from "moment";

const formatDate = (timestamp) => {
    const newDate = timestamp?.toDate();
    return moment(newDate).fromNow();
}

export default formatDate;