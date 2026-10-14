import useFetch from "../useFetch";

const Hotels = () => {

    const { data, loading, error } = useFetch("https://be-4-4-hw-2-delta.vercel.app/hotels");

    console.log(data);

    const hotels = data?.data;
    
    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>Error: {error} </p>
    }

    if(!hotels || hotels.length === 0) {
        return <p>No Hotels,</p>
    }
// 1. Fetch and display all the hotel names present in your database.
    return (
        <div>
            <h2>All Hotels</h2>
            <ul>
                {
                    hotels.map((hotel) => (
                        <li key={hotel._id}>{hotel.name}</li>
                    ))
                }
            </ul>
        </div>
    )

}

export default Hotels;