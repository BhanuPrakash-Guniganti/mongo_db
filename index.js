
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


//Comparison Query Operators

//eq(equal)
//ne(not equal)
//gt(greater than)
//gte(greater than or equal to) 
//lt(less than)
//lte(less than or equal to)
//in
//nin(not in)



//Logical Query Operators
//or
//and

async function getCourses(){

const courses = await Course.find({
    $and: [
        { rating: { $in: [4.1, 3.5, 4.6] } },
        { creator: 'Prakash' }
    ]
})
.select({ name: 1, publishedDate: 1 });

console.log(courses);

}

getCourses();


//Updating a document

async function UpdatedCourse(id){
    let course = await Course.findById(id)
    if(!course) return;

    course.name = 'C++';
    course.creator = 'Vamshi';
    const UpdatedCourse = await course.save();
    console.log(UpdatedCourse);
}

//UpdatedCourse('68efd7356d9c45a788fdafcd')

//Deleting a document

async function deleteCourse(id){
    let course = await Course.findByIdAndDelete(id)
    console.log(course);
}

deleteCourse('68efd7356d9c45a788fdafcd')