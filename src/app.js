"use strict";

function App() {
    this.love = "the most powerful force in the universe.";
}

App.prototype.run = function() {
    console.log(".love> is " + this.love);

    return true; 
};

export default App;
