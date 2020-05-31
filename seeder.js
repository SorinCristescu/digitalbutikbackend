const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const Leed = require('./models/leed');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Read JSON files
const leeds = JSON.parse(fs.readFileSync(`${__dirname}/data/leeds.json`, 'utf-8'));

// Import into DB
const importData = async () => {
    try {
        await Leed.create(leeds);

        console.log('Data imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

// Delete data
const deleteData = async () => {
    try {
        await Leed.deleteMany();

        console.log('Data destroyed...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

if(process.argv[2] === '-i') {
    importData();
} else if(process.argv[2] === '-d') {
    deleteData();
}

// Run in terminal node seeder -i to import data
// Run in terminal node seeder -d to delete data