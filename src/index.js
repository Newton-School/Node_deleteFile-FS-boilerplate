const fs = require("fs/promises");
const fileName = "myfile.txt";
const deleteFile = async (fileName) => {
  // write code here
  // dont change function name
  return await fs.unlink(fileName);
};
module.exports = { deleteFile };
