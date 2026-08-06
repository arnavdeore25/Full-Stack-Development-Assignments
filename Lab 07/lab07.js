import fs from "fs/promises";

async function operations() {
  try {
    await fs.writeFile(
      "TempFile.txt",
      "Hello World, This file is created for demonstrating Lab 07 of full stack development",
      "utf8",
    );

    let data = { name: "Arnav", age: 21, institute: "Christ University" };
    await fs.writeFile("JsonFile.json", JSON.stringify(data, null, 2), "utf8");

    let tempdata = await fs.readFile("TempFile.txt", "utf-8");
    console.log(tempdata);

    let jsondata = await fs.readFile("JsonFile.json", "utf-8");
    console.log(jsondata);

    await fs.appendFile(
      "TempFile.txt",
      "\nIt is demonstrating file system module in node",
      "utf8",
    );

    let updatedata = await fs.readFile("TempFile.txt", "utf-8");
    console.log(updatedata);

    await fs.rename("TempFile.txt", "textFile.txt");

    // await fs.unlink("textFile.txt");
  } catch (er) {
    console.log(er);
  }
}

operations();
