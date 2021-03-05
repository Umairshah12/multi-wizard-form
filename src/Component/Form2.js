import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import TextField from "@material-ui/core/TextField";

function Form2(props) {
  const { values, handleChange, hourlyError } = props;
  return (
    <div className="container form-container">
      <form noValidate autoComplete="off">
        <div class="row">
          <div class="col-xs-6 col-lg-6 col-md-4">
            <TextField
              type="number"
              required
              id="hourLength"
              className="looking-for"
              label="HourlyRate"
              name="hourlyRate"
              min="10"
              max="100"
              inputProps={{ minlength: 10, maxLength: 20 }}
              onChange={handleChange("hourlyRate")}
              defaultValue={values.hourlyRate}
              placeholder="Enter Value..."
              variant="outlined"
              helperText={hourlyError}
            />
          </div>
          <div class="col-xs-6 col-lg-6 col-md-4">
            <TextField
              type="date"
              id="outlined-helperText"
              className="experiance-input"
              label="Experiance Start Date"
              name="experianceStartDate"
              onChange={handleChange("experianceStartDate")}
              defaultValue={values.experianceStartDate}
              placeholder="Enter Value..."
              variant="outlined"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-lg-6 col-md-4">
            <TextField
              type="text"
              id="outlined-helperText"
              className="looking-for"
              label="Career Level"
              name="carrerLevel"
              onChange={handleChange("carrerLevel")}
              defaultValue={values.carrerLevel}
              placeholder="Enter Value..."
              variant="outlined"
            />
          </div>
          <div class="col-xs-6 col-lg-6 col-md-4">
            <TextField
              id="outlined-helperText"
              className="experiance-input"
              label="Gender"
              name="gender"
              onChange={handleChange("gender")}
              defaultValue={values.gender}
              placeholder="Enter Value..."
              variant="outlined"
            />
          </div>
        </div>
        <div className="row">
          <div class="col-xs-4 col-lg-12 col-md-6">
            <TextField
              classes={{ root: "job-description" }}
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
        </div>
      </form>
    </div>
  );
}

export default Form2;
