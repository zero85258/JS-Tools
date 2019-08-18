var StateMachine = require('javascript-state-machine');
// name 填 感受
var chordProgressive = new StateMachine({	//T ST M SD D[9,11,13] SM Dim
    init: 'T',
    transitions: [
      { name: 'feel1', from: 'T', to: 'SD' },
      { name: 'feel2', from: 'T', to: 'DD' },
      { name: 'feel3', from: 'SD', to: 'T' },
      { name: 'feel4', from: 'SD', to: 'D' },
      { name: 'feel5', from: 'D', to: 'T' },
      { name: 'feel6', from: 'D', to: 'SD' },
      { name: 'feel6', from: 'D', to: 'SD' }, 
    ]
  });

console.log(chordProgressive.state);
chordProgressive.feel1();
console.log(chordProgressive.state);
chordProgressive.feel4();
console.log(chordProgressive.state);

console.log(chordProgressive.allTransitions());
console.log(chordProgressive.allStates());
