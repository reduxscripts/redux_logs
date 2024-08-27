// TypeScript file

// Assuming you're using the FiveM framework with the `redux_fw` resource
const exp = global.exports;
const FW = exp["redux_fw"].GetCoreObject();


// Define the type for logging data
interface LogData {
    [key: string]: any;
}

// AddLog function implementation
function AddLog(type: string = "None", user?: string, log: string = "Not set", data: LogData = {}): void {
    const source = global.source as number; // Get the source of the event

    // Ensure type is a string; default to "None"
    type = typeof type === 'string' ? type : "None";

    // Get the player's source if user is not provided
    const steam = user || "Empty";

    // Convert log and data to strings
    log = typeof log === 'string' ? log : "Not set";
    const dataString = JSON.stringify(data) || "Not set";

    // Prepare the SQL query and parameters
    const query = "INSERT INTO `logs` (type, log, data, steam) VALUES (@type, @log, @data, @steam)";
    const parameters = {
        "@type": type,
        "@log": log,
        "@data": dataString,
        "@steam": steam
    };

    // Execute the query
    exp["oxmysql"].execute(query, parameters, () => {});

    console.log("New log added!");
}

// Expose the AddLog function to be used by other scripts
exp("AddLog", AddLog);
