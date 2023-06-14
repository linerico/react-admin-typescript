import { FC } from "react"
import { MenuTabEnum } from "../scenes/global/Sidebar"
import { Box, Typography, useTheme } from "@mui/material"
import { ColorModeEnum, tokens } from "../theme"

type Props = {
  title: MenuTabEnum
  subtitle: string
}

const Header: FC<Props> = ({ title, subtitle }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode as ColorModeEnum)

  return (
    <Box mb="30px">
      <Typography 
        variant="h2" 
        color={colors.grey[100]} 
        fontWeight="bold" 
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.greenAccent[400]}
      > 
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header
