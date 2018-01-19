
module.exports = {

  list: [],

  addToList: function(x) {
    this.list.push(x);
    return this.list;

  },

  sortList: function(){
    this.list.sort((a, b)=>{
      return a - b ;
    });
    return this.list;
  }

};