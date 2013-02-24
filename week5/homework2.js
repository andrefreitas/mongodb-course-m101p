
db.zips.aggregate([{$match:{state:{$in:["CT","NJ"]}}},{$group:{_id:{"city":"$city","state":"$state"},"pop":{$sum:"$pop"}}},{$match:{pop:{$gt:25000}}},{$group:{_id:0,"avg":{$avg:"$pop"}}}])