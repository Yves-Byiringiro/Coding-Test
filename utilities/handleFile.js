const excelToJson = require("convert-excel-to-json");
const fs = require("fs");

const handleFile = (fileData) => {
    const result = excelToJson({
        source: fileData,
    });
    result.Sheet1.shift();
  return result.Sheet1;
};

module.exports = handleFile;
