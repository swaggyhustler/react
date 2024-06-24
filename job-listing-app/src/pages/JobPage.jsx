import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";
const JobPage=()=>{
    const [job, setJob]=useState({});
    const [loading, setLoading]=useState(true);
    const {id}=useParams();
    useEffect(()=>{
        try {
            const fetchJob= async ()=>{
                const result=await axios.get(`/api/jobs/${id}`);
                setJob(result.data);
                console.log(job);
            }
            fetchJob();
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    }, []);
    return <>
        {loading?<Spinner />: <h1>{job.title}</h1>}
    </>
}
export default JobPage;