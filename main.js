class MyArray {
    constructor(){
        this.length = 0;
        this.data = {

        }
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }


    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index){
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }

    
    unshift(item){
        this.data[this.length] = undefined;
        this.shiftIndexForward();
        this.data[0] = item;
        this.length++;

        return this.data;
        
    }
    

    shiftIndexForward(){


    

        let itemChanged = this.data[0];
        for (let i = 0; i < this.length; i++) {
            let item = this.data[i + 1]
            this.data[i + 1] = itemChanged;
            itemChanged = item;
        }
    }
}

const myArray = new MyArray();

myArray.push("Paco");
myArray.push("Juan");
myArray.push("Carlos");
myArray.push("Toño");
myArray.push("Pedro");



