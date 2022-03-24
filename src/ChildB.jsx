import React from 'react';
import useStore from './store';

function ChildB() {
  console.log('Child B rendering');
  const countA = useStore(state => state.countA);
  const countB = useStore(state => state.countB);

  return (
    <div className="mt-50">
      <h3>Child B</h3>
      <div>
        <div>Count A + B: {countA + countB}</div>
      </div>
    </div>
  );
}

export default ChildB;
