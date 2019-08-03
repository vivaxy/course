/**
 * @since 20180412 16:20
 * @author vivaxy
 */

const { PNG } = require('pngjs3');
const fse = require('fs-extra');

const imageDataToBinary1 = async () => {
  // must be buffer
  const frameData = new Buffer([
    0xff,
    0x00,
    0x00,
    0x80,
    0x00,
    0xff,
    0x00,
    0x80,
    0x00,
    0x00,
    0xff,
    0x80,
    0xff,
    0x00,
    0xff,
    0x80,
  ]);

  const buffer = PNG.sync.write(
    { data: frameData, width: 2, height: 2 },
    { colorType: 6 },
  );
  await fse.writeFile('imageDataToBinary1.png', buffer, { encoding: 'binary' });
};

const binaryToImageData1 = async () => {
  const buffer = await fse.readFile('imageDataToBinary1.png');
  console.log(PNG.sync.read(buffer));
};

(async () => {
  await imageDataToBinary1();
  await binaryToImageData1();
})();
