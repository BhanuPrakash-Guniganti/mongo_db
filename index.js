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

createCourse();