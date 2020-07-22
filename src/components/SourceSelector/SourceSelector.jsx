import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './SourceSelector.module.css';

// const Chart = require('chart.js');

var source = [];
var uniqueSources = [];

const SourceSelector = ({ data, handleSourceChange }) => {
    source = [];
    // dataArray.push(props.data[1]);
    // console.log(dataArray);
    // someData.push(victim_race[1]);
    // console.log(data[0]);
    if (!data[0]) {
        return 'Loading...';
    }

    for (let i = 0; i < data.length; i++) {
        source.push(data[i].source)
    }
    console.log(source)

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    uniqueSources = source.filter(unique);
    const index = uniqueSources.indexOf("");
    if (index > -1) {
        uniqueSources.splice(index, 1);
    }

    console.log(uniqueSources);

    // for (let i = 0; i < uniqueSources.length; i++) {
    //     count[i] = 0;
    // }

    // for (let i = 0; i < victim_race.length; i++) {
    //     for (let j = 0; j < uniqueRaces.length; j++) {
    //         if (victim_race[i] === uniqueRaces[j]) {
    //             count[j]++;
    //         }
    //     }
    // }

    // console.log(count);

    // var colors = [];

    // var dynamicColors = function () {
    //     var r = Math.floor(Math.random() * 255);
    //     var g = Math.floor(Math.random() * 255);
    //     var b = Math.floor(Math.random() * 255);
    //     return "rgb(" + r + "," + g + "," + b + ")";
    // };

    // for (let i = 0; i < uniqueRaces.length; i++) {
    //     colors.push(dynamicColors());
    // }
    // console.log(colors);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleSourceChange(e.target.value)}>
                <option value="sources">All Sources</option>
                {uniqueSources.map((singleUniqueSources, i) => <option key={i} value={singleUniqueSources}>{singleUniqueSources}</option>)}
            </NativeSelect>
        </FormControl>
    )
}


export default SourceSelector;