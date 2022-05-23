import AddTeamAdmin from "./components/AdminPage/AddTeamAdmin";
function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 style={{color: "green"}}>SPARTan Football Manage</h1>
        <AddTeamAdmin />
      </header>
    </div>
  );
}

export default App;