import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Step1 from "../Component/Form1";
import Step2 from "../Component/Form2";
import Step3 from "../Component/Form3";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

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

function UpdateMultiForm(props) {
  const { userId } = useParams();

  console.log("use paramas id", userId);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

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
    time: "",
    error: {
      titleFiled: "",
      experianceField: "",
      imageField: "",
      timeError: "",
      buttonError: "",
      HoursCheckError: "",
    },
    Objects: [
      {
        daysName: "Sunday",
        toggled: false,
        days: "",
        block: true,
        time: { strTime: "", endTime: "" },
        timeInfo: [],
      },
      {
        daysName: "Monday",
        toggled: false,
        days: "",
        block: false,
        time: { strTime: "", endTime: "" },
        timeInfo: [],
      },
      {
        daysName: "Tuesday",
        toggled: false,
        days: "",
        block: false,
        time: { strTime: "", endTime: "" },
        timeInfo: [],
      },
      {
        daysName: "Wednesday",
        toggled: false,
        days: "",
        block: false,
        time: { strTime: "", endTime: "" },
        timeInfo: [],
      },
      {
        daysName: "Thursday",
        toggled: false,
        days: "",
        block: false,
        time: { strTime: "", endTime: "" },
        timeInfo: [],
      },
      {
        daysName: "Friday",
        toggled: false,
        days: "",
        block: false,
        time: { strTime: "", endTime: "" },
        timeInfo: [],
      },
      {
        daysName: "Saturday",
        toggled: false,
        days: "",
        block: true,
        time: { strTime: "", endTime: "" },
        timeInfo: [],
      },
    ],
  });
  const persons = [
    {
      name: "Male",
    },
    {
      name: "Female",
    },
  ];

  useEffect(async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`);
      let data = await response.json();
      setFormValues(data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  function getSteps() {
    return ["Job Information", "Candidate Type", "Shift Timings"];
  }

  function getStepContent(activeStep) {
    switch (activeStep) {
      case 0:
        return (
          <Step1
            errors={formValues.error}
            values={formValues}
            handleChange={handleChange}
          />
        );
      case 1:
        return (
          <Step2
            errors={formValues.error}
            values={formValues}
            handleChange={handleChange}
            persons={persons}
          />
        );
      case 2:
        return (
          <Step3
            errors={formValues.error}
            values={formValues}
            onBtnClick={onBtnClick}
            OnInputChange={OnInputChange}
            Objects={formValues.Objects}
            ToggleActive={ToggleActive}
            ToggleObjectStyles={ToggleObjectStyles}
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
      let titleError = <p className="error">Title Field Required! </p>;
      let ImageError = <p className="error">Image Field Required!</p>;
      let ExperianceField = (
        <p className="error">Experiance Field Required! </p>
      );
      setFormValues((prevState) => ({
        ...prevState,
        error: {
          titleFiled: titleError,
          imageField: ImageError,
          experianceField: ExperianceField,
        },
      }));
    } else if ((activeStep === 1 && formValues.hourlyRate < 10) || 0) {
      let TimeError = (
        <p id="time" className="error">
          Select greater than 10 digit
        </p>
      );
      setFormValues((prevState) => ({
        ...prevState,
        error: {
          timeError: TimeError,
        },
      }));
    } else if (activeStep === 2) {
      setFormValues((prevState) => ({
        ...prevState,
        error: {
          buttonError: "",
        },
      }));
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

  const ToggleActive = (index) => {
    let copyArray = [...formValues.Objects];
    copyArray[index].toggled
      ? (copyArray[index].toggled = false)
      : (copyArray[index].toggled = true);
    setFormValues({ ...formValues, Objects: copyArray });
  };

  const ToggleObjectStyles = (index) => {
    if (formValues.Objects[index].toggled) {
      return "makeActive";
    } else {
      return "input-classes-btn";
    }
  };

  const onBtnClick = (value, index) => {
    let inputValuesCopy = [...formValues.Objects];
    inputValuesCopy[index].days
      ? (inputValuesCopy[index].days = {})
      : (inputValuesCopy[index].days = { value });

    setFormValues({
      ...formValues,
      Objects: inputValuesCopy,
    });
  };

  const OnInputChange = (timeinfo, index) => {
    let strTime = timeinfo && timeinfo[0]._d.toLocaleTimeString("en-US");
    let EndTime = timeinfo && timeinfo[1]._d.toLocaleTimeString("en-US");
    let startTime = moment(timeinfo && timeinfo[0]._d);
    let endTime = moment(timeinfo && timeinfo[1]._d);
    let Timeduration = moment.duration(endTime.diff(startTime));
    let Hours = parseInt(Timeduration.asHours());
    let HoursError = <p className="error">Please select time 9 hours!</p>;
    let TimeCopyValues = [...formValues.Objects];
    TimeCopyValues[index].time = { strTime: strTime, endTime: EndTime };
    TimeCopyValues[index].timeInfo = timeinfo;

    if (Hours < 9) {
      setFormValues({
        ...formValues,
        error: { HoursCheckError: HoursError },
      });
    } else {
      setFormValues({
        ...formValues,
        Objects: TimeCopyValues,
        error: { HoursCheckError: "" },
      });
    }
  };

  const handleUpdateForm = async () => {
    if (formValues.error.HoursCheckError || formValues.error.buttonError) {
      alert("PLEASE FILL THE INFO CORRECT!");
    } else if (formValues.inputValues === "") {
      alert("PLEASE FILL ALL THE INPUT VALUES!");
    } else {
      try {
        const config = {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        };
        const response = await fetch(
          `http://localhost:3000/users/${userId}`,
          config
        );
        if (response.ok) {
          toast(" User Updated Successfully!", {
            type: "success",
          });
          const json = await response.json();
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          props.history.push("/UserList");
          return json;
        } else {
          //
        }
      } catch (error) {
        toast("OOPs User Updation Error!", {
          type: "error",
        });
      }
    }
  };

  return (
    <div className="container">
      <div className="add-User">
        <Link to={`/UserList`}>
          <Button variant="contained" className="list-btn" color="primary">
            View List
          </Button>
        </Link>
      </div>
      <div className="create-user-container">
        <Link to={`/`}>
          <Button variant="contained" className="create-user" color="primary">
            Create User
          </Button>
        </Link>
      </div>

      <Card classes={{ root: "card-width" }} variant="outlined">
        <CardContent>
          <div className="layer-info">UPDATE A POST JOB</div>
          <div className="sub-info">
            Complete the following steps to create an effective job post
          </div>
          <hr className="info-line" />
          <div className="card-sub-cotainer">
            <div className="steps-info">Step {activeStep} of 3</div>
            <div className="step-rectangle-container">
              {steps.map((label, index) => {
                let activeclass = index === activeStep ? "active" : "";
                return (
                  <div key={label} className="first-step">
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
                  All Steps Completed
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
                        ? handleUpdateForm
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

export default UpdateMultiForm;
