import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Form, Container, Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// hey corrected the code
const Dashboard = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const handleLogout = () =>{
        localStorage.removeItem("user");
        navigate("/");
    }   

    // Fetch Countries Data
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://countriesnow.space/api/v0.1/countries/states");
                const data = await response.json();
                setCountries(data.data); // Store country list
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };
        fetchCountries();
    }, []);

    return (
        <div>
            <h2>Welcome to the dashboard</h2>
            <h2>Select a Country</h2>
            <select onChange={(e) => setSelectedCountry(e.target.value)} value={selectedCountry}>
                <option value="">Select a country</option>
                {countries.map((country, index) => (
                    <option key={index} value={country.name}>
                        {country.name}
                    </option>
                ))}
            </select>
            <button onClick={handleLogout}>
            Logout
            </button>
        </div>
    );
};

export default Dashboard;

// const Dashboard = () => {
//     const navigate = useNavigate();
//     const [countries,setCountries]= useState([]);
//     const[state,setStates]=useState([]);
//     const[selectedCountry,setselectedCountry] = useState("");
//     const [selectedState,setselectedState] = useState("");

//     useEffect(()=>{
//         const fetchCountries = async () => {
//             try {
//                 const response =  await fetch("https://countriesnow.space/api/v0.1/countries/states");
//                 const data = await response.json();
//                 setCountries(data);
//                 console.log(data);
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchCountries();
//     },[]);

//     useEffect(()=>{
//         if(selectedCountry){
//         const fetchStates = async () =>{
//             try {
//                 const response = await fetch(`https://countriesnow.space/api/v0.1/countries/states?q=${selectedCountry}`);
//                 const data = await response.json();
//                 setStates(data.data? data.data.state:[]);
//                 console.log(state)
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     }
//     },[selectedCountry]);



//     const handleLogout = () =>{
//         localStorage.removeItem("user");
//         navigate("/");
//     }   
//     return (
//         <Container>
//             <h2>Welcome to the dashboard</h2>
//             {/* <Form.Group>
//                 <DropdownButton
//                 title={countries || "countries"}
//                 onSelect={(value)=>setselectedCountry(value)}
//                 >
//                     {countries.map((country)=>(
//                         <p>country.name</p>
//                     ))}
//                 </DropdownButton>
//             </Form.Group> */}
//             <select>
//                 <option>
//                     select a country
//                 </option>
//                 {
//                    countries.map((country,index)=>{
//                         <option key = {index} value={country.name}>
//                             {country}
//                         </option>
//                     })
//                 }
//             </select>
//             <button onClick={handleLogout}>
//                 Logout
//             </button>
//         </Container>
//     )
// }
