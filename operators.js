/*
 *
 * @param {EventTarget} target
 * @param {string} eventName
 * @returns {ReadableStream}
 *
 */
const fromEvent = (target, eventName) => {
  let _listerner;

  return new ReadableStream({
    start(controller) {
      _listerner = (e) => controller.enqueue(e);
      target.addEventListener(eventName, _listerner);
    },
    cancel() {
      target.removeEventListener(eventName, _listerner);
    },
  });
};

/*
 *
 * @param {Number} ms
 * @returns {ReadableStream}
 *
 */
const interval = (ms) => {
  let _intervalId;

  return new ReadableStream({
    start(controller) {
      _intervalId = setInterval(() => controller.enqueue(Date.now()), ms);
    },
    cancel() {
      clearInterval(_intervalId);
    },
  });
};
