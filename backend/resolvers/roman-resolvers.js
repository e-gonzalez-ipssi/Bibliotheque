import tsvToJSON from "../helper/toJson.js";

const romanResolvers = {
    Query: {
        getRomans: () => {
            const data = tsvToJSON("romans.tsv");
            return data;
        },
        getRoman: (parent, args, context, info) => {
            const data = tsvToJSON("romans.tsv");
            return data[args.id];
        },
    },
};

export default romanResolvers