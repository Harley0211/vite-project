import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Bula", "Calumpang", "Labangal", "Apopong", "Buayan"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Barangay"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
