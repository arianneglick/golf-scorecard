/**
 * Created by arianneglick on 11/8/16.
 */
function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}

Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};

Queue.prototype.enQueue = function() {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};

Queue.prototype.deQueue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;

    if(oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;

        return deletedData;
    }
};

var myQueue = new Queue();

myQueue.enQueue(1);
myQueue.enQueue(2);
myQueue.enQueue(3);