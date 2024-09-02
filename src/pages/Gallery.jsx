import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import FileBase64 from "react-file-base64";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Gallery = () => {
  const api = "https://66ca2cb759f4350f064e95ed.mockapi.io/toDo";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [file, setFile] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    try {
      const { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (file) => {
    setFile(file.base64);
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      get();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (element) => {
    setCurrentEdit(element);
    setFile(element.image); // Set current image to file
    setEditModal(true);
  };

  const handleAdd = () => {
    setAddModal(true);
  };

  const formik = useFormik({
    initialValues: {
      name: currentEdit ? currentEdit.name : "",
      lorem: currentEdit ? currentEdit.lorem : "",
      status: currentEdit ? currentEdit.status : "all",
    },
    enableReinitialize: true, // Reinitialize form values when initialValues change
    onSubmit: async (values) => {
      try {
        const formData = {
          name: values.name,
          lorem: values.lorem,
          status: values.status,
          image: file,
        };
        if (editModal && currentEdit) {
          await axios.put(`${api}/${currentEdit.id}`, formData);
          setEditModal(false);
        } else {
          await axios.post(api, formData);
          setAddModal(false);
        }
        get();
      } catch (error) {
        console.error(error);
      }
      formik.resetForm();
      setFile(null);
    },
  });

  const filteredData = data.filter((element) => {
    return (
      (search === "" ||
        element.name.toLowerCase().includes(search.toLowerCase())) &&
      (filterStatus === "" || element.status.toString() === filterStatus)
    );
  });

  return (
    <div className="dark:bg-slate-800 bg-[#e3e3e3]">
      {/* header */}
      <div className='w-[100%] h-[450px] bg-[url("./assets/sss.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center'>
        <h1 className="sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px] text-[white] text-[52px] font-[800] text-center">
          Need some consultation or want to <br /> collaboration with us? Let’s
          connect!
        </h1>
      </div>

      {/* Filters */}
      <div className="w-[80%] h-[50px] flex justify-evenly items-center m-auto mt-[30px]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-[200px] h-[25px] pl-[5px] rounded-[5px] outline-none "
          placeholder="Search..."
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="w-[100px] h-[25px] rounded-[5px] outline-none"
        >
          <option value="">All</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        <button
          onClick={handleAdd}
          className="w-[100px] h-[25px] rounded-[5px] bg-[#006aff] text-[white] text-[16px] font-[800]"
        >
          + Add
        </button>
      </div>

      {/* Gallery */}
      <div className="w-[70%] h-[auto] pt-[20px] pb-[20px] m-auto flex flex-wrap gap-[50px]">
        {filteredData.map((element) => (
          <div key={element.id} className="w-[350px] flex flex-col gap-[5px] bg-[white]">
            <img src={element.image} alt="" />
            <h1 className="text-[16px] font-[800] p-[10px]">{element.name}</h1>
            <p className="p-[10px]">{element.lorem}</p>
            <div className="flex justify-between items-center p-[10px]">
              <p
                className={
                  element.status
                    ? "text-green-900 w-[100px] text-center h-[30px] flex justify-center items-center bg-[#00ff0049] rounded-[5px]"
                    : "text-red-700 w-[100px] text-center h-[30px] flex justify-center items-center bg-[#ff000049] rounded-[5px]"
                }
              >
                {element.status ? "Active" : "Inactive"}
              </p>
              <button
                onClick={() => handleRemove(element.id)}
                className="w-[100px] h-[30px] bg-[red] text-[white] font-[800] rounded-[5px]"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(element)}
                className="w-[100px] h-[30px] bg-[green] text-[white] font-[800] rounded-[5px]"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Add/Edit */}
      {(addModal || editModal) && (
        <div className="absolute top-0 left-0  w-[100%] bg-black/50 h-[100vh]">
          <div className="h-[400px] w-[370px] rounded-lg m-auto mt-[15%] flex flex-col items-center bg-white p-[20px] justify-evenly">
            <form onSubmit={formik.handleSubmit}>
              <div className="custom-file-input">
                <FileBase64 onDone={handleFileChange} />
              </div>
              <img src={file || (currentEdit && currentEdit.image)} alt="" className="w-[100px] h-[100px] rounded-[50%]" />
              <TextField
                size="small"
                type="text"
                placeholder="Enter name..."
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <TextField
                size="small"
                type="text"
                placeholder="Enter sentence"
                name="lorem"
                value={formik.values.lorem}
                onChange={formik.handleChange}
              />
              <FormControl>
                <Select
                  sx={{ width: "210px" }}
                  size="small"
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value={true}>Active</MenuItem>
                  <MenuItem value={false}>Inactive</MenuItem>
                </Select>
              </FormControl>
              <div className="w-[150px] flex justify-between items-center">
                <Button type="submit">Save</Button>
                <Button
                  color="error"
                  onClick={() => {
                    setAddModal(false);
                    setEditModal(false);
                    formik.resetForm();
                    setFile(null);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

          {/* footer */}
          <div className="w-[100%] h-auto bg-[#023957]  flex flex-wrap gap-[100px] items-center justify-center pt-[50px]    "> 
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[66px] font-[700] text-[white]">DB-</h1>
            <p className="w-[180px] text-[16px] text-[white]">Lizenzo street number 12 Jakarta, Indonesia</p>
            <button className="w-[130px] h-[62px] bg-gradient-to-r from-cyan-700 to-blue-500 text-[white]">
            Get directions
          </button>
          </div>

          <div className="w-[70px] flex flex-col items-start gap-[20px]">
            <h1 className="text-[24px] text-[white] font-[800]">Menu</h1>
            <p className="text-[16px] text-[white]">Home</p>
            <p className="text-[16px] text-[white]">About</p>
            <p className="text-[16px] text-[white]">Gallery</p>
            <p className="text-[16px] text-[white]">Service</p>
          </div>

          <div className="w-[70px] flex flex-col items-start gap-[20px]">
            <h1 className="text-[24px] text-[white] font-[800]">Contact</h1>
            <p className="text-[16px] text-[white]">E-mail</p>
            <p className="text-[16px] text-[white]">Mobile</p>
            <p className="text-[16px] text-[white]">Whatsapp</p>
            <p className="text-[16px] text-[white]">Fax</p>
          </div>

          <div className="w-[70px] flex flex-col items-start gap-[20px]">
            <h1 className="text-[24px] text-[white] font-[800]">Career</h1>
            <p className="text-[16px] text-[white]">Job</p>
            <p className="text-[16px] text-[white]">Part-time</p>
            <p className="text-[16px] text-[white]">Intership</p>
            <p className="text-[16px] text-[white]">Service</p>
          </div>

          <div className="w-[70px] flex flex-col items-start gap-[20px]">
            <h1 className="text-[24px] text-[white] font-[800]">Business</h1>
            <p className="text-[16px] text-[white]">Affiliate</p>
            <p className="text-[16px] text-[white]">Collaboration</p>
            <p className="text-[16px] text-[white]">Investment</p>
            <p className="text-[16px] text-[white]">People</p>
          </div>

          <div className="w-[100%] h-[80px] bg-[white] flex justify-center items-center">
            <p className="text-[16px] text-[#434343]">2021 - Copyright ZHB Studio</p>
          </div>
      </div>
    </div>
  );
};

export default Gallery;
