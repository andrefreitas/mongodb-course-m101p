use students

var students_ids=db.grades.distinct('student_id');
for(i=0; i<students_ids.length; i++){
	var sid=students_ids[i];
	var cursor=db.grades.find({type:"homework",student_id:sid},{_id:true}).sort({score:1}).limit(1);
	db.grades.remove(cursor.next());
}