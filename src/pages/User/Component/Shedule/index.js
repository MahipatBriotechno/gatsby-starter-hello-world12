import React from "react"
import "./index.css"
import $ from "jquery"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import ScheduleIcon from "@material-ui/icons/Schedule"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"
import TextField from "@material-ui/core/TextField"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import { IconButton } from "@material-ui/core"
import Moment from "moment"
import Pepole from '../../Assets/peopleSheduleIcon.svg'
import Clock from '../../Assets/clockIconSchelude.svg'
import Schedule from '../../Assets/scheduleIcontop.svg'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  widgetDiv:{
    background: "white",
    width: "100%",
    height: "71px",
    marginTop: "1rem",
    marginBottom: "1rem",
    borderLeft: "4px solid #209CA2",
    borderRadius: "5px 0px 0px 5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: "7px",
    paddingTop: "8px",
    paddingLeft: "6px"
  },
  imgWrapper:{
    display: "flex", alignItems: "center", columnGap: "7px" 

  },
  imgWrapper1:{
    display: "flex",
    alignItems: "center",
    columnGap: "3px",
    justifyContent: "space-between",
    width: "90%"
  },
  TextWrapper:{
    display: "flex", alignItems: "center", columnGap: "7px" 
  },
  Section:{
    border: "2px solid rgba(128, 128, 128, 0.421)",
    padding: "1.5rem",
    borderRadius: "1.5rem"
  },
  CreateButton:{
    background: "#209CA2 !important",
    color: "white !important",
    textTransform: "capitalize !important",
    borderRadius: "10px !important",
    "&:hover":{
      background: "#209CA2 !important",
    }
  },
  Header:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    marginTop: "1rem"
  }

}));
const Shedule = () => {
  const classes=useStyles()
  const [DateValue, setDateValue] = React.useState(
    Moment().format("YYYY-MM-DD")
  )
const NextDate=(value)=>
{
 setDateValue(Moment(value).add(1, 'days').format('YYYY-MM-DD'))
}
const PreviousDate=(value)=>{
  setDateValue(Moment(value).subtract(1, 'days').format('YYYY-MM-DD'))
}
  const Events = [
    {
      eventName: "test1",
    },
    {
      eventName: "test2",
    },
    {
      eventName: "test3",
    },
    {
      eventName: "test4",
    },
    {
      eventName: "test5",
    },
    {
      eventName: "test6",
    },
  ]
  const SheduleTime = [
    {
      time: "10",
    },
    {
      time: "11",
    },
    {
      time: "12",
    },
    {
      time: "13",
    },
    {
      time: "14",
    },
    {
      time: "15",
    },
    {
      time: "16",
    },
  ]
  const data = [
    {
      eventName: "test4",
      time: "16",
      name: "hello",
    },

    {
      eventName: "test2",
      time: "11",
      name: "hello",
    },

    {
      eventName: "test1",
      time: "12",
      name: "hello",
    },
    {
      eventName: "test3",
      time: "14",
      name: "hello",
    },
    {
      eventName: "test5",
      time: "10",
      name: "hello",
    },
    {
      eventName: "test5",
      time: "13",
      name: "hello",
    },
    {
      eventName: "test6",
      time: "13",
      name: "hello",
    },
  ]
  React.useEffect(() => {
    for (var i = 0; i < data.length; i++) {
      $("#" + data[i].eventName + "-" + data[i].time).html(
        `<div class=${classes.widgetDiv}><div class=${classes.imgWrapper1}><div class=${classes.TextWrapper}><img src=${Pepole} ></img><span>Test Name</span></div> <div><img src=${Schedule} ></img></div> </div><div class=${classes.imgWrapper}><img src=${Clock} ></img><span>10:00-11:00</span></div></div>`
      )
    }
  }, [])

  return (
    <div>
      <div className={classes.Header}>
        <span className="header-text">Shedule</span>
        <div className="date-div">
          <Button className={classes.CreateButton}>
            <AddIcon />
            Create Booking
          </Button>

          <div className="icon-wrapper">
            <IconButton className="icon-back-arrow" onClick={()=>PreviousDate(DateValue)}>
              <ArrowBackIosIcon />
            </IconButton>

            <TextField
              variant="outlined"
              className="input-text"
              id="date"
              type="date"
              size="small"
              value={DateValue}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <IconButton className="icon-forwed-arrow" onClick={()=>NextDate(DateValue)}>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={classes.Section}>
        <div className="time-picker-container" id="time-picker-container">
          <table className="tardis">
            <tbody>
              <tr>
                <td className="corner" style={{ border: "none" }}>
                  &nbsp;
                </td>
                {Events.map(dt => {
                  return <th style={{ border: "none" }}>{dt.eventName}</th>
                })}
              </tr>

              {SheduleTime.map(dt => {
                return (
                  <tr>
                    <th style={{ border: "none", width: 50 }}>{dt.time}</th>
                    {Events.map(t => {
                      return (
                        <td
                          id={t.eventName + "-" + dt.time}
                          style={{
                            background: "#8080803d",
                            border: "0.5px solid #80808045",
                            width: 165,
                            padding: 0,
                          }}
                        ></td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Shedule
