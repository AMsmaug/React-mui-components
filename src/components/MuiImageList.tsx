import {
  Stack,
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
} from "@mui/material";

export const MuiImageList = () => {
  return (
    <Stack spacing={4} direction={`row`}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        sx={{ width: 500, height: 450 }}
        cols={3}
        variant="woven"
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: 500, height: 450, overflowY: `scroll` }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.title}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

const itemData = [
  {
    img: `https://source.unsplash.com/random?w=164&h=164&fit=crop&auto=format&dpr=2`,
    title: `Breakfast1`,
  },
  {
    img: `https://source.unsplash.com/random`,
    title: `Breakfast2`,
  },
  {
    img: `https://source.unsplash.com/random`,
    title: `Breakfast3`,
  },
  {
    img: `https://source.unsplash.com/random`,
    title: `Breakfast4`,
  },
  {
    img: `https://source.unsplash.com/random`,
    title: `Breakfast5`,
  },
  {
    img: `https://source.unsplash.com/random`,
    title: `Breakfast6`,
  },
  {
    img: `https://source.unsplash.com/random`,
    title: `Breakfast7`,
  },
  {
    img: `https://source.unsplash.com/random`,
    title: `Breakfast8`,
  },
  {
    img: `https://source.unsplash.com/random`,
    title: `Breakfast9`,
  },
  {
    img: `https://source.unsplash.com/random`,
    title: `Breakfast10`,
  },
  {
    img: `https://source.unsplash.com/random`,
    title: `Breakfast11`,
  },
  {
    img: `https://source.unsplash.com/random`,
    title: `Breakfast12`,
  },
];
