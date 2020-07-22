import React from 'react';
import { Card, CardContent, Typography, Grid, CardHeader } from '@material-ui/core';
import { Pie } from 'react-chartjs-2';

import styles from './CaseStatus.module.css';


const Chart = require('chart.js');

var case_status = [];
var uniqueCaseStatus = [];
var count = [];

const CaseStatus = ({ data, sourceData }) => {

    // dataArray.push(props.data[1]);
    // console.log(dataArray);
    // someData.push(victim_race[1]);
    // console.log(data[0]);
    if (!data[0]) {
        return 'Loading...';
    }

    if (!sourceData[0] || sourceData == 'sources') {
        case_status = [];
        uniqueCaseStatus = [];
        count = [];

        for (let i = 0; i < data.length; i++) {
            // if (data[i].victim_sex == 'M') {
            //     data[i].victim_sex = 'MALE';
            // }
            // if (data[i].victim_sex == 'F') {
            //     data[i].victim_sex = 'FEMALE';
            // }
            // if (data[i].victim_sex == 'U' || data[i].victim_sex == 'UNK') {
            //     data[i].victim_sex = 'UNKNOWN';
            // }
            // // Searched from google that X means transgender!
            // if (data[i].victim_sex == 'X') {
            //     data[i].victim_sex = 'TRANSGENDERED';
            // }
            case_status.push(data[i].case_status)
        }
        console.log(case_status)

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        uniqueCaseStatus = case_status.filter(unique);
        const index = uniqueCaseStatus.indexOf("");
        if (index > -1) {
            uniqueCaseStatus.splice(index, 1);
        }

        console.log(uniqueCaseStatus);

        for (let i = 0; i < uniqueCaseStatus.length; i++) {
            count[i] = 0;
        }

        for (let i = 0; i < case_status.length; i++) {
            for (let j = 0; j < uniqueCaseStatus.length; j++) {
                if (case_status[i] === uniqueCaseStatus[j]) {
                    count[j]++;
                }
            }
        }

        console.log(count);

        var colors = [];

        var dynamicColors = function () {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgb(" + r + "," + g + "," + b + ")";
        };

        for (let i = 0; i < uniqueCaseStatus.length; i++) {
            colors.push(dynamicColors());
        }
        console.log(colors);

    }

    else {
        case_status = [];
        uniqueCaseStatus = [];
        count = [];

        for (let i = 0; i < sourceData.length; i++) {
            // if (sourceData[i].victim_sex == 'M') {
            //     sourceData[i].victim_sex = 'MALE';
            // }
            // if (sourceData[i].victim_sex == 'F') {
            //     sourceData[i].victim_sex = 'FEMALE';
            // }
            // if (sourceData[i].victim_sex == 'U' || sourceData[i].victim_sex == 'UNK') {
            //     sourceData[i].victim_sex = 'UNKNOWN';
            // }
            // // Searched from google that X means transgender!
            // if (sourceData[i].victim_sex == 'X') {
            //     sourceData[i].victim_sex = 'TRANSGENDERED';
            // }
            case_status.push(sourceData[i].case_status)
        }
        console.log(case_status)

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        uniqueCaseStatus = case_status.filter(unique);
        const index = uniqueCaseStatus.indexOf("");
        if (index > -1) {
            uniqueCaseStatus.splice(index, 1);
        }

        console.log(uniqueCaseStatus);

        for (let i = 0; i < uniqueCaseStatus.length; i++) {
            count[i] = 0;
        }

        for (let i = 0; i < uniqueCaseStatus.length; i++) {
            for (let j = 0; j < uniqueCaseStatus.length; j++) {
                if (case_status[i] === uniqueCaseStatus[j]) {
                    count[j]++;
                }
            }
        }

        console.log(count);

        var colors = [];

        var dynamicColors = function () {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgb(" + r + "," + g + "," + b + ")";
        };

        for (let i = 0; i < uniqueCaseStatus.length; i++) {
            colors.push(dynamicColors());
        }
        console.log(colors);
    }


    const PieChart = (
        <Pie
            data={{
                labels: uniqueCaseStatus,
                datasets: [
                    {
                        label: "Victim's Sex",
                        backgroundColor: colors,
                        data: count
                    }
                ]
            }}
        />
    )

    return (
        <Card xs={12} sm={6} md={3} className={styles.caseStatusCard}>
            <CardContent>
                {PieChart}
            </CardContent>
        </Card>
    )
}

export default CaseStatus;