const Logs = require("../schema/logs");

const getLogs = async (req, res) => {
    try {
        const transactions = await Logs.find({}).limit(10);
        res.send({ success: true, data: transactions })
    } catch (err) {
        res.send({ success: false, err: err })
    }
}

module.exports = {
    getLogs
};
