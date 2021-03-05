import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
function Form1(props) {
  const { values, handleChange, errors } = props;

  return (
    <div className="container form-container">
      <form noValidate autoComplete="off">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-xs-4">
            <TextField
              id="outlined-helperText"
              className="looking-for"
              required
              onChange={handleChange("jobtitle")}
              label="Looking For"
              name="jobtitle"
              defaultValue={values.jobtitle}
              placeholder="Enter Value..."
              variant="outlined"
              helperText={values.jobtitle ? "" : errors.titleFiled}
            />
          </div>
          <div className="col-lg-6 col-md-4 col-xs-4">
            <TextField
              id="outlined-helperText"
              className="experiance-input"
              label="Experiance"
              required
              onChange={handleChange("jobExperiance")}
              defaultValue={values.jobExperiance}
              name="jobExperiance"
              placeholder="Enter Value..."
              variant="outlined"
              helperText={values.jobExperiance ? "" : errors.experianceField}
            />
          </div>
          <div className="col-lg-6 col-xs-4 col-md-4">
            <TextField
              id="outlined-helperText"
              className="looking-for"
              label="Education"
              required
              onChange={handleChange("education")}
              defaultValue={values.education}
              name="education"
              placeholder="Enter Value..."
              variant="outlined"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-4 col-xs-4">
            <TextField
              id="outlined-helperText"
              className="skills-input"
              label="Skills"
              onChange={handleChange("skills")}
              defaultValue={values.skills}
              name="skills"
              placeholder="Enter Value..."
              variant="outlined"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-4 col-xs-4">
            <TextField
              classes={{ root: "job-description" }}
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
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-4 col-xs-4">
            <p className="logo-text">Add If there is any inspiration </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 col-md-4 col-xs-4">
            <div className="image-upload">
              <label htmlFor="file-input-data">
                <img
                  className="file-input"
                  src="https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png"
                />
                <span className="upload-text">GO TO SELECT TEMPLATE</span>
              </label>

              <input
                id="file-input-data"
                onChange={handleChange("image")}
                // value={values.image}
                name="image"
                type="file"
              />
              {values.image ? "" : errors.imageField}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form1;
