import React, { useEffect, useState } from 'react'
import './app.css'
import SingleCard from './components/SingleCard'
import { Button, Modal } from 'antd'
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createUserRequest, getUsersRequest } from './redux/actions/user';
import toast, { Toaster } from 'react-hot-toast';
import { useRef } from 'react';
import Loader from './components/Loader';


const App = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const formRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    await dispatch(createUserRequest(name, email, phone, website));
    await dispatch(getUsersRequest());
    formRef.current.resetFields();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    formRef.current.resetFields();
  };

  const { error, createLoading, loading, users, message } = useSelector(state => state.user);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [])


  return (
    !users ? <Loader /> :
      <div className='container' style={{ width: "100%", display: "flex", flexDirection: "column" }} >
        <div className='header' style={{ width: "100%", display: "flex", justifyContent: "center" }} >
          <Button
            type="primary" onClick={showModal} loading={createLoading} style={{ float: "right", marginTop: "1rem" }}>Add User</Button>

          <Modal title="Create User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form ref={formRef} >
              <Form.Item
                label="Name"
                name="Name"
                onChange={(e) => setName(e.target.value)}
                rules={[{ required: true, message: 'Please input your name!' }]}
                style={{ marginTop: "2.5rem" }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
                rules={[{ required: true, message: 'Please input your email!' }]}
                style={{ marginTop: "1.5rem" }}

              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="Phone"
                onChange={(e) => setPhone(e.target.value)}
                rules={[{ required: true, message: 'Please input your phone no. !' }]}
                style={{ marginTop: "1.5rem" }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Website"
                name="Website"
                onChange={(e) => setWebsite(e.target.value)}
                rules={[{ required: true, message: 'Please input website name!' }]}
                style={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}
              >
                <Input />
              </Form.Item>

            </Form>
          </Modal>
        </div>

        <div className={'cardsSection'} style={{ display: "flex", flexWrap: "wrap" }} >
          {
            users.map((item) => (
              <SingleCard key={item._id} id={item._id} name={item.name} email={item.email} phone={item.phone} website={item.website} liked={item.liked} />
            ))
          }
        </div>

        <Toaster />
      </div>
  )
}

export default App
