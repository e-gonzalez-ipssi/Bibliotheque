import fs from "fs";

function tsvToJSON(tsv) {
    const tsvFileData = fs.readFileSync(tsv).toString();
    const lines = tsvFileData.split("\n");
    const result = [];
    const headers = lines[0].split("\t");

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split("\t");

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = j == headers.length - 1 ? 
                i == lines.length -1 ? 
                    currentline[j] 
                    : currentline[j].slice(0, -1) 
                : currentline[j];
        }
        
        obj["id"] = i - 1;
        obj["image"] = obj["image\r"];
        obj["image\r"] = null;

        result.push(obj);
    }

    return result;
}

export default tsvToJSON;