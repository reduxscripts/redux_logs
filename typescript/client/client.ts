import { FW } from "./exports"




function AddLog(type: string, user: any, log: string, data: any) {
  emitNet("redux_logs:saveLog", type, user, log, data)
}



RegisterCommand('log', function(source: any)  {

  const user = FW.Functions.GetPlayerData();

  AddLog("Test", user, "Test", "Just testing");

}, false)