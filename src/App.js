import './App.css';
import Header from './components/header/header';
import Medicines from './components/medicines/medicines';
import originalMedicines from './medicines.json';
import Search from './components/search/search';
import { useState, useEffect } from 'react';
function App() {
    //on page load, get our hardcoded medicines from a file
    const [medicines, setMedicines] = useState(originalMedicines);
    // state for the filter from search, the set filter function is passed to the search component
    const [filter, setFilter] = useState('');

    // the useEffect hook uses filter as a dependency, so only when filter is updated, useEffect is called.
    useEffect(() => {
        // sets the medicine state to any medicine with a name or company that includes the search value from the filter state
        // uses toLowerCase() on both the name/company and the filter value so isn't case sensitive
        setMedicines(originalMedicines.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()) || item.company.toLowerCase().includes(filter.toLowerCase())))
    }, [filter]);

    return (
        <>
            <Header>
                <Search setFilter={setFilter} />
            </Header>
            <div className='mild-defaults'>
                <Medicines medicines={medicines} />
            </div>
        </>
    );
}

export default App;
