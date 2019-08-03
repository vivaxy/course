/**
 * @since 20180611 14:49
 * @author vivaxy
 */

import ndarray from 'ndarray';
import ops from 'ndarray-ops';

const input = document.getElementById('file');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const logEl = document.querySelector('log');

function log(c) {
  logEl.innerHTML = c;
  console.log(c);
}

const model = new KerasJS.Model({
  filepath: './training/dog.bin',
  gpu: false,
});

model.events.on('loadingProgress', (progress) => {
  log('LoadingProgress: ' + progress + '%');
});

input.addEventListener('change', (e) => {
  const reader = new FileReader();
  reader.addEventListener('load', (_e) => {
    log('Receive file success');

    const img = new Image();
    img.addEventListener('load', () => {
      log('Load image success');

      ctx.drawImage(img, 0, 0, 128, 128);
      const imageData = ctx.getImageData(0, 0, 128, 128);
      const dataTensor = ndarray(new Float32Array(imageData.data), [
        imageData.width,
        imageData.height,
        4,
      ]);
      const dataProcessedTensor = ndarray(
        new Float32Array(imageData.width * imageData.height * 3),
        [imageData.width, imageData.height, 3],
      );
      ops.divseq(dataTensor, 255);
      ops.assign(
        dataProcessedTensor.pick(null, null, 0),
        dataTensor.pick(null, null, 0),
      );
      ops.assign(
        dataProcessedTensor.pick(null, null, 1),
        dataTensor.pick(null, null, 1),
      );
      ops.assign(
        dataProcessedTensor.pick(null, null, 2),
        dataTensor.pick(null, null, 2),
      );
      const preprocessedData = dataProcessedTensor.data;

      model
        .predict({
          [model.inputLayerNames[0]]: new Float32Array(preprocessedData),
        })
        .then((outputData) => {
          log('Predict result: ' + outputData.output[0]);
        })
        .catch((ex) => {
          log('Predict error: ' + ex.stack);
        });
    });
    img.src = _e.target.result;
  });
  reader.readAsDataURL(e.target.files[0]);
});
