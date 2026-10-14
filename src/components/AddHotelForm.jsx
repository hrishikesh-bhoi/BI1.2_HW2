import React, { useState } from "react";

const AddHotelForm = () => {

    const [ formData, setFormData ] = useState({
        name: "",
        category: "",
        location: "",
        rating: "",
        website: "",
        phoneNumber: "",
        checkInTime: "",
        checkOutTime: "",
        amenities: "",
        priceRange: "",
        reservation: "",
        isParking: "",
        isWifi: "",
        pool: "",
        spa: "",
        restaurant: "",
        photos: "",       

    })

    
const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
        ...prevState,
        [name]: name === "rating" && value !== ""
            ? parseInt(value)
            : value,
    }));
};

  const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const response = await fetch(`${import.meta.env.VITE_API_URL}/hotels`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
    throw new Error("Failed to add Hotel.");
}

            const data = await response.json();
            console.log("Added Hotel: ", data)
            
        } catch (error) {
            console.error("Error adding Hotel:", error.message);
        }
    }


    return (
        <div>
            <h2>Add New Hotel</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name: </label>
                <br />
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <br />
                <label htmlFor="category">Category: </label>
                <br />
                <select name="category" value={formData.category} onChange={handleChange} id="category">
                    <option value="">Select Category</option>
                    <option value="Budget">Budget</option>
                    <option value="Mid-Range">Mid-Range</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Boutique">Boutique</option>
                    <option value="Resort">Resort</option>
                    <option value="Other">Other</option>
                </select>
                <br />
                <label htmlFor="">Location: </label>
                <br />
                <input type="text" value={formData.location} onChange={handleChange} name="location" />
                <br />
                <label htmlFor="">Rating: </label>
                <br />
                <input type="number" value={formData.rating} onChange={handleChange} name="rating"/>
                <br />
                <label htmlFor="">Website: </label>
                <br />
                <input type="text" value={formData.website} onChange={handleChange} name="website" />
                <br />
                <label htmlFor="">Phone Number: </label>
                <br />
                <input type="text" value={formData.phoneNumber} onChange={handleChange} name="phoneNumber" />
                <br />
                <label htmlFor="">Check In Time: </label>
                <br />
                <input type="text" value={formData.checkInTime} onChange={handleChange} name="checkInTime" />
                <br />
                <label htmlFor="">Check Out Time: </label>
                <br />
                <input type="text" value={formData.checkOutTime} onChange={handleChange} name="checkOutTime" />
                <br />
                <label htmlFor="">Amenities: </label>
                <br />
                <input type="text" value={formData.amenities} onChange={handleChange} name="amenities" />
                <br />
                <label htmlFor="priceRange">Price Range: </label>
                <br />
                <select name="priceRange" value={formData.priceRange} onChange={handleChange} id="priceRange">
                    <option value="">Select Price Range</option>
                    <option value="$$ (11-30)">$$ (11-30)</option>
                    <option value="$$$ (31-60)">$$$ (31-60)</option>
                    <option value="$$$$ (61+)">$$$$ (61+)</option>
                    <option value="Other">Other</option>
                </select>
                <br />
                <label htmlFor="">Reservation Needed: </label>
                <input type="radio" value="Yes" id="reservationYes" checked={formData.reservation === "Yes"} onChange={handleChange} name="reservation" />
                <label htmlFor="reservationYes">Yes</label>
                <input type="radio" value="No" id="reservationNo" checked={formData.reservation === "No"} onChange={handleChange} name="reservation" />
                <label htmlFor="reservationNo">No</label>
                <br />
                <label htmlFor="">Is Parking Available: </label>
                <input type="radio" value="Yes" id="parkingYes" checked={formData.isParking === "Yes"} onChange={handleChange} name="isParking" />
                <label htmlFor="parkingYes">Yes</label>
                <input type="radio" value="No" id="parkingNo" checked={formData.isParking === "No"} onChange={handleChange} name="isParking" />
                <label htmlFor="parkingNo">No</label>
                <br />
                <label htmlFor="">Is Wifi Available: </label>
                <input type="radio" value="Yes" id="wifiYes" checked={formData.isWifi === "Yes"} onChange={handleChange} name="isWifi" />
                <label htmlFor="wifiYes">Yes</label>
                <input type="radio" value="No" id="wifiNo" checked={formData.isWifi === "No"} onChange={handleChange} name="isWifi" />
                <label htmlFor="wifiNo">No</label>
                <br />
                <label htmlFor="">Is Pool Available: </label>
                <input type="radio" value="Yes" id="poolYes" checked={formData.pool === "Yes"} onChange={handleChange} name="pool" />
                <label htmlFor="poolYes">Yes</label>
                <input type="radio" value="No" id="poolNo" checked={formData.pool === "No"} onChange={handleChange} name="pool" />
                <label htmlFor="poolNo">No</label>
                <br />
                <label htmlFor="">Is Spa Available: </label>
                <input type="radio" value="Yes" id="spaYes" checked={formData.spa === "Yes"} onChange={handleChange} name="spa"/>
                <label htmlFor="spaYes">Yes</label>
                <input type="radio" value="No" id="spaNo" checked={formData.spa === "No"} onChange={handleChange} name="spa" />
                <label htmlFor="spaNo">No</label>
                <br />
                <label htmlFor="">Is Restaurant Available: </label>
                <input type="radio" value="Yes" id="restaurantYes" checked = {formData.restaurant === "Yes"} onChange={handleChange} name="restaurant" />
                <label htmlFor="restaurantYes">Yes</label>
                <input type="radio" value="No" id="restaurantNo" checked = {formData.restaurant === "No"} onChange={handleChange} name="restaurant" />
                <label htmlFor="restaurantNo">No</label>
                <br />
                <label htmlFor="">Photos: </label>
                <input type="text" value={formData.photos} onChange={handleChange} name="photos" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddHotelForm;