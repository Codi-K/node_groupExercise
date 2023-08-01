
const { readFile, writeFile } = require("fs").promises;

const start = async () => {
    try {
      //Read File
    const first = await readFile("./file.txt", "utf8");

    // Write file
    await writeFile(
      "./file.txt",
      `THIS IS AWESOME : ${first}`
    );

    console.log(first);
  } catch (error) {
    console.log(error);
  }
};

start();



