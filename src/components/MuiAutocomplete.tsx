import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  const skills = [`HTML`, `CSS`, `JavaScript`, `TypeScript`, `React`];
  const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));
  console.log(value);
  return (
    <Stack spacing={2} width={250}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(_e, newValue: string | null) => setValue(newValue)}
        // freeSolo // this attribute will allow the user to enter a free text which doesn't exist among the existing options
      />
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={skill}
        onChange={(_e, newValue: Skill | null) => setSkill(newValue)}
        // freeSolo // this attribute will allow the user to enter a free text which doesn't exist among the existing options
      />
    </Stack>
  );
};
