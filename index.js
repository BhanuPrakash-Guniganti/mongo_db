
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDataBase')
.then(()=> console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));


//Schema

const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishedDate: { type: Date, default: Date.now },
    isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name:'Express',
        creator:'Prakash',
        isPublished:false
    })

    const result = await course.save();
    console.log(result);
}


async function getCourses(){
    const courses = await Course.find({creator:'Prakash'}).select({name:1,publishedDate:1}).sort({name:-1})
    console.log(courses);

}

getCourses();


/*

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDataBase')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Schema
const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishedDate: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

// Function to create and fetch course
async function createAndGetCourse() {
    // Create a new course
    const course = new Course({
        name: 'Express',
        creator: 'Mrinal',  // match your query
        isPublished: true
    });
    await course.save();

    // Fetch courses created by 'Mrinal'
    const courses = await Course.find({ creator: 'Mrinal' });
    console.log(courses);
}

// Call the function
createAndGetCourse();
*/