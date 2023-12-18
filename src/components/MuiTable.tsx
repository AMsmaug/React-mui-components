import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: `300px` }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => {
            return (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Giorgio",
    last_name: "Dack",
    email: "gdack0@omniture.com",
    gender: "Male",
    ip_address: "148.2.190.19",
  },
  {
    id: 2,
    first_name: "Dene",
    last_name: "Melloy",
    email: "dmelloy1@nbcnews.com",
    gender: "Male",
    ip_address: "177.216.80.211",
  },
  {
    id: 3,
    first_name: "Derick",
    last_name: "Stickney",
    email: "dstickney2@sciencedirect.com",
    gender: "Male",
    ip_address: "204.87.46.232",
  },
  {
    id: 4,
    first_name: "Frasco",
    last_name: "Pruckner",
    email: "fpruckner3@springer.com",
    gender: "Male",
    ip_address: "112.175.228.103",
  },
  {
    id: 5,
    first_name: "Hogan",
    last_name: "Josowitz",
    email: "hjosowitz4@gnu.org",
    gender: "Male",
    ip_address: "76.14.70.146",
  },
  {
    id: 6,
    first_name: "Fabiano",
    last_name: "Marfell",
    email: "fmarfell5@ft.com",
    gender: "Male",
    ip_address: "221.139.251.144",
  },
  {
    id: 7,
    first_name: "Margaret",
    last_name: "Hendrick",
    email: "mhendrick6@live.com",
    gender: "Female",
    ip_address: "20.75.171.164",
  },
  {
    id: 8,
    first_name: "Casey",
    last_name: "Bartoletti",
    email: "cbartoletti7@joomla.org",
    gender: "Female",
    ip_address: "130.47.9.119",
  },
  {
    id: 9,
    first_name: "Everett",
    last_name: "Gippes",
    email: "egippes8@pcworld.com",
    gender: "Male",
    ip_address: "82.168.78.42",
  },
  {
    id: 10,
    first_name: "Niko",
    last_name: "Caraher",
    email: "ncaraher9@wikia.com",
    gender: "Male",
    ip_address: "56.50.56.197",
  },
];
