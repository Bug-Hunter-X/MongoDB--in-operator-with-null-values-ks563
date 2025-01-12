```javascript
// Correct usage using $or operator to handle null values separately
db.collection.find({ $or: [{ field: { $in: [1, 2] } }, { field: null }] });

//Alternative: check for null explicitly before the $in query
var query = {$in: [1,2]};
if(conditionToIncludeNulls) {
    query = {$or: [{ field: { $in: [1, 2] } }, { field: null }] };
}
db.collection.find({field: query});
```