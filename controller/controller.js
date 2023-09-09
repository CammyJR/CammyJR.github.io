const {
    database
} = require("../database/database");

exports.getQuery = (req, res) => {
    try {
        //destructuring
        const {
            slack_name,
            track
        } = req.query;
        let name = slack_name;
        let track_name = track;

        //fetching info with the name and track sent in the query
        const output = database.find((info) => info.slack_name == name && info.track == track_name)
        output.utc_time = new Date().toISOString().substring(0,19) + "Z",
            output.current_day = new Date().toLocaleDateString("en-US", {
                weekday: "long"
            })

        //Sending info to client
        res.status(200).json(
            output
        )
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }

}