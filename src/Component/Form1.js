import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

function Form1(props) {
  const { values, handleChange, errors } = props;

  return (
    <div className="form-container">
      <form noValidate autoComplete="off">
        <div className="input-row">
          <TextField
            id="outlined-helperText"
            className="input-class"
            required
            onChange={handleChange("jobtitle")}
            label="Looking For"
            name="jobtitle"
            value={values.jobtitle}
            placeholder="Enter Value..."
            variant="outlined"
            helperText={values.jobtitle ? "" : errors.titleFiled}
          />

          <TextField
            id="outlined-helperText"
            className="input-class"
            label="Experiance"
            required
            onChange={handleChange("jobExperiance")}
            value={values.jobExperiance}
            name="jobExperiance"
            placeholder="Enter Value..."
            variant="outlined"
            helperText={values.jobExperiance ? "" : errors.experianceField}
          />

          <TextField
            id="outlined-helperText"
            className="input-class"
            label="Education"
            required
            onChange={handleChange("education")}
            value={values.education}
            name="education"
            placeholder="Enter Value..."
            variant="outlined"
          />
        </div>
        <div className="input-row">
          <TextField
            id="outlined-helperText"
            className="skills-input"
            label="Skills"
            onChange={handleChange("skills")}
            value={values.skills}
            name="skills"
            placeholder="Enter Value..."
            variant="outlined"
          />
        </div>
        <div className="row-input">
          <TextField
            className="job-description"
            id="outlined-helperText"
            label="Description"
            variant="outlined"
            onChange={handleChange("description")}
            defaultValue={values.description}
            name="description"
            multiline
            rows={8}
          />
        </div>
        <div className="row-input">
          <div className="image-upload">
            <label htmlFor="file-input-data" className="label">
              <img
                className="file-input"
                src="https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png"
              />
              <span className="upload-text">GO TO SELECT TEMPLATE</span>
            </label>

            <input
              id="file-input-data"
              onChange={handleChange("image")}
              name="image"
              type="file"
            />
          </div>
          {values.image ? "" : errors.imageField}
        </div>
      </form>
    </div>
  );
}

export default Form1;
