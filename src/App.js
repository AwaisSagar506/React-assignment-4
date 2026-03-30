import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){

const [name, setName] = useState("");
const [destination, setDestination] = useState("Lahore");
const [vip, setVip] = useState(false);

return(

<div className="container mt-5">

<h2 className="text-center mb-4">
🚌 Daewoo Express Booking
</h2>

<div className="row">

{/* FORM */}

<div className="col-md-6">

<div className="card p-4">

<h4>Booking Form</h4>

{/* Passenger Name */}

<div className="mb-3">
<label className="form-label">
Passenger Name
</label>

<input 
type="text"
className="form-control"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

</div>

{/* Destination */}

<div className="mb-3">

<label className="form-label">
Destination
</label>

<select 
className="form-select"
value={destination}
onChange={(e)=>setDestination(e.target.value)}
>

<option>Lahore</option>
<option>Karachi</option>
<option>Islamabad</option>

</select>

</div>

{/* Checkbox */}

<div className="form-check mb-3">

<input 
type="checkbox"
className="form-check-input"
checked={vip}
onChange={(e)=>setVip(e.target.checked)}
/>

<label className="form-check-label">
Need VIP Meal
</label>

</div>

{/* Button */}

<button 
className="btn btn-primary"
disabled={name === ""}
>
Confirm Booking
</button>

</div>

</div>

{/* LIVE TICKET */}

<div className="col-md-6">

<div className="card p-4 bg-light">

<h4 className="text-center">
🎟️ Live Ticket Preview
</h4>

<hr/>

<p><strong>Passenger:</strong> {name || "Your Name"}</p>

<p><strong>Destination:</strong> {destination}</p>

<p>
<strong>VIP Meal:</strong> 
{vip ? " Yes 🍽️" : " No"}
</p>

<p><strong>Company:</strong> Daewoo Express</p>

<p><strong>Status:</strong> Confirmed</p>

</div>

</div>

</div>

</div>

)

}

export default App;