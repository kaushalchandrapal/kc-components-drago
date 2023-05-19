import { Box, Typography } from "@mui/material";
import { CustomTextField } from "../../components/CustomTextField";

const TextFieldPage = ({ name }: { name: string }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      
    >
      <Typography variant="h5">{name}</Typography>
      <Box
        marginBottom={2}
      >
        <CustomTextField
          variant="outlined"
          label="Name"
        />
      </Box>
      <Box
        marginBottom={2}
      >
        <CustomTextField
          variant="filled"
          label="Name"
        />
      </Box>
      <Box
        marginBottom={2}
      >
        <CustomTextField
          variant="standard"
          label="Name"
        />
      </Box>
    </Box>
  )
}

export default TextFieldPage
