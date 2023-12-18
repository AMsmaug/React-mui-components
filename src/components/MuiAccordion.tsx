import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box width={`300px`}>
      <Accordion
        expanded={expanded === `panel1`}
        onChange={(_event, isExpanded) => handleChange(isExpanded, `panel1`)}
      >
        <AccordionSummary
          id="panel1-header"
          aria-label="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam odio
            iste adipisci ratione aperiam consectetur atque blanditiis vitae
            cupiditate rem? Harum minus laborum eveniet illum dolorum doloremque
            cupiditate vero corrupti.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === `panel2`}
        onChange={(_event, isExpanded) => handleChange(isExpanded, `panel2`)}
      >
        <AccordionSummary
          id="panel2-header"
          aria-label="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam odio
            iste adipisci ratione aperiam consectetur atque blanditiis vitae
            cupiditate rem? Harum minus laborum eveniet illum dolorum doloremque
            cupiditate vero corrupti.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === `panel3`}
        onChange={(_event, isExpanded) => handleChange(isExpanded, `panel3`)}
      >
        <AccordionSummary
          id="panel3-header"
          aria-label="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam odio
            iste adipisci ratione aperiam consectetur atque blanditiis vitae
            cupiditate rem? Harum minus laborum eveniet illum dolorum doloremque
            cupiditate vero corrupti.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
