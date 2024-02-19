import { View, Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
const GraphLine = () => {
    const customDataPoint = () => {
        return (
            <View
                style={{
                    width: 0,
                    height: 0,
                    backgroundColor: 'white',
                    borderWidth: 4,
                    borderRadius: 10,
                    borderColor: '#07BAD1',
                }}
            />
        );
    };
    const customLabel = (val) => {
        return (
            <View style={{ width: 70, marginLeft: 7 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    {val}
                </Text>
            </View>
        );
    };
    const data = [
        {
            value: 100,
            labelComponent: () => customLabel('22 Nov'),
            customDataPoint: customDataPoint,
        },
        {
            value: 140,
            hideDataPoint: true,
        },
        {
            value: 250,
            customDataPoint: customDataPoint,
        },
        {
            value: 290,
            hideDataPoint: true,
        },
        {
            value: 410,
            labelComponent: () => customLabel('24 Nov'),
            customDataPoint: customDataPoint,

            stripHeight: 190,
            stripColor: 'black',

            dataPointLabelShiftY: -70,
            dataPointLabelShiftX: -4,
        },
        {
            value: 440,
            hideDataPoint: true,
        },
        {
            value: 300,
            customDataPoint: customDataPoint,
        },
        {
            value: 280,
            hideDataPoint: true,
        },
        {
            value: 180,
            labelComponent: () => customLabel('26 Nov'),
            customDataPoint: customDataPoint,
        },
        {
            value: 150,
            hideDataPoint: true,
        },
        {
            value: 150,
            customDataPoint: customDataPoint,
        },
    ];
    return (
        <View
            style={{
                marginTop: 100,
                paddingVertical: 50,
                flex: 1,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <LineChart
                thickness={4}
                color='#07BAD1'
                maxValue={600}
                noOfSections={3}
                areaChart
                yAxisTextStyle={{ color: 'lightgray' }}
                data={data}
                curved
                startFillColor={'rgb(84,219,234)'}
                endFillColor={'transparent'}
                startOpacity={0.4}
                endOpacity={0.4}
                spacing={30}
                backgroundColor='rgb(28,28,28)'
                rulesColor='transparent'
                rulesType='solid'
                yAxisColor='transparent'
                xAxisColor='transparent'
            />
        </View>
    );
};

export default GraphLine;
