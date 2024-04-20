import { Typography } from "@material-tailwind/react";
import { Routes, Route } from "react-router-dom";

import NotificationContainer from "./NotificationContainer";

const NotificationRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={
        <Typography variant="h3" color="blue-gray">
          Anomaly Home
        </Typography>}
      />
      <Route
        path={`/notification/:recordId`}
        element={<NotificationContainer />}
      />
    </Routes>
  )
}

export default NotificationRouter;