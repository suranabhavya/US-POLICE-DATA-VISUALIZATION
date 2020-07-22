import React from 'react';

import { VictimRace, VictimAge, VictimSex, SourceSelector, CaseStatus, OccurredYear } from './components';
import styles from './App.module.css';

const d3 = require('d3');

var dataFromSource = [];

const fetchData = async () => {
    const response = await d3.csv('test.csv', function (data) {
        // results.push(data);
        return data;
    })
    return response;
}


class App extends React.Component {
    state = {
        data: {},
        source: '',
        sourceData: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        // console.log(fetchedData.length);
        // for(let i=0; i<fetchedData.length; i++) {
        //     fetchedData[i].source ==
        // }

        this.setState({ data: fetchedData })
    }

    handleSourceChange = async (source) => {
        console.log(source);

        if (source != 'sources') {
            for (let i = 0; i < this.state.data.length; i++) {
                if (source == this.state.data[i].source) {
                    dataFromSource.push(this.state.data[i]);
                }
            }
            console.log(dataFromSource);
            this.setState({ sourceData: dataFromSource });
            // console.log(this.state);
            dataFromSource = [];
        }



        else {
            this.setState({ sourceData: 0 })
        }
    }


    render() {
        const { data } = this.state;
        const { sourceData } = this.state;
        return (
            <div>
                <div className={styles.navbar}>
                    <SourceSelector data={data} handleSourceChange={this.handleSourceChange} />
                </div>
                <div className={styles.container}>
                    <VictimRace data={data} sourceData={sourceData} />
                    <CaseStatus data={data} sourceData={sourceData} />
                    <VictimSex data={data} sourceData={sourceData} />
                </div>
                <div className={styles.container2}>
                    <VictimAge data={data} sourceData={sourceData} />
                    <OccurredYear data={data} sourceData={sourceData} />
                </div>
            </div>
        )
    }
}

export default App;