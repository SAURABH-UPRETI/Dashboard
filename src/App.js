import "./App.css";
import Navbar from "./Components/Navbar";
import User from "./img/man.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// const data = [
//   { label: "Label 1", value: 12 },
//   { label: "Label 2", value: 19 },
//   { label: "Label 3", value: 3 },
//   { label: "Label 4", value: 5 },
//   { label: "Label 5", value: 2 },
//   { label: "Label 1", value: 12 },
//   { label: "Label 2", value: 19 },
//   { label: "Label 3", value: 3 },
//   { label: "Label 4", value: 5 },
//   { label: "Label 5", value: 2 },
//   { label: "Label 1", value: 12 },
//   { label: "Label 2", value: 19 },
//   { label: "Label 3", value: 3 },
//   { label: "Label 4", value: 5 },
//   { label: "Label 5", value: 2 },
// ];
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);
const data = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      label: "view",
      data: [50, 20, 10, 22, 50, 10, 40],
      backgroundColor: "rgb(8,0,163)",
      borderRadius: 3,
      categoryPercentage: 0.4,
    },
  ],
};
newData = data;
const option = {
  scales: {
    x: {
      ticks: {
        color: "black",
      },
    },
    y: {
      ticks: {
        stepSize: 10,
        color: "black",
      },
    },
  },
};
function App() {
  // const maxValue = Math.max(...data.map((item) => item.value));
  return (
    <div className="App">
      <div className="d-flex dashboard">
        <Navbar />
        <div className="row w-100 h-100">
          <div className="col-sm-3 user-details">
            <div className="d-flex flex-row part-one">
              <img src={User}></img>
              <div className="d-flex flex-column p-3">
                <h5>Hi Mike</h5>
                <span>Welcome Back</span>
              </div>
            </div>
            <div className="d-flex flex-column part-two mt-2">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="m-0 p-0">Today</h3>
                </div>
                <div className="col-sm-12 mt-4">
                  <h4 className="m-0 p-0">&#36;19,892</h4>
                  <span>Account Balance</span>
                </div>
                <div className="pc-view">
                  <div className="col-sm-12 mt-4">
                    <h6 className="m-0 p-0">&#36;4000</h6>
                    <span className="m-0 p-0">Year-to-Date Contribution</span>
                  </div>
                  <div className="col-sm-12 mt-4">
                    <h6>&#36;1,892</h6>
                    <span>Total Interest</span>
                    <div />
                  </div>
                </div>
                <div className="mobile-view d-flex ">
                  <div className="row mt-3">
                    <div className="col-6 m-0 p-0">
                      <h6>&#36;4000</h6>
                      <span>Year-to-Date Contribution</span>
                    </div>
                    <div className="col-6">
                      <h6>&#36;1,892</h6>
                      <span>Total Interest</span>
                      <div />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 mt-2">
                  <button type="button">
                    I want to <ArrowRightIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column part-three mt-5">
              <div className="row">
                <div className="col-sm-12">
                  <h6>Recent Transection</h6>
                </div>
                <div className="col-sm-12 mt-2">
                  <span>2020-08-07</span>
                  <h6>Withdrawal Transfer to Bank-XXXX11</h6>
                </div>
                <div className="col-sm-12 mt-2">
                  <span>2020-07-21</span>
                  <h6>Withdrawal Transfer to Bank-XXXX11</h6>
                </div>
                <div className="col-sm-12 mt-2">
                  <span>2020-07-16</span>
                  <h6>Withdrawal Transfer to Bank-XXXX11</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-7 d-flex flex-column  data">
            <div className="">dd</div>

            <div className="">
              {/* <div className="bar-chart">
                {data.map((item) => (
                  <div
                    key={item.label}
                    className="bar"
                    style={{ height: `${(item.value / maxValue) * 200}px` }}
                  >
                    <span className="bar-label">{item.label}</span>
                  </div>
                ))}
              </div> */}
              <Bar data={data} options={option}></Bar>
            </div>
            <div className="">
              <div className="col-sm-4"></div>
            </div>
            <div className=""></div>
            <div className=""></div>
          </div>
          <div className="col-sm-2 side-bar">ddddddddd</div>
        </div>
      </div>
    </div>
  );
}

export default App;
