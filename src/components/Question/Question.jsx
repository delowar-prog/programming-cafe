import React from 'react'
import './Question.css'
const Question = () => {
  return (
    <div className='question-section mb-20'>
        <h2 className='my-3 text-2xl font-bold'>Question & Answer Section : </h2>

       <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium text-left">
                1. Difference between Props & State?
            </div>
            <div className="collapse-content"> 
            <p className='text-justify text-lg'><b>Props:</b><br></br> 
            Props is data passing process or media from child component to parent component. It works unidirectional like a waterfall top to bottom. When a data is sent to a component it to be declare as like an attribute & value and receive from a component as props. Props value is not modified, it is read only. <br></br>
            <b>State:</b><br></br>
            State is the heart of the react component which determines the behavior of  the component. It is used to contain data that can be changed or modified over a time. It can be accessed from inside of the component, not from the child component.
            </p>
            </div>
        </div>

        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium text-left">
                2. How does useState works?
            </div>
            <div className="collapse-content"> 
            <p className='text-justify text-lg'><b>useState:</b><br></br> 
            useState hook is the most used hook in react. State & useState hook’s functionality are the same. useState hook is used to control the behavior of the functional component whereas State is used in Class components. They both contain data of a component and can be changed or modified over a time. To use the useState hook at first import the useState from react. Then initialize using like this- 
            Const [state, setState]= useState(initial_value). Here state means current state and setState function can be used to update the state value.  
            </p>
            </div>
        </div>

        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
           <div className="collapse-title text-xl font-medium text-left">
            3. Purpose of useEffect other than fetching data?
            </div>
            <div className="collapse-content"> 
            <p className='text-justify text-lg'><b>useEffect:</b><br></br> 
            useEffect hook is used as a side effect in react components. Usually it is used to fetch data from API or outside.  But it is also used to update the dom directly. useEffect accepts two arguments. The second argument is optional but when pass a dependency value, React will compare the current value of a state with the value of previous render. If they are not equal, the effect is called. The effect will run after each render.   
            </p>
            </div>
        </div>

          <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium text-left">
                4. How does react Works?
            </div>
            <div className="collapse-content"> 
            <p className='text-justify text-lg'><b>React Working Process:</b><br></br> 
            React basically works by maintaining a virtual DOM internally. It is an actual copy of real DOM. Same number of elements or properties have in virtual DOM & real DOM. When needed for any  change in react dom, at first virtual DOM compares and finds out the minimum change element using an algorithm named Diffing Algorithm. Finally virtual DOM modifies the exactly changed area very fast.      
            </p>
            </div>
        </div>
    </div>
  )
}

export default Question