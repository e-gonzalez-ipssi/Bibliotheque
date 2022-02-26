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
        getLNs: () => {
            const data = tsvToJSON("lns.tsv");
            return data;
        },
        getLN: (parent, args, context, info) => {
            const data = tsvToJSON("lns.tsv");
            return data[args.id];
        },
        getSpeBooks: () => {
            const data = tsvToJSON("livresspeciaux.tsv");
            return data;
        },
        getSpeBook: (parent, args, context, info) => {
            const data = tsvToJSON("livresspeciaux.tsv");
            return data[args.id];
        },
        getArtBooks: () => {
            const data = tsvToJSON("artbooks.tsv");
            return data;
        },
        getArtBook: (parent, args, context, info) => {
            const data = tsvToJSON("artbooks.tsv");
            return data[args.id];
        },
        getMangas: () => {
            const data = tsvToJSON("mangas.tsv");
            return data;
        },
        getManga: (parent, args, context, info) => {
            const data = tsvToJSON("mangas.tsv");
            return data[args.id];
        },
        getCDs: () => {
            const data = tsvToJSON("cds.tsv");
            return data;
        },
        getCD: (parent, args, context, info) => {
            const data = tsvToJSON("cds.tsv");
            return data[args.id];
        },
    },
};

export default romanResolvers