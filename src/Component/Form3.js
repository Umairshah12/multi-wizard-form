import React from "react";
import { MDBBtn } from "mdbreact";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import { Grid } from "@material-ui/core";

function Form3(props) {
  const { values, OnInputChange, errors, onBtnClick, buttonError } = props;
  return (
    <>
      <div className="form-heading">Schedule working days & timings</div>
      <hr className="form-line" />
      <div className="form-actions">
        <div className="action-list">
          <div className="icon-1">s</div>
          <div className="icon-2">M</div>
          <div className="icon-2">T</div>
          <div className="icon-2">W</div>
          <div className="icon-2">t</div>
          <div className="icon-2">f</div>
          <div className="icon-3">s</div>
        </div>
        {buttonError}
        <div className="form-inputs">
          <Grid>
            <MDBBtn
              outline
              onClick={() => {
                onBtnClick("Sunday");
              }}
              className="sunday-input-btn"
            >
              Sunday
            </MDBBtn>
            <TimeRangePicker
              className="sunday-input"
              onChange={(value) => {
                OnInputChange(value);
              }}
            />
          </Grid>
          <Grid>
            <MDBBtn
              outline
              onClick={() => {
                onBtnClick("Monday");
              }}
              className="other-input-btn"
            >
              Monday
            </MDBBtn>
            <TimeRangePicker
              className="other-input"
              onChange={(value) => {
                OnInputChange(value);
              }}
              // value={values.mondayInput}
            />
          </Grid>
        </div>

        <div className="form-inputs">
          <Grid>
            <MDBBtn
              onClick={() => {
                onBtnClick("Tuesday");
              }}
              outline
              className="other-input-btn"
            >
              Tuesday
            </MDBBtn>
            <TimeRangePicker
              className="list-inputs"
              onChange={(value) => {
                OnInputChange(value);
              }}
            />

            <MDBBtn
              outline
              onClick={() => {
                onBtnClick("Wednesday");
              }}
              className="other-input-btn"
            >
              Wednesday
            </MDBBtn>
            <TimeRangePicker
              className="other-input"
              onChange={(value) => {
                OnInputChange(value);
              }}
            />
          </Grid>
        </div>

        <div className="form-inputs">
          <Grid>
            <MDBBtn
              onClick={() => {
                onBtnClick("Thursday");
              }}
              outline
              className="other-input-btn"
            >
              Thursday
            </MDBBtn>
            <TimeRangePicker
              className="list-inputs"
              onChange={(value) => {
                OnInputChange(value);
              }}
            />

            <MDBBtn
              outline
              onClick={() => {
                onBtnClick("Friday");
              }}
              className="other-input-btn"
            >
              Friday
            </MDBBtn>
            <TimeRangePicker
              className="other-input"
              onChange={(value) => {
                OnInputChange(value);
              }}
            />
          </Grid>
        </div>

        <div className="form-inputs">
          <Grid>
            <MDBBtn
              outline
              onClick={() => {
                onBtnClick("Saturday");
              }}
              className="sunday-input-btn"
            >
              Saturday
            </MDBBtn>
            <TimeRangePicker
              className="sunday-input"
              onChange={(value) => {
                OnInputChange(value);
              }}
            />
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Form3;
