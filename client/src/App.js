import  './App.css';
import Graph from './components/graph.js';
import Form from './components/form';

function App() {
  return (
    <div className="App">
    {/* <div className="container mx-auto  text-center drop-shadow-lg text-gray-800"> */}
    <h1 className="heading text-4xl py-8 bg-slate-600 text-white">Expense Tracker</h1>
    {/* <h1 className="heading text-4xl p-8 ">Expense Manager</h1> */}


    <div className="grid py-10 md:grid-cols-2 gap-4">
          {/* Chart */}
          <Graph></Graph>
          {/* Form */}
          <Form></Form>
      </div>
    
    </div>
    // </div>
  );
}

export default App;
