local FW = exports["rs_base"]:GetCoreObject()

function AddLog(type, user, log, data)
    print("Adding log to database!")
    local src = source

    if not type then
        type = "None"
    else
        type = tostring(type)
    end

    if not user or user == nil then 
        local steam = FW.Functions.GetIdentifier(src, 'steam')
        user = steam
    end

    --local steam = user.license or user.PlayerData.license or "Unknown"

    log = tostring(log) or "None"

   
    local dataString = json.encode(data) or "None"

    local query = "INSERT INTO `logs` (type, log, data, steam) VALUES (@type, @log, @data, @steam)"

    local parameters = {
        ["@type"] = type,
        ["@log"] = log,
        ["@data"] = dataString,
        ["@steam"] = user
    }


    exports.oxmysql:execute(query, parameters)
end

exports("AddLog", AddLog)
