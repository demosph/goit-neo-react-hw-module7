import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError } from "./redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  });

  return (
    <div className="app">
      <h1>Phonebook</h1>
      {error && <p>{error}</p>}
      <ContactForm />
      {contacts.length > 0 && <SearchBox />}
      <ContactList />
    </div>
  );
}

export default App;
