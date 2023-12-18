import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width={`300px`}>
      <Card>
        <CardMedia
          component={`img`}
          height={`180px`}
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={`div`}>
            React
          </Typography>
          <Typography variant="body2" color={`text.secondary`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eum
            vel quidem possimus aspernatur, iure impedit praesentium qui
            corporis debitis iste! Ad placeat velit tenetur ducimus? Tenetur
            explicabo adipisci praesentium.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
