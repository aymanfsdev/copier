module.exports = class Copier {

    constructor(args = undefined) {
        this.args = args;
    }

    get() {
        return new Promise(resolve => setTimeout(() => resolve(this.args), 1000));
    }
    delete() {
        return new Promise((resolve, reject) => setTimeout(() => reject("Cannot delete!"), 2000));
    }
    copy() {
    	if(typeof this.args === 'object'){
	        let clone = {};
	        for (let key in this.args) {
	            if (this.args.hasOwnProperty(key)) {
	                clone[key] = this.args[key];
	            }
	        }
	        return clone;
    	}
    	return this.args;
    }
}