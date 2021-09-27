import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Col, Row, Table } from "reactstrap";

const AverageCol = () => {
  const filteredSensors = [0, 1, 2, 3, 4, 5];
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Sensor Utilization Values",
      style: {
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: [
        "Sensor 1",
        "Sensor 2",
        "Sensor 3",
        "Sensor 4",
        "Sensor 5",
        "Sensor 6",
        "Sensor 7",
        "Sensor 8",
        "Sensor 9",
        "Sensor 10",
      ],
      title: {
        text: "Sensors",
        style: {
          fontWeight: "bold",
          font: "Arial",
          color: "#000000",
          fontSize: "14px",
        },
      },
    },
    yAxis: {
      title: {
        text: "Sensor Value",
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: "blue",
        },
      ],
    },
    series: filteredSensors.map((sen) => {
      return {
        name: sen["sample index"],
        data: [
          sen["sensor0"],
          sen["sensor1"],
          sen["sensor2"],
          sen["sensor3"],
          sen["sensor4"],
          sen["sensor5"],
          sen["sensor6"],
          sen["sensor7"],
          sen["sensor8"],
          sen["sensor9"],
        ],
      };
    }),
  };

  return (
    <div
      style={{
        display: "grid",
        flexDirection: "column",
        rowGap: "30px",
        padding: "30px",
      }}
    >
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th></th>
                    <th>YR</th>
                    <th>3 YRS</th>
                    <th>5 YRS</th>
                    <th>10 YRS</th>
                    <th>LIFE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Before Taxes</th>
                    <td>41.62%</td>
                    <td>8.72%</td>
                    <td>9.19%</td>
                    <td>8.79%</td>
                    <td>6.86%</td>
                  </tr>
                  <tr>
                    <th scope="row">Fidelity® Blue Chip Value Fund</th>
                    <td>41.62%</td>
                    <td>8.72%</td>
                    <td>9.19%</td>
                    <td>8.79%</td>
                    <td>6.86%</td>
                  </tr>
                  <tr>
                    <th scope="row">Russell 1000 Value</th>
                    <td>41.62%</td>
                    <td>8.72%</td>
                    <td>9.19%</td>
                    <td>8.79%</td>
                    <td>6.86%</td>
                  </tr>
                  <tr>
                    <th scope="row">Large Value</th>
                    <td>41.62%</td>
                    <td>8.72%</td>
                    <td>9.19%</td>
                    <td>8.79%</td>
                    <td>6.86%</td>
                  </tr>
                  <tr>
                    <th scope="row">Fidelity® Blue Chip Value Fund</th>
                    <td>41.62%</td>
                    <td>8.72%</td>
                    <td>9.19%</td>
                    <td>8.79%</td>
                    <td>6.86%</td>
                  </tr>
                  <tr>
                    <th scope="row">Fidelity® Blue Chip Value Fund</th>
                    <td>41.62%</td>
                    <td>8.72%</td>
                    <td>9.19%</td>
                    <td>8.79%</td>
                    <td>6.86%</td>
                  </tr>
                  <tr>
                    <th scope="row">Fidelity® Blue Chip Value Fund</th>
                    <td>41.62%</td>
                    <td>8.72%</td>
                    <td>9.19%</td>
                    <td>8.79%</td>
                    <td>6.86%</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AverageCol;
