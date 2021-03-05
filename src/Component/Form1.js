import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
function Form1(props) {
  const { values, handleChange, errors } = props;
  return (
    <div class="container form-container">
      <form noValidate autoComplete="off">
        <div class="row">
          <div class="col-lg-6 col-md-4 col-xs-4">
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
              helperText={errors}
            />
          </div>
          <div class="col-lg-6 col-md-4 col-xs-4">
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
              helperText={errors}
            />
          </div>
          <div class="col-lg-6 col-xs-4 col-md-4">
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
        <div class="row">
          <div class="col-lg-12 col-md-4 col-xs-4">
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
                  src="https://icon-library.com/images/upload-image-icon-png/upload-image-icon-png-21.jpg"
                />
                <span className="upload-text">GO TO SELECT TEMPLATE</span>
              </label>

              <input
                id="file-input-data"
                onChange={handleChange("image")}
                value={values.image}
                name="image"
                type="file"
              />
              {errors}
            </div>
          </div>
        </div>
      </form>
    </div>
    // <div className="form-container">
    //   <form noValidate autoComplete="off">
    //     <TextField
    //       id="outlined-helperText"
    //       className="looking-for"
    //       required
    //       onChange={handleChange("jobtitle")}
    //       label="Looking For"
    //       name="jobtitle"
    //       defaultValue={values.jobtitle}
    //       placeholder="Enter Value..."
    //       variant="outlined"
    //       helperText={errors}
    //     />

    //     <TextField
    //       id="outlined-helperText"
    //       className="experiance-input"
    //       label="Experiance"
    //       required
    //       onChange={handleChange("jobExperiance")}
    //       defaultValue={values.jobExperiance}
    //       name="jobExperiance"
    //       placeholder="Enter Value..."
    //       variant="outlined"
    //       helperText={errors}
    //     />
    //     <TextField
    //       id="outlined-helperText"
    //       className="looking-for"
    //       label="Education"
    //       required
    //       onChange={handleChange("education")}
    //       defaultValue={values.education}
    //       name="education"
    //       placeholder="Enter Value..."
    //       variant="outlined"
    //     />
    //     <TextField
    //       id="outlined-helperText"
    //       className="skills-input"
    //       label="Skills"
    //       onChange={handleChange("skills")}
    //       defaultValue={values.skills}
    //       name="skills"
    //       placeholder="Enter Value..."
    //       variant="outlined"
    //     />

    //     <TextField
    //       classes={{ root: "job-description" }}
    //       id="outlined-helperText"
    //       label="Description"
    //       variant="outlined"
    //       onChange={handleChange("description")}
    //       defaultValue={values.description}
    //       name="description"
    //       multiline
    //       rows={8}
    //     />
    //     <Typography component="p" className="logo-text">
    //       Add If there is any inspiration
    //     </Typography>
    //     <p className="logo-text">Add If there is any inspiration </p>

    //     <div className="image-upload">
    //       <label htmlFor="file-input-data">
    //         <img
    //           className="file-input"
    //           src="https://icon-library.com/images/upload-image-icon-png/upload-image-icon-png-21.jpg"
    //         />
    //         <span className="upload-text">GO TO SELECT TEMPLATE</span>
    //       </label>

    //       <input
    //         id="file-input-data"
    //         onChange={handleChange("image")}
    //         value={values.image}
    //         name="image"
    //         type="file"
    //       />
    //       {errors}
    //     </div>
    //   </form>
    // </div>
  );
}

export default Form1;
