const filterNone = require('./filterNone.js');
const filterSub = require('./filterSub.js');
const filterUp = require('./filterUp.js');
const filterAvg = require('./filterAvg.js');
const filterPaeth = require('./filterPaeth.js');
const filterSumNone = require('./filterSumNone.js');
const filterSumSub = require('./filterSumSub.js');
const filterSumUp = require('./filterSumUp.js');
const filterSumAvg = require('./filterSumAvg.js');
const filterSumPaeth = require('./filterSumPaeth.js');

var filters = {
  '0': filterNone,
  '1': filterSub,
  '2': filterUp,
  '3': filterAvg,
  '4': filterPaeth,
};

var filterSums = {
  '0': filterSumNone,
  '1': filterSumSub,
  '2': filterSumUp,
  '3': filterSumAvg,
  '4': filterSumPaeth,
};

module.exports = function(pxData, width, height, options, bpp) {
  var filterTypes;
  if (!('filterType' in options) || options.filterType === -1) {
    filterTypes = ['0', '1', '2', '3', '4'];
  }
  else if (typeof options.filterType === 'number') {
    filterTypes = [options.filterType];
  }
  else {
    throw new Error('unrecognised filter types');
  }

  if (options.bitDepth === 16) {
    bpp *= 2; // eslint-disable-line
  }
  var byteWidth = width * bpp;
  var rawPos = 0;
  var pxPos = 0;
  var rawData = new Buffer((byteWidth + 1) * height);

  var sel = filterTypes[0];

  for (var y = 0; y < height; y++) {

    if (filterTypes.length > 1) {
      // find best filter for this line (with lowest sum of values)
      var min = Infinity;

      for (var i = 0; i < filterTypes.length; i++) {
        var sum = filterSums[filterTypes[i]](pxData, pxPos, byteWidth, bpp);
        if (sum < min) {
          sel = filterTypes[i];
          min = sum;
        }
      }
    }

    rawData[rawPos] = parseInt(sel, 10);
    rawPos++;
    filters[sel](pxData, pxPos, byteWidth, rawData, rawPos, bpp);
    rawPos += byteWidth;
    pxPos += byteWidth;
  }
  return rawData;
};
