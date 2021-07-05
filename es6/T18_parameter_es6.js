function printError({
  errorCode,
  errorMessage: msg
}) {
  console.log(`에러코드: ${errorCode}`);
  console.log(`메시지: ${msg}`);
}

printError({
  errorCode: '404',
  errorMessage: 'Not Found Error'
});
// 에러코드: 404
// 메시지: Not Found Error
