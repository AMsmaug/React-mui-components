import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction={`row`} m={4}>
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="secondary" max={999}>
        <MailIcon />
      </Badge>
      <Badge
        variant="dot"
        color="primary"
        invisible={false /* unreadEmails.length !== 0 */}
      >
        <MailIcon />
      </Badge>
    </Stack>
  );
};
