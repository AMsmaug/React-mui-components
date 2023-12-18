import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiList = () => {
  return (
    <Box sx={{ width: `400px`, bgcolor: `#efefef` }} m={4}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="secondary text" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary="secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="List item 3" secondary="secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="List item 4" secondary="secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="List item 4" secondary="secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="List item 4" secondary="secondary text" />
        </ListItem>
      </List>
    </Box>
  );
};
