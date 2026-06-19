import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Requests() {
    const [requests, setRequests] = useState([]);
    const fetchRequests = async () => {
            try {
                const { data } = await api.get( "/requests" );
                setRequests(data);
            } catch (err) {
                console.error(err);
            }
        };
    useEffect(() => {
        fetchRequests();
    }, []);

    const acceptRequest = async (id) => {
            try {
                await api.patch(`/requests/${id}/accept` );
                fetchRequests();
            } catch (err) {
                console.error(err);
            }
        };

    const rejectRequest = async (id) => {
            try {
                await api.patch( `/requests/${id}/reject` );
                fetchRequests();
            } catch (err) {
                console.error(err);
            }
        };

    return (
        <div>
            <h1> Buy Requests </h1>
            {
                requests.map(request => (
                    <div key={request.id} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }} >
                        <h3>{request.title} </h3>
                        <p> Buyer: {" "} {request.username} </p>
                        <p> Status: {" "} {request.status} </p>
                        <button onClick={() => acceptRequest( request.id ) } > Accept </button>
                        <button onClick={() => rejectRequest( request.id ) } > Reject </button>
                    </div>
                ))
            }
        </div>
    );
}