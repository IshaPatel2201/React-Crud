import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const userName = JSON.parse(localStorage.getItem("user"));
    const handleLogout = () => {
        localStorage.removeItem("loggeduser");
        navigate("/login")
    }
    
    const [showForm, setShowForm] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formdata, setFormdata] = useState({
        name: "",
        address: "",
        select: "",
        check: "",
        radio:"",

    });

    const [errors, setErrors] = useState({});
    const[userData,setUserData]=useState([]);

    const handelChange=(e)=>{
        // console.log("e",e.target.value);
        setFormdata({...formdata,[e.target.name]:e.target.value})

    };


    const validateForm = () => {
        let errors = {};
        if (!formdata.name.trim()) errors.name = "Name is required";
        if (!formdata.address.trim()) errors.address = "Address is required";
        if (!formdata.select) errors.select = "City selection is required";
        if (!formdata.radio) errors.radio = "Please select Yes or No";
        if (!formdata.check) errors.check = "Please select at least one hobby";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    // console.log("formdata",formdata)


    const formdataSubmit=(e)=>{
        e.preventDefault();


        if (!validateForm()) return;
        if(editIndex!==null){
            const updatedData=userData.map((item,index)=>
                index===editIndex?formdata:item
            );
            setUserData(updatedData);
            setEditIndex(null);
        }
        else{

            console.log("data",formdata)
            setUserData([...userData,formdata])
        }
        setShowForm(false);
        setFormdata({ name: "", address: "", select: "", check: "", radio: "" }); 
    }

    useEffect(()=>{
        console.log("userData",userData)
    },[userData]);

    const handleDelete= (id)=>{
        // console.log("dlete",id);
        const filterData=userData.filter((item,i)=>(
            i!=id
        ))
        setUserData(filterData)  
    }

    const handelEdit=(item,index)=>{
        // console.log("item",item);
        // console.log("index",index)
        setFormdata(item);
        setEditIndex(index);

    }

    // const formdataSubmit = () => {
    //     console.log("first", formdataSubmit)
    // }
    const handleContect = () => {
        localStorage.removeItem("loggeduser");
        navigate("/contect")
    }
    return (
        <>
            <div>
                <div class="container mt-4 ">
                    <button class="btn btn-primary mb-3 " type="submit" onClick={()=>setShowForm(!showForm)}>
                        {showForm?"HIde Form":"newUser"}</button>
                </div>
            {showForm&&(
                <div class="card w-50 justify-Content-center">
                    <div class="card-body">
                        <form >
                            <h5 class="card-title">Employee Form</h5>
                            <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Name:</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='name'
                                    placeholder="Enter the Name"
                                    aria-label="default input example"
                                    value={formdata.name}
                                     onChange={handelChange}  />
                                      {errors.name && <p className="text-danger">{errors.name}</p>}

                                <label for="exampleFormControlTextarea1" class="form-label">Address:</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                name='address'
                                    value={formdata.address}
                                     onChange={handelChange} 
                                     ></textarea>
                                    {errors.address && <p className="text-danger">{errors.address}</p>}

                                <label for="exampleFormControl" class="form-label" >Select the City:</label>
                                <select class="form-select" aria-label="Default select example" name='select' value={formdata.select} onChange={handelChange}>
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                                {errors.select && <p className="text-danger">{errors.select}</p>}


                                <div class="form-check">
                                <label for="exampleFormControlTextarea1" class="form-label">Language:</label> <br/>
                                    <input class="form-check-input" type="checkbox"  value="Reading"
                                        checked={formdata.check === "Reading"} id="flexCheckDefault" name='check' onChange={handelChange} />
                                    <label class="form-check-label" for="flexCheckDefault">JavaScript</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Cricket"
                                        checked={formdata.check === "Cricket"} id="flexCheckChecked"   name='check' onChange={handelChange}/>
                                    <label class="form-check-label" for="flexCheckChecked">Ui/Ux</label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Cricket"
                                        checked={formdata.check === "Cricket"} id="flexCheckChecked"   name='check' onChange={handelChange}/>
                                    <label class="form-check-label" for="flexCheckChecked">React JS</label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Cricket"
                                        checked={formdata.check === "Cricket"} id="flexCheckChecked"   name='check' onChange={handelChange}/>
                                    <label class="form-check-label" for="flexCheckChecked">python</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Cricket"
                                        checked={formdata.check === "Cricket"} id="flexCheckChecked"   name='check' onChange={handelChange}/>
                                    <label class="form-check-label" for="flexCheckChecked">Cyber Security</label>
                                </div>
                                {errors.select && <p className="text-danger">{errors.select}</p>}


                                <div class="form-check">

                                    <label for="exampleFormControlTextarea1" class="form-label">Language:</label> <br/>
                                    <input class="form-check-input" type="radio" name="radio" id="exampleRadios1"  value="Yes"
                                        checked={formdata.radio === "Yes"}  onChange={handelChange}/>
                                    <label class="form-check-label" for="exampleRadios1">
                                        yes
                                    </label>
                                </div>
                                <div class="form-check">

                                    <input class="form-check-input" type="radio" name="radio" id="exampleRadios2"  value="No"
                                        checked={formdata.radio === "No"}  onChange={handelChange}/>
                                    <label class="form-check-label" for="exampleRadios2">
                                        No
                                    </label>
                                </div>
                                {errors.radio && <p className="text-danger">{errors.radio}</p>}

                            </div>

                            <button class="btn btn-primary" type='submit'
                             onClick={formdataSubmit}
                            >{editIndex !== null ? "Update" : "Submit"}</button>
                        </form>
                    </div>
                </div>
                )}

                {/* <button
                                    onClick={handleLogout}
                                    type='submit'
                                    class='btn btn-success btn-block btn-lg gradient-custom-4 text-body center' 
                                    >
                                        Logout
                                    </button>
                                    <button
                                   onClick={handleContect}
                                    type='submit'
                                    class='btn btn-success btn-block btn-lg gradient-custom-4 text-body center' 
                                    >
                                        Contect
                                    </button> */}

            </div>
            <section
                class="vh-100 bg-image"
                style={{
                    backgroundImage: "url('https://mbdcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
                }}
            >
                {/* <div className='mask d-flex align-item-center h-100 gradient-custom-3'>
                <div className='container h-100'>
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
                            <div className='card' style={{ borderRadius: "15px" }}>
                                <div className='card-body p-5'>
                                    <h2 className='text-uppercase text-center mb-5'>
                                        Home Page
                                    </h2>
                                    <p className='text-center'> Welcome To Home Page -{userName.name}</p>

                                    <button class="btn btn-primary" type="submit">New User</button>
                                    <button
                                    onClick={handleLogout}
                                    type='submit'
                                    class='btn btn-success btn-block btn-lg gradient-custom-4 text-body center' 
                                    >
                                        Logout
                                    </button>
                                    <button
                                   onClick={handleContect}
                                    type='submit'
                                    class='btn btn-success btn-block btn-lg gradient-custom-4 text-body center' 
                                    >
                                        Contect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            </section>

             <table className='table table-bordered mt-5'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Hobby</th>
                        <th>Answer</th>
                        <th colSpan={"2"}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((item,i) => {
                            return (
                                <tr key={i} >
                                   
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.select}</td>
                                    <td>{item.check}</td>
                                    <td>{item.radio}</td>
                                    <td>
                                        <button className='btn btn-info mx-3' onClick={()=>handelEdit(item,i)}>Edit</button>
                                        <button className='btn btn-info' onClick={()=>handleDelete(i)}>Delete</button>
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> 
        </>
    )
}

export default Home