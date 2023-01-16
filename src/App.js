import "./App.css";

function App() {
  return (
    <div className="App-header">
      <form className="basic-form">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="First Name" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Last Name"/>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email"/>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
