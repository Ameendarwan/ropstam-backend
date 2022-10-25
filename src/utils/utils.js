const apiCallerName = (text) => {
  console.log('======================================');
  console.log(text);
  console.log('======================================');
};

const Status = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  DEMO: 422,
};

const sendJSONResponse = (res, status, message, content) => {
  res.status(status);
  console.log(content, status);
  if (
    status === module.exports.Status.OK ||
    status === module.exports.Status.CREATED ||
    status === module.exports.Status.NO_CONTENT
  )
    res.json({
      statusCode: status,
      message: message,
      data: content,
      success: true,
    });
  else
    res.json({
      statusCode: status,
      message: message,
      data: content,
      success: false,
    });
};

module.exports = { apiCallerName, sendJSONResponse, Status, AppMessages };
