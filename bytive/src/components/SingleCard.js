import Card from 'antd/es/card/Card'
import { PhoneOutlined, GlobalOutlined, HeartOutlined, HeartFilled, EditOutlined, DeleteFilled, MailOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { Modal } from 'antd';
import { Form, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { changeLikeRequest, deleteUserRequest, getUsersRequest, updateUserRequest } from '../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const SingleCard = ({ id, name, email, phone, website, liked }) => {
    const dispatch = useDispatch();
    const [isClick, setIsClick] = useState(liked);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [changedName, setChangedName] = useState(name);
    const [changedEmail, setChangedEmail] = useState(email);
    const [changedPhone, setChangedPhone] = useState(phone);
    const [changedWebsite, setChangedWebsite] = useState(website);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        setIsModalOpen(false);
        await dispatch(updateUserRequest(id, changedName, changedEmail, changedPhone, changedWebsite));
        await dispatch(getUsersRequest());
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleLike = async () => {
        await dispatch(changeLikeRequest(id));
        await dispatch(getUsersRequest());
    }

    const handleDelete = async () => {
        await dispatch(deleteUserRequest(id));
        await dispatch(getUsersRequest());
    }


    return (
        <div className='CardStyle' >
            <Card
                style={{ width: "100%", paddingBottom: "1rem" }}
                cover={<img style={{ height: "200px", width: "100%", background: "#f5f5f5" }} alt="example" src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`} />}
            >
                <Col style={{ width: "100%" }}>
                    <Row style={{ height: "1.5rem", fontSize: "16px", fontWeight: "500" }}>
                        {name}
                    </Row>
                    <Row style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", height: "1.5rem", color: "#717171" }}>
                        <span style={{ fontSize: "18px", fontWeight: "bold" }} ><MailOutlined /></span> <p style={{ marginLeft: ".7rem", fontSize: "15px" }}>{email}</p>
                    </Row>
                    <Row style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", height: "1.5rem", color: "#717171" }}>
                        <span style={{ fontSize: "18px" }} ><PhoneOutlined /></span> <p style={{ marginLeft: ".7rem", fontSize: "15px" }}>{phone}</p>
                    </Row>
                    <Row
                        style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", height: "1.5rem", color: "#717171" }}
                    >
                        <span style={{ fontSize: "18px" }} ><GlobalOutlined /></span>
                        <p style={{ marginLeft: ".7rem", fontSize: "15px" }}>{website}</p>
                    </Row>
                </Col>
            </Card>
            <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#717171', background: '#fafafa', border: '1px solid #b8b8b8', padding: '.8rem 2rem' }}>
                <Col style={{ fontSize: '20px', cursor: 'pointer' }}>
                    {!liked ? < HeartOutlined style={{ color: 'red' }} onClick={handleLike} /> : <HeartFilled style={{ color: 'red' }} onClick={handleLike} />}
                </Col>
                <Col style={{ fontSize: '20px', cursor: 'pointer' }} onClick={showModal}>
                    <EditOutlined />
                </Col>
                <Col style={{ fontSize: '20px', cursor: 'pointer' }}>
                    <DeleteFilled onClick={handleDelete} />
                </Col>
            </Row>

            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form className='formStyle' >
                    <Form.Item
                        label="Name"
                        name="Name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        style={{ marginTop: "2.5rem" }}
                        value={changedName}
                        onChange={(e) => setChangedName(e.target.value)}
                    >
                        <Input defaultValue={name} />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        style={{ marginTop: "1.5rem" }}
                        value={changedEmail}
                        onChange={(e) => setChangedEmail(e.target.value)}
                    >
                        <Input defaultValue={email} />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="Phone"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        style={{ marginTop: "1.5rem" }}
                        value={changedPhone}
                        onChange={(e) => setChangedPhone(e.target.value)}
                    >
                        <Input defaultValue={phone} />
                    </Form.Item>
                    <Form.Item
                        label="Website"
                        name="Website"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        style={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}
                        value={changedWebsite}
                        onChange={(e) => setChangedWebsite(e.target.value)}
                    >
                        <Input defaultValue={website} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default SingleCard
