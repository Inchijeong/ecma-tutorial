const p = new PromiseRejectionEvent((resolve, reject) => {
  // 비동기 처리 필요한 코드
})

p.then(onFulfilled, onRejected).catch(errorCallback);