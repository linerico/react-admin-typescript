import "react-pro-sidebar/dist/css/styles.css"

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutline"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import CalendarTodatOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined"
import BarChartOurlinedIcon from "@mui/icons-material/BarChartOutlined"
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { ColorModeEnum, tokens } from "../../theme"
import { FC, ReactNode, useState } from "react"
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
import { Link } from "react-router-dom"

export enum MenuTabEnum {
  DASHBOARD = "Dashboard",
  MANAGER_TEAM = "Manager Team",
  CONTACTS_INFORMATION= "Contacts Information",
  INVOICES_BALANCES = "Invoices Balances",
  PROFILE_FORM = "Profile Form",
  CALENDAR = "Calendar",
  FAQ_PAGE = "FAQ Page",
  BAR_CHART = "Bar Chart",
  PIE_CHART = "Pie Chart",
  LINE_CHART = "Line Chart",
  GEOGRAPHY_CHART = "Geography Chart",
}

type ItemProps = {
  title: MenuTabEnum,
  selected: MenuTabEnum,
  icon: ReactNode
  to?: string
  setSelected: (menutab: MenuTabEnum) => void
}

const Item: FC<ItemProps> = ({ 
  title, 
  selected, 
  icon, 
  to = "/", 
  setSelected
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode as ColorModeEnum)

  return (
    <MenuItem 
      active={selected === title} 
      style={{ color: colors.grey[100]}}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

const Sidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode as ColorModeEnum)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState(MenuTabEnum.DASHBOARD)


  return (
    <Box 
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src="../../assets/user.png"
                  style={{ cursor: "pointer", borderRadius: "50%"}}
                />
              </Box>

              <Box textAlign="center">
                <Typography 
                  variant="h2" 
                  color={colors.grey[100]} 
                  fontWeight="bold" 
                  sx={{m: "10px 0 0 0"}}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                  </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items */ }
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item 
              title={MenuTabEnum.DASHBOARD}
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Item 
              title={MenuTabEnum.MANAGER_TEAM}
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title={MenuTabEnum.CONTACTS_INFORMATION}
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title={MenuTabEnum.INVOICES_BALANCES}
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <Item 
              title={MenuTabEnum.PROFILE_FORM}
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title={MenuTabEnum.CALENDAR}
              to="/calendar"
              icon={<CalendarTodatOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title={MenuTabEnum.FAQ_PAGE}
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <Item 
              title={MenuTabEnum.BAR_CHART}
              to="/bar"
              icon={<BarChartOurlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title={MenuTabEnum.PIE_CHART}
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title={MenuTabEnum.LINE_CHART}
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title={MenuTabEnum.GEOGRAPHY_CHART}
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar
