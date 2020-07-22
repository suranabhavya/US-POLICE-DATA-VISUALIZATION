import React from 'react';
import { Card, CardContent, Typography, Grid, CardHeader } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import styles from './VictimSex.module.css';


const Chart = require('chart.js');

var victim_sex = [];
var uniqueSexes = [];
var count = [];

const VictimSex = ({ data, sourceData }) => {

    // dataArray.push(props.data[1]);
    // console.log(dataArray);
    // someData.push(victim_race[1]);
    // console.log(data[0]);
    if (!data[0]) {
        return 'Loading...';
    }

    if (!sourceData[0] || sourceData == 'sources') {
        victim_sex = [];
        uniqueSexes = [];
        count = [];

        for (let i = 0; i < data.length; i++) {
            if (data[i].victim_sex == 'M') {
                data[i].victim_sex = 'MALE';
            }
            if (data[i].victim_sex == 'F') {
                data[i].victim_sex = 'FEMALE';
            }
            if (data[i].victim_sex == 'U' || data[i].victim_sex == 'UNK') {
                data[i].victim_sex = 'UNKNOWN';
            }
            // Searched from google that X means transgender!
            if (data[i].victim_sex == 'X') {
                data[i].victim_sex = 'TRANSGENDERED';
            }
            victim_sex.push(data[i].victim_sex)
        }
        console.log(victim_sex)

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        uniqueSexes = victim_sex.filter(unique);
        const index = uniqueSexes.indexOf("");
        if (index > -1) {
            uniqueSexes.splice(index, 1);
        }

        console.log(uniqueSexes);

        for (let i = 0; i < uniqueSexes.length; i++) {
            count[i] = 0;
        }

        for (let i = 0; i < victim_sex.length; i++) {
            for (let j = 0; j < uniqueSexes.length; j++) {
                if (victim_sex[i] === uniqueSexes[j]) {
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

        for (let i = 0; i < uniqueSexes.length; i++) {
            colors.push(dynamicColors());
        }
        console.log(colors);

    }

    else {
        victim_sex = [];
        uniqueSexes = [];
        count = [];

        for (let i = 0; i < sourceData.length; i++) {
            if (sourceData[i].victim_sex == 'M') {
                sourceData[i].victim_sex = 'MALE';
            }
            if (sourceData[i].victim_sex == 'F') {
                sourceData[i].victim_sex = 'FEMALE';
            }
            if (sourceData[i].victim_sex == 'U' || sourceData[i].victim_sex == 'UNK') {
                sourceData[i].victim_sex = 'UNKNOWN';
            }
            // Searched from google that X means transgender!
            if (sourceData[i].victim_sex == 'X') {
                sourceData[i].victim_sex = 'TRANSGENDERED';
            }
            victim_sex.push(sourceData[i].victim_sex)
        }
        console.log(victim_sex)

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        uniqueSexes = victim_sex.filter(unique);
        const index = uniqueSexes.indexOf("");
        if (index > -1) {
            uniqueSexes.splice(index, 1);
        }

        console.log(uniqueSexes);

        for (let i = 0; i < uniqueSexes.length; i++) {
            count[i] = 0;
        }

        for (let i = 0; i < victim_sex.length; i++) {
            for (let j = 0; j < uniqueSexes.length; j++) {
                if (victim_sex[i] === uniqueSexes[j]) {
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

        for (let i = 0; i < uniqueSexes.length; i++) {
            colors.push(dynamicColors());
        }
        console.log(colors);
    }


    const DoughnutChart = (
        <Doughnut
            data={{
                labels: uniqueSexes,
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
        <Card xs={12} sm={6} md={3} className={styles.victimSexCard}>
            <CardContent>
                {DoughnutChart}
            </CardContent>
        </Card>
    )
}

export default VictimSex;