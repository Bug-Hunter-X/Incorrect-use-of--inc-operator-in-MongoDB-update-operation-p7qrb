```javascript
// Correct use of $inc operator
db.collection('myCollection').updateOne( { "_id": ObjectId("653068760000000000000000") }, { $inc: { "count": 10 } } );
```