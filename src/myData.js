const message = "hi other file";
const getMessage = () => {
    console.log(message);
    return message;
}

module.exports = {
    getMessage,
};