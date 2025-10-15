
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDataBase')
.then(()=> console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));


//Schema

const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishedDate: { type: Date, default: Date.now },
    isPublished: Boolean,
    rating : Number
})

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name:'NodeJS',
        creator:'Deekshith',
        isPublished:true,
        rating : 4.5
    })

    const result = await course.save();
    console.log(result);
}

// Rating : 1-5

//createCourse();


//eq(equal)
//ne(not equal)
//gt(greater than)
//gte(greater than or equal to) 
//lt(less than)
//lte(less than or equal to)
//in
//nin(not in)




async function getCourses(){
    const courses = await Course.find({rating : {$gte : 4}}).select({name:1,publishedDate:1})
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