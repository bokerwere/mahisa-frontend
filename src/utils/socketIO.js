import { io } from "socket.io-client";
import { INLINE_SCHEDULING_END_POINT } from "../constants/strings";

// const socket = io("https://ntsa-scheduling-backup-routes-ntsa-uat-di.apps.ntsa-aro-cloud.westeurope.aroapp.io", {
const socket = io(INLINE_SCHEDULING_END_POINT, {
  transports: ["websocket"],
});

socket.connect();

export default socket;
