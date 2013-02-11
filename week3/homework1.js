use school
var students=db.students.distinct('_id');

for (i=0; i<students.length; i++){
	var id=students[i];
	var student=db.students.findOne({_id:id});

	// Get lowest mark
	var lowe=10000000;
	var lowest=0;
	var found=false;
	for(j=0; j<student.scores.length; j++){
		if(student.scores[j].type=="homework" && student.scores[j].score<lowe){
			lowe=student.scores[j].score;
			lowest=j;
			found=true;
		}
	}
	if(found){
		delete student.scores[lowest];
		student.scores.splice(lowest,1);
	}

	// Update score
	db.students.update({_id:id},{$set: {scores:student.scores }});
}