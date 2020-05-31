const mongoose = require('mongoose');
const slugify = require('slugify');

const LeedSchema = new mongoose.Schema({
     clientName: {
         type: String,
         required: [true, 'Please add your name']
     },
     slug: String,
     projectDescription: {
         type: String,
         required: [true, 'Please add a short description of your project'],
         maxlength: [500, 'Description can not be more than 500 characters']
     },
     projectName: {
         type: String,
         required: false,
         unique: true
     },
     websiteExistingUrl: {
         type: String,
         match: [
            /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
             'Please use a valid URL with HTTP or HTTPS'
         ]
     },
     companyName: {
        type: String,
        required: false
    },
     phone: {
        type: String,
        required: false,
        maxlength: [20, 'Please number can not be longer than 20 characters']
    },
     email:{
        type: String,
        required: [true, 'Please add an email address'],
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please use a valid URL with HTTP or HTTPS'
        ]
    },
     projectType: {
        type: String,
        required: [true, 'Please select your project type'],
    },
     websiteDesignRequirement: {
        type: String,
        required: [true, 'Please select a type of design'],
    },
     websitePurpose: {
        type: String,
        required: [true, 'Please select a purpose of your project'],
    },
     websiteBusinessArea: {
        type: String,
        required: [true, 'Please select your business are'],
    },
     websiteType: {
        type: String,
        required: [true, 'Please select your website type'],
    },
     websiteDesignStyle: {
        type: String,
        required: [true, 'Please select your design style '],
    },
     websiteNrOfProducts: {
        type: String,
        required: [true, 'Please select nr of products'],
    },
     websiteResponsive: {
        type: String,
        required: [true, 'Please select if you want to be responsive'],
    },
     websiteNrOfPages: {
        type: String,
        required: [true, 'Please select nr of pages'],
    },
    //  websiteFeatures: {
    //     type: String,
    //     required: true,
    // },
     websiteStartIn: {
        type: String,
        required: [true, 'Please select when your project must start'],
    },
     websiteEndIn: {
        type: String,
        required: [true, 'Please select when you want your project be done'],
    },
     localDesignerNeed: {
        type: String,
        required: [true, 'Please select if you need local designer/developer'],
    },
     availability: {
        type: String,
        required: [true, 'Please select your availability'],
    },
     experience: {
        type: String,
        required: [true, 'Please select your experience'],
    },
     stateOfProject: {
        type: String,
        required: [true, 'Please select your project status'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create leed slug from the name of project
LeedSchema.pre('save', function(next) {
    this.slug = slugify(this.projectName, { lower: true })
    next();
})

module.exports = mongoose.model('Leed', LeedSchema);