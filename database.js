const {MongoClient}= require("mongodb");

const url =  "mongodb+srv://sriharshamutakodoor_db_user:Rwktm5MnkDoJFIWt@cluster0.r3c0iid.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main(){
    await client.connect();
    console.log("Connected successfully to teh server");
    const db = client.db(dbName);
    const collection = db.collection("User");
    // return "Done";



    // Insert the data 

    const data = {
        firstName : "Deepika",
        lastName : "Padukone",
        city : "Hyderabad",
        phonenumber : "9876543210"
    }
    const insertResult = await collection.insertMany([data]);
    console.log("Inserted Data => ", insertResult);



        // Read the data 
        const findResult = await collection.find({}).toArray();
        console.log("Found Documents =>", findResult)

}

main().then(console.log).catch(console.error).finally(()=> client.close());
