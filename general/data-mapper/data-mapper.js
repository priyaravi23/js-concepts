const data = require('./mock-data.json');

const deviceData = data.channelData[3].devices[0].data.map(o => {
    o.dateTime = +(new Date(o.dateTime));
    return o;
});
const rangeData = data.metadata[0].deviceMetadata[0].ranges.map(({start, end}) => ({
    start: +(new Date(start)),
    end: +((new Date(end)))
}));
const {type} = data.metadata[0];
// get the data for 14:26 till 14.27

// create an inclusive set that covers all the data
const inclusiveRanges = [];
rangeData.forEach((range, index, arr) => {
    const {end} = range;
    const nextIndex = index + 1;
    inclusiveRanges.push({
        ...range,
        type
    });
    if (nextIndex !== arr.length) {
        const next = arr[nextIndex];
        const {start: startNext} = next;

        if (end !== startNext) {
            inclusiveRanges.push({
                start: end,
                end: startNext,
                type: 'gap'
            });
        }
    }
});

console.log(inclusiveRanges);

const mappedData = inclusiveRanges.map(range => {
    const {start, end, type} = range;
    const filteredDeviceData = deviceData.filter(data => {
        const {value, dateTime} = data;
        return (dateTime >= start) && (dateTime <= end);
    });
    return {
        start,
        end,
        type,
        data: filteredDeviceData
    }
});

console.log(mappedData);

this.linePaths = mappedData.map(range => {
    const {type, data} = range;
    // create the linePath by giving the data set here.
    // .datum(data)
    // .attr('stroke', ordinalScale(type))
});
