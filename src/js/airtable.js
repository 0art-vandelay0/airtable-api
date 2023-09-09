const Airtable = require('airtable');
require('dotenv').config();

export default class AirtableLogic {
    
    static initializeAirtable() {
        return new Airtable({ apiKey: `${process.env.API_KEY}` }).base( `${process.env.BASE}`);

    }

    static async fetchRecords(base) {
        return new Promise((resolve, reject) => {
            const recordsArr = [];
            base('People').select({
                maxRecords: 100,
                view: "Grid view"
            }).eachPage((records, fetchNextPage) => {
                records.forEach(record => {
                    recordsArr.push(record.get('Name'));
                });
                fetchNextPage();
            }, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(recordsArr);
            });
        });
    }
    
}
