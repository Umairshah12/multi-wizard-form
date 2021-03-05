import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import Step1 from "./Component/Form1";
import Step2 from "./Component/Form2";
import Step3 from "./Component/Form3";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  // root: {
  //   minWidth: 275,
  // },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
}));

function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [list, setList] = useState([]);

  const [formValues, setFormValues] = useState({
    jobtitle: "",
    jobExperiance: "",
    education: "",
    skills: "",
    description: "",
    image: "",
    hourlyRate: "",
    experianceStartDate: "",
    carrerLevel: "",
    gender: "",
    equipmentSpecification: "",
    numberofDays: "",
    numberofHours: "",
    time: "",
    error: "",
    HouryError: "",
    inputValues: [],
    buttonError: "",
  });

  function getSteps() {
    return ["Job Information", "Candidate Type", "Shift Timings"];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Step1
            errors={formValues.error}
            // register={register}
            values={formValues}
            handleChange={handleChange}
          />
        );
      case 1:
        return (
          <Step2
            errors={formValues.error}
            hourlyError={formValues.HouryError}
            values={formValues}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <Step3
            errors={formValues.error}
            hourlyError={formValues.HouryError}
            values={formValues}
            onBtnClick={onBtnClick}
            OnInputChange={OnInputChange}
            buttonError={formValues.buttonError}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  }

  const steps = getSteps();

  const handleNext = () => {
    if (
      formValues.jobtitle === "" ||
      formValues.jobExperiance === "" ||
      formValues.image === ""
    ) {
      let err = <p className="error">Please fill the Required Field First</p>;
      setFormValues((prevState) => ({ ...prevState, error: err }));
    } else if (activeStep === 1 && formValues.hourlyRate < 10) {
      let hEror = <p className="error">Select greater than 10 digit</p>;
      setFormValues((prevState) => ({ ...prevState, HouryError: hEror }));
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (input) => (e) => {
    setFormValues({
      ...formValues,
      [input]: e.target.value,
    });
  };

  const onBtnClick = (value) => {
    setFormValues({
      ...formValues,
      inputValues: [...formValues.inputValues, { day: value }],
    });
  };

  const OnInputChange = (timeinfo) => {
    console.log("time info", formValues.inputValues);
    setFormValues({
      ...formValues,
      inputValues: [
        ...formValues.inputValues,
        {
          startTime: timeinfo ? timeinfo : "",
        },
        { EndTime: timeinfo ? timeinfo : "" },
      ],
    });
  };

  const handleSubmit = () => {
    setList(formValues);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div>
      <Card classes={{ root: "card-width" }} variant="outlined">
        <CardContent>
          <div className="layer-info">CREATE A POST JOB</div>
          <div className="sub-info">
            Complete the following steps to create an effective job post
          </div>
          <hr className="info-line" />
          <div className="card-sub-cotainer">
            <div className="steps-info">Step {activeStep} of 2</div>
            <div className="step-rectangle-container" activeStep={activeStep}>
              {steps.map((label, index) => {
                let activeclass = index === activeStep ? "active" : "";
                return (
                  <div key={label}>
                    <div className={`first-step ${activeclass}`}>{label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={classes.root}>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div className="button-container">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className="back-button "
                  >
                    Previous
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={
                      activeStep === steps.length - 1
                        ? handleSubmit
                        : handleNext
                    }
                    className="next-button"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;