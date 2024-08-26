// Assuming you're using the FiveM framework with the `redux_fw` resource
let FW = exports["redux_fw"].GetCoreObject();


function AddLog(type, user, log, data) {
    let src = source; // Use global.source to get the source of the event

   

    // Ensure type is a string; default to "None"
    type = typeof type === 'string' ? type : "Not set";

    // Get the player's source if user is not provided
    let steam = user || "Empty";

    // Convert log and data to strings
    log = typeof log === 'string' ? log : "Not set";
    let dataString = JSON.stringify(data) || "Not set";

    // Prepare the SQL query and parameters
    let query = "INSERT INTO `logs` (type, log, data, steam) VALUES (@type, @log, @data, @steam)";
    const parameters = {
        ["@type"]: type,
        ["@log"]: log,
        ["@data"]: dataString,
        ["@steam"]: steam
    };

    // Execute the query
    exports.oxmysql.execute(query, parameters, () => {});

    console.log("New log added!")
}

// Expose the AddLog function to be used by other scripts
exports("AddLog", AddLog);
