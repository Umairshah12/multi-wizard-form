import React, { useState, useEffect } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import moment from "moment";
import { Button } from "@material-ui/core";
import { TimePicker } from "antd";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Form3(props) {
  const {
    values,
    OnInputChange,
    errors,
    onBtnClick,
    Objects,
    ToggleObjectStyles,
    ToggleActive,
  } = props;

  return (
    <>
      <div className="form-heading">
        <Typography variant="h5" gutterBottom>
          Schedule working days & timings
        </Typography>
      </div>
      <hr className="form-line" />

      <div className="form-icons">
        <div className="action-list">
          <div className="icon-1">S</div>
          <div className="icon-2">T</div>
          <div className="icon-2">W</div>
          <div className="icon-2">T</div>
          <div className="icon-2">F</div>
          <div className="icon-1">S</div>
        </div>
      </div>
      {errors.HoursCheckError ? errors.HoursCheckError : ""}
      <div className="third-form-container">
        <div className="thirdform-input-row">
          {Objects.map((res, index) => {
            return (
              <>
                <Button
                  onClick={() => {
                    onBtnClick(res.daysName, index);
                    ToggleActive(index);
                  }}
                  className={`input-classes-btn ${ToggleObjectStyles(index)}`}
                  disabled={res.block ? true : false}
                >
                  {res.daysName}
                </Button>

                <TimePicker.RangePicker
                  onChange={(value) => {
                    OnInputChange(value, index);
                  }}
                  className="input-classes"
                  value={[moment(res.timeInfo[0]), moment(res.timeInfo[1])]}
                  disabled={res.block ? "disabled" : ""}
                  use12Hours
                  format="h:mm a"
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Form3;
