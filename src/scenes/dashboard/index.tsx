import { Box } from "@mui/material"
import Header from "../../components/Header"
import { MenuTabEnum } from "../global/Sidebar"

const Dashboard = () => {
  return (
    <Box m="20px"> 
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header 
          title={MenuTabEnum.DASHBOARD}
          subtitle="Welcome to your dashboard"
        />
      </Box>
    </Box>
  )
}

export default Dashboard
