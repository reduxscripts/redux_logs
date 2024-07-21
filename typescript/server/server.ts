import { SQL } from "./sv_export";

function AddLog(type: string, user: any, log: string, data: any)  {
  if (!type) {
    type = "None"
  } else  {
    type = type.toString();
  }

  if (type == "Exploiter") {
    // NEEDS SOME LOGIC BUT NO IDEA WHAT TO ADD HERE
  }
  const steam = user.license;


  log = log.toString() || "None";

  data = JSON.stringify(data) || "None";


  const query = "INSERT INTO `logs` (type, log, data, steam) VALUES (@type, @log,  @data, @steam)"


  const variables = {
    ["type"] : type,
    ["log"] : log,
    ["data"] : data,
    ["steam"] : steam
  }


  SQL(query, variables);
}



onNet("redux_logs:saveLog", function(type: string, user: any, log: string, data: any)  {

  AddLog(type, user, log, data)
})

/* on("onResourceStart", (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log("TypeScript boilerplate started!");
    console.log(myRandomData);
  }
});
 */