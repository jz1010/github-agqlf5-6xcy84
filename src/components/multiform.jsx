import React, { Component } from "react";
import axios from 'axios';
import {render} from "react-dom";
//import "../App.css";

const baseURL = "localhost:8080/api/post/";


export default function Multiform(){

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);

    function createPost() {
        axios
            .post(baseURL, {
                title: "Hello World!",
                body: "This is a new post."
            })
            .then((response) => {
                setPost(response.data);
            });
    }

    if (!post) return "No post!"
    
    
    const state = {
        data: '',
        label_name: '',
        favorable_classes: '',
        protected_attribute_names: '',
        privileged_classes: '',
        distortion: '',
        selectedFile: null,
        filename: ''
    }

    const handleChange = (event) => {
        this.setState({
            data: document.getElementById('data').value,
            label_name: document.getElementById('label_name').value,
            favorable_classes: document.getElementById('favorable_classes').value,
            protected_attribute_names: document.getElementById('protected_attribute_names').value,
            privileged_classes: document.getElementById('privileged_classes').value,
            distortion: document.getElementById('distortion').value,
        })
    }

    const fileSelectedHandler = (event) => {
        let file = event.target.files[0].name;
        this.setState({
            selectedFile: event.target.files[0],
            filename: document.getElementById('file').value
        })
        console.log(file);
    }

    const fileUploadHandler = (event) => {

        event.preventDefault();

        let formData = new FormData();

        formData.append('data', this.state.data);
        formData.append('label_name', this.state.label_name);
        formData.append('favorable_classes', this.state.favorable_classes);
        formData.append('protected_attribute_names', this.state.protected_attribute_names);
        formData.append('distortion', this.state.distortion);
        formData.append('filename', this.state.filename);
        formData.append('file', this.state.selectedFile);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post("http://localhost:8080/api/host/", formData, config)
            .then (res => {
                console.log(res.data);
                console.log(this.state.filename);
                console.log(formData);
            })
    }
    onClick()
    {
        this.fileUploadHandler();
        /*this.createPost();*/
    }
    render ()
    {
        return (
            <div className="formDiv">
                <h2>Multipart Form</h2>
                <form encType="multipart/form">
                    <input
                        type="number"
                        name="data"
                        id="data"
                        placeholder="data"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="number"
                        name="label_name"
                        id="label_name"
                        placeholder="label_name"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="number"
                        name="favorable_classes"
                        id="favorable_classes"
                        placeholder="favorable_classes"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="number"
                        name="protected_attribute_names"
                        id="protected_attribute_names"
                        placeholder="protected_attribute_names"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="number"
                        name="distortion"
                        id="distortion"
                        placeholder="distortion"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        placeholder="Upload your file"
                        onChange={this.fileSelectedHandler}
                    />
                    <br/>
                    <button className="submitBtn" type="submit" onClick={this.onClick()}>Submit</button>
                </form>
            </div>
        )
    }
}
