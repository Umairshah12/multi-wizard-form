import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function Form2(props) {
  const { values, handleChange, errors, genderSelect, persons } = props;

  return (
    <div className="form-container">
      <form noValidate autoComplete="off">
        <div className="input-row">
          <TextField
            type="number"
            required
            id="hourLength"
            className="input-class"
            label="HourlyRate"
            name="hourlyRate"
            inputProps={{ minlength: 10, maxLength: 20 }}
            onChange={handleChange("hourlyRate")}
            defaultValue={values.hourlyRate}
            placeholder="Enter Value..."
            variant="outlined"
            helperText={values.hourlyRate < 10 ? errors.timeError : ""}
          />

          <TextField
            type="date"
            id="outlined-helperText"
            className="input-class"
            // label="Experiance Start Date"
            name="experianceStartDate"
            onChange={handleChange("experianceStartDate")}
            defaultValue={values.experianceStartDate}
            // placeholder="Enter Value..."
            variant="outlined"
          />

          <TextField
            type="text"
            id="outlined-helperText"
            className="input-class"
            label="Career Level"
            name="carrerLevel"
            onChange={handleChange("carrerLevel")}
            defaultValue={values.carrerLevel}
            placeholder="Enter Value..."
            variant="outlined"
          />

          <FormControl variant="outlined" className="input-class">
            <InputLabel htmlFor="age-native-simple">Gender</InputLabel>

            <Select value={values.gender} onChange={handleChange("gender")}>
              {persons.map((res) => (
                <MenuItem value={res.name} key={res.name}>
                  {res.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="input-row">
          <TextField
            className="job-description"
            id="outlined-helperText"
            label="Equipment Specification"
            variant="outlined"
            name="equipmentSpecification"
            onChange={handleChange("equipmentSpecification")}
            defaultValue={values.equipmentSpecification}
            multiline
            rows={8}
          />
        </div>
      </form>
    </div>
  );
}

export default Form2;
