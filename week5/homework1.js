use blog
db.posts.aggregate([
    {$project:{_id:0,"author":"$comments.author"}},
    {$unwind:"$author"},
    {$group:{_id:"$author",count:{$sum:1}}},
    {$sort:{count:-1}},
    {$limit:1}
])